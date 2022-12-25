import { Container, Row, Col } from "react-bootstrap";
import contactImg from "../assets/img/contact-img.svg";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const Contact = () => {

    const showPopUpMessage = (status) => {
        if (status === "success") {
            toast.success('Message sent successfully !', {
                position: toast.POSITION.TOP_RIGHT
            });
        }
        else if (status === "error") {
            toast.error('Something went wrong, please email me at xavier.lai.pro@gmail.com', {
                position: toast.POSITION.TOP_RIGHT
            });
        }
    };

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm(process.env.REACT_APP_EMAILJS_SERVICE_ID, process.env.REACT_APP_EMAIJS_TEMPLATE_ID, e.target, process.env.REACT_APP_EMAILJS_PUBLIC_KEY)
            .then((result) => {
                showPopUpMessage("success");
            }, (error) => {
                showPopUpMessage("error");
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
                                            <code>ENV VARIABLE DEBUG : {process.env.REACT_APP_EMAIJS_TEMPLATE_ID}</code>
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