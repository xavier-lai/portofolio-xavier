import { Container, Row, Col } from "react-bootstrap"
import { EndBlockMessage } from "./EndBlockMessage"

import logo from "../assets/img/logo-no-background.png"
import linkedinIcon from '../assets/img/linkedin-icon.svg'
import resumeIcon from "../assets/img/Resume-Xavier-LAI.png";
import resumePdf from "../assets/pdf/Resume-Xavier-LAI.pdf"



export const Footer = () => {
    return (
        <footer className="footer">
            <Container>
                <Row className="align-item-center">
                    <EndBlockMessage />
                    <Col sm={6}>
                        <img src={logo} alt="logo" />
                    </Col>
                    <Col sm={6} className="text-center text-sm-end">
                        <div className="social-icon">
                            <a target="blank" href="https://www.linkedin.com/in/xavier-lai-85a861131/"><img src={linkedinIcon} alt="Linkedin" /></a>
                        </div>
                        <div className="resume-icon">
                            <a target="blank" href={resumePdf}><img src={resumeIcon} alt="Resume" /></a>
                        </div>
                    </Col>
                    <p>CopyRight 2022. Xavier Lai</p>
                </Row>
            </Container>
        </footer>
    )
}