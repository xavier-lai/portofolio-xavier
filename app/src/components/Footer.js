import { Container, Row, Col } from "react-bootstrap"
import { MailchimpForm } from "./MailChimp"
import logo from "../assets/img/logo-no-background.png"
import linkedinIcon from '../assets/img/linkedin-icon.svg'
import resumeIcon from '../assets/img/xavier-photo-transparent.png'


export const Footer = () => {
    return (
        <footer className="footer">
            <Container>
                <Row className="align-item-center">
                    <MailchimpForm />
                    <Col sm={6}>
                        <img src={logo} alt="logo" />
                    </Col>
                    <Col sm={6} className="text-center text-sm-end">
                        <div className="social-icon">
                            <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/xavier-lai-85a861131/"><img src={linkedinIcon} alt="Linkedin" /></a>
                        </div>
                        <div className="resume-icon">
                            <a target="_blank" rel="noreferrer" href="#"><img src={resumeIcon} alt="Resume" /></a>
                        </div>
                    </Col>
                    <p>CopyRight 2022. All Rights Reserved</p>
                </Row>
            </Container>
        </footer>
    )
}