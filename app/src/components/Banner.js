import { useState, useEffect } from "react"
import { Container, Row, Col } from "react-bootstrap"
import { ArrowRightCircle } from "react-bootstrap-icons"

import headerImg from "../assets/img/header-img.svg"


export const Banner = () => {
    const [loopIdx, setLoopIdx] = useState(0)
    const [isDeleting, setIsDeleting] = useState(false)
    const titleRotateList = ["Data Engineer", "Data Scientist", "Ops Engineer"]
    const [text, setText] = useState('')
    const [delta, setDelta] = useState(300 - Math.random() * 100)
    const period = 2000
    const emptyText = ''


    useEffect(() => {
        let ticker = setInterval(() => {
            tick()
        }, delta);

        return () => { clearInterval(ticker) }
    }, [text])

    const tick = () => {
        let i = loopIdx % titleRotateList.length;
        let fullText = titleRotateList[i];
        let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

        setText(updatedText);

        if (isDeleting) {
            setDelta(previousDelta => previousDelta / 2);
        }

        if (!isDeleting && updatedText === fullText) {
            setIsDeleting(true);
            setDelta(period);
        } else if (isDeleting && updatedText === emptyText) {
            setIsDeleting(false);
            setLoopIdx(loopIdx + 1);
            setDelta(500);
        }
    }

    return (
        <section className="banner" id="home">
            <Container>
                <Row className=" align-items-center">
                    <Col xs={12} md={6} xl={7}>
                        <span className="tagline">Welcome to my portofolio</span>
                        <h1>
                            <span className="wrap">{text}</span>
                        </h1>
                        <p>Hello, I'm Xavier, {text}</p>
                        <p><code>Delta : {delta}</code></p>
                        <p><code> LoopIdx : {loopIdx}</code></p>
                        <button onClick={() => { console.log("Connect") }}>
                            Let's Connect
                            <ArrowRightCircle size={25} />
                        </button>
                    </Col>
                    <Col xs={12} md={6} xl={7}>
                        <img src={headerImg} alt="Header Img" />
                    </Col>
                </Row>
            </Container>
        </section >
    )
}