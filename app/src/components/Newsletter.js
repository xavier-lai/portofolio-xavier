import { Alert, Col, Row } from "react-bootstrap"
import { useState } from "react"
import { useEffect } from "react";

export const Newsletter = (onValidated, status, message) => {

    const [email, setEmail] = useState("");

    useEffect(() => {
        if (status === "succes") {
            clearFields()
        }
    }, { status })

    const handleSubmit = (e) => {
        e.preventDefault();
        email &&
            email.indexOf("@") > -1 &&
            onValidated({
                EMAIL: email
            })

    };

    const clearFields = () => {

    }

    return (
        <Col lg={12}>
            <div className="newsletter-bx">
                <Row>
                    <Col lg={12} md={6} xl={5}>
                        <h3>Subscribe to my Nexsletter</h3>
                        {status === 'sending' && <Alert>Sending..</Alert>}
                        {status === 'error' && <Alert variant="danger">{message}</Alert>}
                        {status === 'succes' && <Alert variant="succes">{message}</Alert>}
                    </Col>
                    <Col lg={12} md={6} xl={5}>
                        <form onSubmit={handleSubmit}>
                            <div className="new-email-bx">
                                <input value={email} type="email" onChange={(e) => setEmail(e.target.value)} placeholeder="Email Address"></input>
                                <button type="submit">Submit</button>
                            </div>
                        </form>
                    </Col>
                </Row>
            </div>
        </Col>
    )
}