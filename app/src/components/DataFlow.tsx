import { useEffect, useRef } from 'react'
import { useMotionValueEvent, type MotionValue } from 'framer-motion'

const VIOLET = '#8b5cf6'
const FUCHSIA = '#d946ef'
const CYAN = '#22d3ee'
const INK = '#0b0a14'

// Two pipes: sources -> ingest hub -> transforms -> serve. They merge in the hub and in the sink.
// The sink (right) is where the data "arrives to the profile".
const pipes = [
  {
    color: VIOLET,
    d: 'M120,75 C320,75 360,150 540,150 C700,150 720,85 900,85 C1040,85 1060,150 1120,150',
    offset: 0,
  },
  {
    color: CYAN,
    d: 'M120,225 C320,225 360,150 540,150 C700,150 720,215 900,215 C1040,215 1060,150 1120,150',
    offset: 0.05,
  },
]

const nodes = [
  { x: 120, y: 75, r: 7, color: VIOLET },
  { x: 120, y: 225, r: 7, color: CYAN },
  { x: 540, y: 150, r: 11, color: FUCHSIA },
  { x: 900, y: 85, r: 8, color: VIOLET },
  { x: 900, y: 215, r: 8, color: CYAN },
]
const SINK = { x: 1120, y: 150 }

const BOXES = 4 // boxes per pipe
const DURATION = 0.45 // share of the scroll one box needs, from the jump to the sink
const STAGGER = (1 - DURATION - 0.05) / (BOXES - 1)
const JUMP = 0.16 // first part of a box journey: it hops into the pipe
const BOX = 12

const clamp = (v: number, min = 0, max = 1) => Math.min(max, Math.max(min, v))

/**
 * Data boxes that hop into the pipes and travel to the end of the pipeline as the visitor scrolls.
 * `progress` (0 → 1) is the scroll progress of the animation, the boxes are placed from it directly,
 * so scrolling back rewinds them.
 */
export function DataFlow({
  progress,
  className,
}: {
  progress: MotionValue<number>
  className?: string
}) {
  const pathRefs = useRef<(SVGPathElement | null)[]>([])
  const boxRefs = useRef<(SVGRectElement | null)[]>([])
  const sinkRef = useRef<SVGGElement>(null)

  const update = (p: number) => {
    pipes.forEach((pipe, pi) => {
      const path = pathRefs.current[pi]
      if (!path) return
      const length = path.getTotalLength()
      const start = path.getPointAtLength(0)

      for (let k = 0; k < BOXES; k++) {
        const rect = boxRefs.current[pi * BOXES + k]
        if (!rect) continue
        const raw = (p - pipe.offset - k * STAGGER) / DURATION
        if (raw <= 0 || raw >= 1) {
          rect.setAttribute('opacity', '0')
          continue
        }

        let x: number
        let y: number
        let angle = 0
        let opacity = 1
        if (raw < JUMP) {
          // hop into the start of the pipe along an arc
          const j = raw / JUMP
          x = start.x - 70 * (1 - j)
          y = start.y - 45 * 4 * j * (1 - j)
          angle = -90 * (1 - j)
          opacity = clamp(j * 3)
        } else {
          const t = (raw - JUMP) / (1 - JUMP)
          const pt = path.getPointAtLength(t * length)
          x = pt.x
          y = pt.y
          if (t > 0.94) opacity = clamp((1 - t) / 0.06)
        }
        rect.setAttribute('transform', `translate(${x} ${y}) rotate(${angle})`)
        rect.setAttribute('opacity', String(opacity))
      }
    })

    // the sink lights up while the boxes arrive
    const sink = sinkRef.current
    if (sink) {
      const arrive = clamp((p - 0.45) / 0.55)
      sink.setAttribute('opacity', String(0.25 + 0.75 * arrive))
      sink.setAttribute(
        'transform',
        `translate(${SINK.x} ${SINK.y}) scale(${1 + 0.35 * arrive})`,
      )
    }
  }

  useEffect(() => {
    update(progress.get())
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  useMotionValueEvent(progress, 'change', update)

  return (
    <svg
      viewBox="0 0 1240 300"
      className={className}
      fill="none"
      aria-hidden
      preserveAspectRatio="xMidYMid meet"
    >
      {/* pipe walls, then the hollow inside */}
      {pipes.map((pipe, i) => (
        <path
          key={`wall-${i}`}
          d={pipe.d}
          stroke={pipe.color}
          strokeOpacity={0.35}
          strokeWidth={22}
          strokeLinecap="round"
        />
      ))}
      {pipes.map((pipe, i) => (
        <path
          key={`in-${i}`}
          ref={(el) => {
            pathRefs.current[i] = el
          }}
          d={pipe.d}
          stroke={INK}
          strokeWidth={17}
          strokeLinecap="round"
        />
      ))}

      {/* nodes */}
      {nodes.map((n, i) => (
        <g key={i}>
          <circle cx={n.x} cy={n.y} r={n.r + 6} fill={n.color} opacity={0.12} />
          <circle cx={n.x} cy={n.y} r={n.r} fill={n.color} opacity={0.8} />
        </g>
      ))}

      {/* sink: where the data arrives */}
      <g ref={sinkRef} transform={`translate(${SINK.x} ${SINK.y})`} opacity={0.25}>
        <circle r={22} fill={CYAN} opacity={0.15} />
        <circle r={13} fill={CYAN} />
      </g>

      {/* data boxes */}
      {pipes.flatMap((pipe, pi) =>
        Array.from({ length: BOXES }, (_, k) => (
          <rect
            key={`box-${pi}-${k}`}
            ref={(el) => {
              boxRefs.current[pi * BOXES + k] = el
            }}
            x={-BOX / 2}
            y={-BOX / 2}
            width={BOX}
            height={BOX}
            rx={2.5}
            fill={(pi + k) % 2 ? FUCHSIA : pipe.color}
            opacity={0}
          />
        )),
      )}
    </svg>
  )
}
