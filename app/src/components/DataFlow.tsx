import { useEffect, useRef } from 'react'
import { useMotionValueEvent, type MotionValue } from 'framer-motion'

const VIOLET = '#8b5cf6'
const FUCHSIA = '#d946ef'
const CYAN = '#22d3ee'
const INK = '#0b0a14'

// Data mesh: 3 sources feed in → merge → trunk → branch into 3 pipes → reconverge → 1 exit
// (the profile). Pipes draw in progressively and boxes ride the growing front.
type Seg = { d: string; color: string; a: number; b: number } // a,b = reveal window (0..1)

const feeders: Seg[] = [
  { d: 'M80,60 C180,60 230,120 300,170', color: VIOLET, a: 0.0, b: 0.14 },
  { d: 'M300,40 L300,170', color: FUCHSIA, a: 0.0, b: 0.14 },
  { d: 'M520,60 C420,60 370,120 300,170', color: CYAN, a: 0.0, b: 0.14 },
]
const trunk: Seg[] = [{ d: 'M300,170 L300,340', color: FUCHSIA, a: 0.12, b: 0.3 }]
const branches: Seg[] = [
  { d: 'M300,340 C250,340 160,380 160,470 L160,600', color: VIOLET, a: 0.28, b: 0.55 },
  { d: 'M300,340 L300,600', color: FUCHSIA, a: 0.28, b: 0.55 },
  { d: 'M300,340 C350,340 440,380 440,470 L440,600', color: CYAN, a: 0.28, b: 0.55 },
]
const reconverge: Seg[] = [
  { d: 'M160,600 C160,700 240,760 300,790', color: VIOLET, a: 0.52, b: 0.78 },
  { d: 'M300,600 L300,790', color: FUCHSIA, a: 0.52, b: 0.78 },
  { d: 'M440,600 C440,700 360,760 300,790', color: CYAN, a: 0.52, b: 0.78 },
]
const walls = [...feeders, ...trunk, ...branches, ...reconverge]

// Continuous lanes (for box motion): feeder → trunk → branch → reconverge, one per branch.
const lanes = [
  'M80,60 C180,60 230,120 300,170 L300,340 C250,340 160,380 160,470 L160,600 C160,700 240,760 300,790',
  'M300,40 L300,170 L300,340 L300,600 L300,790',
  'M520,60 C420,60 370,120 300,170 L300,340 C350,340 440,380 440,470 L440,600 C440,700 360,760 300,790',
]
const laneColors = [VIOLET, FUCHSIA, CYAN]

const EXIT = { x: 300, y: 790 }
const COUNT = 9
const BOX = 13
const DUR = 0.5
const FIRST = 0.08
const STAGGER = (0.96 - DUR - FIRST) / (COUNT - 1)
const DRAW_DONE = 0.78 // lanes fully drawn by this progress

const clamp = (v: number, min = 0, max = 1) => Math.min(max, Math.max(min, v))

export function DataFlow({
  progress,
  className,
}: {
  progress: MotionValue<number>
  className?: string
}) {
  const wallRefs = useRef<(SVGPathElement | null)[]>([])
  const inkRefs = useRef<(SVGPathElement | null)[]>([])
  const wallLen = useRef<number[]>([])
  const laneRefs = useRef<(SVGPathElement | null)[]>([])
  const laneLen = useRef<number[]>([])
  const boxRefs = useRef<(SVGRectElement | null)[]>([])
  const exitRef = useRef<SVGGElement>(null)

  const update = (p: number) => {
    // progressive pipe reveal
    walls.forEach((seg, i) => {
      const len = wallLen.current[i]
      if (!len) return
      const drawn = clamp((p - seg.a) / (seg.b - seg.a))
      const off = String(len * (1 - drawn))
      wallRefs.current[i]?.setAttribute('stroke-dashoffset', off)
      inkRefs.current[i]?.setAttribute('stroke-dashoffset', off)
    })

    const drawnFrac = clamp((p - 0.02) / (DRAW_DONE - 0.02))

    for (let i = 0; i < COUNT; i++) {
      const rect = boxRefs.current[i]
      if (!rect) continue
      const li = i % lanes.length
      const path = laneRefs.current[li]
      const len = laneLen.current[li]
      if (!path || !len) continue

      const u = (p - (FIRST + i * STAGGER)) / DUR
      if (u <= 0 || u >= 1.05) {
        rect.setAttribute('opacity', '0')
        continue
      }
      // ride the growing front: never go past what's drawn (until fully drawn)
      const frac = drawnFrac >= 1 ? Math.min(u, 1) : Math.min(u, drawnFrac)
      const pt = path.getPointAtLength(frac * len)
      const op = clamp(u * 4) * clamp((1.05 - u) * 4)
      rect.setAttribute('transform', `translate(${pt.x} ${pt.y})`)
      rect.setAttribute('opacity', String(op))
    }

    const exit = exitRef.current
    if (exit) {
      const arrive = clamp((p - 0.6) / 0.35)
      exit.setAttribute('opacity', String(0.2 + 0.8 * arrive))
      exit.setAttribute('transform', `translate(${EXIT.x} ${EXIT.y}) scale(${1 + 0.5 * arrive})`)
    }
  }

  useEffect(() => {
    wallLen.current = wallRefs.current.map((el, i) => {
      const len = el?.getTotalLength() ?? 0
      ;[el, inkRefs.current[i]].forEach((p) => {
        if (p) {
          p.setAttribute('stroke-dasharray', String(len))
          p.setAttribute('stroke-dashoffset', String(len))
        }
      })
      return len
    })
    laneLen.current = laneRefs.current.map((el) => el?.getTotalLength() ?? 0)
    update(progress.get())
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  useMotionValueEvent(progress, 'change', update)

  return (
    <svg
      viewBox="0 0 600 860"
      className={className}
      fill="none"
      aria-hidden
      preserveAspectRatio="xMidYMid meet"
    >
      {/* hidden lane paths for box motion */}
      {lanes.map((d, i) => (
        <path
          key={`lane-${i}`}
          ref={(el) => {
            laneRefs.current[i] = el
          }}
          d={d}
          stroke="none"
        />
      ))}

      {/* pipe walls (progressive reveal) */}
      {walls.map((seg, i) => (
        <path
          key={`wall-${i}`}
          ref={(el) => {
            wallRefs.current[i] = el
          }}
          d={seg.d}
          stroke={seg.color}
          strokeOpacity={0.4}
          strokeWidth={22}
          strokeLinecap="round"
        />
      ))}
      {/* hollow ink interior → tube look */}
      {walls.map((seg, i) => (
        <path
          key={`ink-${i}`}
          ref={(el) => {
            inkRefs.current[i] = el
          }}
          d={seg.d}
          stroke={INK}
          strokeWidth={16}
          strokeLinecap="round"
        />
      ))}

      {/* nodes */}
      {[
        { x: 80, y: 60, c: VIOLET },
        { x: 300, y: 40, c: FUCHSIA },
        { x: 520, y: 60, c: CYAN },
        { x: 300, y: 170, c: FUCHSIA },
        { x: 300, y: 340, c: VIOLET },
      ].map((n, i) => (
        <circle key={`node-${i}`} cx={n.x} cy={n.y} r={7} fill={n.c} opacity={0.85} />
      ))}

      {/* exit (the profile) */}
      <g ref={exitRef} transform={`translate(${EXIT.x} ${EXIT.y})`} opacity={0.2}>
        <circle r={24} fill={CYAN} opacity={0.15} />
        <circle r={13} fill={CYAN} />
      </g>

      {/* data boxes */}
      {Array.from({ length: COUNT }, (_, i) => (
        <rect
          key={`box-${i}`}
          ref={(el) => {
            boxRefs.current[i] = el
          }}
          x={-BOX / 2}
          y={-BOX / 2}
          width={BOX}
          height={BOX}
          rx={2.5}
          fill={laneColors[i % laneColors.length]}
          opacity={0}
        />
      ))}
    </svg>
  )
}
