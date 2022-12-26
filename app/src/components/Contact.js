import emailjs from '@emailjs/browser';
import 'animate.css';
import { Col, Container, Row } from "react-bootstrap";
import TrackVisibility from 'react-on-screen';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import contactImg from "../assets/img/contact-img.svg";

export const Contact = () => {

    const showPopUpNotification = (status) => {
        if (status === "success") {
            toast.success('Message sent successfully !', {
                position: toast.POSITION.TOP_RIGHT
            });
        }
        else if (status === "error") {
            toast.error(`Something went wrong, please email me at ${process.env.REACT_APP_EMAIL_PORTOFOLIO}`, {
                position: toast.POSITION.TOP_RIGHT
            });
        }
    };

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm(process.env.REACT_APP_EMAILJS_SERVICE_ID, process.env.REACT_APP_EMAIJS_TEMPLATE_ID, e.target, process.env.REACT_APP_EMAILJS_PUBLIC_KEY)
            .then((result) => {
                showPopUpNotification("success");
            }, (error) => {
                showPopUpNotification("error");
                console.log(error.text);
            });

        e.target.reset();
    };

    return (
        <section className="contact" id="connect">
            <Container>
                <Row className="align-items-center">
                    <Col size={12} md={6}>
                        <TrackVisibility>
                            {({ isVisible }) =>
                                <img className={isVisible ? "animate__animated animate__zoomIn" : ""} src={contactImg} alt="Contact Us" />
                            }
                        </TrackVisibility>
                    </Col>
                    <Col size={12} md={6}>
                        <TrackVisibility>
                            {({ isVisible }) =>
                                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                                    <h2>Get In Touch</h2>
                                    <form onSubmit={sendEmail}>
                                        <Row>
                                            <Col size={12} sm={6} className="px-1">
                                                <input type="text" name="firstname" placeholder="First Name" required />
                                            </Col>
                                            <Col size={12} sm={6} className="px-1">
                                                <input type="text" name="lastname" placeholder="Last Name" required />
                                            </Col>
                                            <Col size={12} sm={6} className="px-1">
                                                <input type="email" name="email" placeholder="Email Address" required />
                                            </Col>
                                            <Col size={12} sm={6} className="px-1">
                                                <input type="tel" name="phone" placeholder="Phone No." />
                                            </Col>
                                            <Col size={12} className="px-1">
                                                <textarea rows="6" name="message" placeholder="Message (French/English)" required></textarea>
                                                <button type="submit"><span>Send</span></button>
                                            </Col>
                                            <ToastContainer />
                                        </Row>
                                    </form>
                                </div>}
                        </TrackVisibility>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}