import { Container, Row, Col } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import meter1 from "../assets/img/meter1.svg";
import meter2 from "../assets/img/meter2.svg";
import meter3 from "../assets/img/meter3.svg";
import colorSharp from "../assets/img/color-sharp.png";


export const Skills = () => {
    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };
    <Carousel responsive={responsive}>
        <div>Item 1</div>
        <div>Item 2</div>
        <div>Item 3</div>
        <div>Item 4</div>
    </Carousel>;

    return (
        <section className="skills" id="skills">
            <Container>
                <Row>
                    <Col>
                        <div className="skill-bx">
                            <h2>Skills</h2>
                            <p>Graduated from Mathematical</p>
                            <Carousel responsive={responsive}>
                                <div className="item">
                                    <img src={meter1} alt="Image1" />
                                    <h5>Python</h5>
                                </div>
                                <div className="item">
                                    <img src={meter2} alt="Image2" />
                                    <h5>SQL</h5>
                                </div>
                                <div className="item">
                                    <img src={meter3} alt="Image3" />
                                    <h5>Machine Learning</h5>
                                </div>
                                <div className="item">
                                    <img src={meter1} alt="Image4" />
                                    <h5>GCP</h5>
                                </div>
                            </Carousel>
                        </div>
                    </Col>
                </Row>
            </Container>
            <img className="background-image-left" src={colorSharp} alt="BG Img" />
        </section>
    )
}