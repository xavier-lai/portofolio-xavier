import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useState } from "react";
import { Row, Col } from "react-bootstrap";


export const CustomModal = (props) => {
    const [modalShow, setModalShow] = useState(false);
    const ModalContentDict = {
        KawaiBandb: {
            Title: "Build a customer centric strategy",
            SubTitle: "SubTitle",
            Stack: "Python, Sql",
            Description: "In progress .."
        },
        RsDgfip: {
            Title: "Detect occult activies from social medias",
            SubTitle: "SubTitle",
            Stack: "Python, Sql",
            Description: "In progress .."
        },
        WsDgddi: {
            Title: "Detect occult activies from social medias",
            SubTitle: "SubTitle",
            Stack: "Python, Sql",
            Description: "In progress .."
        },
        Cflash: {
            Title: "Create a tailor-made big data crm analysis tool",
            SubTitle: "SubTitle",
            Stack: "Python, Sql",
            Description: "In progress .."
        },
        Teaching: {
            Title: "Teaching AI technology courses in master",
            SubTitle: "SubTitle",
            Stack: "Python, Sql",
            Description: "In progress .."
        },
        Nextrends: {
            Title: "Detect and qualify trends from social medias",
            SubTitle: "SubTitle",
            Stack: "Python, Sql",
            Description: "In progress .."
        },
        ReactivationLbm: {
            Title: "Reactivate customer by their potential",
            SubTitle: "SubTitle",
            Stack: "Python, Sql",
            Description: "In progress .."
        },
        CiGpe: {
            Title: "Know and develop GPE's customers",
            SubTitle: "SubTitle",
            Stack: "Python, Sql",
            Description: "In progress .."
        },
        Farm: {
            Title: "Track and monitor veal farming",
            SubTitle: "SubTitle",
            Stack: "Python, Sql",
            Description: "In progress .."
        },
        Formation: {
            Title: "Coach and supervize formation",
            SubTitle: "SubTitle",
            Stack: "Python, Sql",
            Description: "In progress .."
        },
        CiStokomani: {
            Title: "Know the Stokomani's customer behaviors",
            SubTitle: "SubTitle",
            Stack: "Python, Sql",
            Description: "In progress .."
        },
        ApiNgc: {
            Title: "Deploy a tailor-made geocodage API as micro services",
            SubTitle: "SubTitle",
            Stack: "Python, Sql",
            Description: "In progress .."
        },
        DataExpert: {
            Title: "Titre",
            SubTitle: "SubTitle",
            Stack: "Python, Sql",
            Description: "In progress .."
        },
        NbaTool: {
            Title: "Titre",
            SubTitle: "SubTitle",
            Stack: "Python, Sql",
            Description: "In progress .."
        },
        SkiingInsep: {
            Title: "Titre",
            SubTitle: "SubTitle",
            Stack: "Python, Sql",
            Description: "In progress .."
        },
        Givengo: {
            Title: "Titre",
            SubTitle: "SubTitle",
            Stack: "Python, Sql",
            Description: "In progress .."
        },
        S4Foot: {
            Title: "Titre",
            SubTitle: "SubTitle",
            Stack: "Python, Sql",
            Description: "In progress .."
        },
        OlympicsInsep: {
            Title: "Titre",
            SubTitle: "SubTitle",
            Stack: "Python, Sql",
            Description: "In progress .."
        },
    }

    const MyVerticallyCenteredModal = (props) => {
        return (
            <Modal
                {...props}
                size="xl"
                aria-labelledby="contained-modal-title-vcenter"
                centered
                className='project-modal'
            >
                <Modal.Header>
                    <Row>
                        <Col xs={3} md={2}>
                            <img src={props.imgUrl} alt="Logo Header" className='img-header' />
                        </Col>
                        <Col xs={12} md={9}>
                            <Modal.Title id="contained-modal-title-vcenter">
                                <h2>{ModalContentDict[props.projectId].Title}</h2>
                            </Modal.Title>
                        </Col>
                        <button type="button" class="btn-close btn-close-white" aria-label="Close" onClick={() => setModalShow(false)}></button>
                    </Row>

                </Modal.Header>
                <Modal.Body>
                    <h4>{ModalContentDict[props.projectId].SubTitle}</h4>
                    <p>
                        {ModalContentDict[props.projectId].Description}
                    </p>
                </Modal.Body>
                <Modal.Footer>
                    {ModalContentDict[props.projectId].Stack}
                </Modal.Footer>
            </Modal>
        );
    }

    return (
        <>
            <Button variant="default" onClick={() => setModalShow(true)}>
                See more
            </Button>

            <MyVerticallyCenteredModal
                show={modalShow}
                onHide={() => setModalShow(false)}
                imgUrl={props.imgUrl}
                projectId={props.projectId}
            />
        </>
    );
}