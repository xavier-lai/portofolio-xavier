import 'animate.css';
import { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { ArrowRightCircle } from 'react-bootstrap-icons';
import TrackVisibility from 'react-on-screen';

import headerImg from "../assets/img/basketball-player.svg";

export const Banner = () => {
    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const [text, setText] = useState('');
    const [delta, setDelta] = useState(130);
    const toRotate = ["Hello everyone, I'm Xavier Lai", "Tech lead", "Data Engineer"];
    const period = 2000;

    let textPrefix;

    if (loopNum % toRotate.length > 0) {
        textPrefix = "I work as a";
    } else {
        textPrefix = "";
    }

    useEffect(() => {
        let ticker = setInterval(() => {
            tick();
        }, delta);

        return () => { clearInterval(ticker) };
    })


    const tick = () => {
        let i = loopNum % toRotate.length;
        let fullText = toRotate[i];
        let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

        setText(updatedText);

        if (isDeleting) {
            setDelta(prevDelta => prevDelta / 2);
        }

        if (!isDeleting && updatedText === fullText) {
            setIsDeleting(true);
            setDelta(period);
        } else if (isDeleting && updatedText === '') {
            setIsDeleting(false);
            setLoopNum(loopNum + 1);
            setDelta(170);
        } else {
        }
    }

    return (
        <section className="banner" id="home">
            <Container>
                <Row className="aligh-items-center">
                    <Col xs={12} md={6} xl={7}>
                        <TrackVisibility>
                            {({ isVisible }) =>
                                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                                    <span className="tagline">Welcome to my Portfolio</span>
                                    <h1>
                                        <span className="txt-rotate" period="1000" data-rotate={toRotate}>
                                            <span className="wrap">
                                                {textPrefix} {text}
                                            </span>
                                        </span>
                                    </h1>
                                    <p align="justify">Former data scientist, I quickly developed a strong interest in data engineering during my experience in a French consulting firm.</p>
                                    <p align="justify">In order to <font color="#d785ce"><strong>make the most of the data</strong></font>, I understood that data science is not just machine learning. A data solution requires key steps such as upstream preparation, validation and deployment on various environments.</p>
                                    <p align="justify">The combination of this understanding and my skills allowed me to be a technical leader on various projects.</p>
                                    <a href="#connect">
                                        <button>Let’s Connect <ArrowRightCircle size={25} /></button>
                                    </a>
                                </div>}
                        </TrackVisibility>
                    </Col>
                    <Col xs={12} md={6} xl={5}>
                        <TrackVisibility>
                            {({ isVisible }) =>
                                <div className={isVisible ? "animate__animated animate__zoomIn" : ""}>
                                    <img src={headerImg} alt="Header Img" />
                                </div>}
                        </TrackVisibility>
                    </Col>
                </Row>
            </Container>
        </section >
    )
}