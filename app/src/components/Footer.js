import { Container, Row, Col } from "react-bootstrap"
import { MailchimpForm } from "./MailChimp"
import logo from "../assets/img/logo.svg"
import navIcon1 from '../assets/img/nav-icon1.svg'
import navIcon2 from '../assets/img/nav-icon2.svg'
import navIcon3 from '../assets/img/nav-icon3.svg'


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
                            <a href="https://www.linkedin.com/in/xavier-lai-85a861131/"><img src={navIcon1} alt="Linkedin" /></a>
                            <a href="https://www.linkedin.com/in/xavier-lai-85a861131/"><img src={navIcon2} alt="Github" /></a>
                            <a href="https://www.linkedin.com/in/xavier-lai-85a861131/"><img src={navIcon3} alt="Twitter" /></a>
                        </div>
                    </Col>
                    <p>CopyRight 2022. All Rights Reserved</p>
                </Row>
            </Container>
        </footer>
    )
}