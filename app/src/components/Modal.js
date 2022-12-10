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
            Stack: "GCP | Docker | PySpark | SQL",
            Description: "In progress ..",
            Date: "Dec 2021 - Aug 2022"
        },
        RsDgfip: {
            Title: "Detect occult activies from social medias",
            SubTitle: "SubTitle",
            Stack: "Python | Git Ci-Cd | PostgreSQL",
            Description: "In progress ..",
            Date: "Aug 2021 - Jan 2022"
        },
        WsDgddi: {
            Title: "Combat illegal traffic from social networks",
            SubTitle: "SubTitle",
            Stack: "Python | PostgreSQL | Flask | Angular",
            Description: "In progress ..",
            Date: "Oct 2022 - Now"
        },
        Cflash: {
            Title: "Create a tailor-made big data crm analysis tool",
            SubTitle: "SubTitle",
            Stack: "Python | PySpark",
            Description: "In progress ..",
            Date: "May 2022 - Jul 2022"
        },
        Teaching: {
            Title: "Teaching AI technology courses in master",
            SubTitle: "SubTitle",
            Stack: "Python | Git | GCP",
            Description: "In progress ..",
            Date: "Dec 2022 - Feb 2023"
        },
        Nextrends: {
            Title: "Detect and qualify trends from social medias",
            SubTitle: "SubTitle",
            Stack: "Python | Docker | PostgreSQL | Git Ci-Cd | Airflow | Flask | Bootstrap",
            Description: "In progress ..",
            Date: "Feb 2021 - May 2022"
        },
        ReactivationLbm: {
            Title: "Reactivate customer by their potential",
            SubTitle: "SubTitle",
            Stack: "PySpark | SQL",
            Description: "In progress ..",
            Date: "Feb 2021 - April 2021"
        },
        CiGpe: {
            Title: "Know and develop GPE's customers",
            SubTitle: "SubTitle",
            Stack: "PySpark | SQL",
            Description: "In progress ..",
            Date: "May 2021 - Oct 2021"
        },
        Farm: {
            Title: "Track and monitor veal farming",
            SubTitle: "SubTitle",
            Stack: "Vue JS | AWS | Bootstrap",
            Description: "In progress ..",
            Date: "June 2021 - Sept 2021"
        },
        Formation: {
            Title: "Coach and supervize formation",
            SubTitle: "SubTitle",
            Stack: "Python | Git | Docker | Bash",
            Description: "In progress ..",
            Date: "Jan 2022 - Now"
        },
        CiStokomani: {
            Title: "Know the Stokomani's customer behaviors",
            SubTitle: "SubTitle",
            Stack: "PySpark",
            Description: "In progress ..",
            Date: "Mar 2021 - May 2021"
        },
        ApiNgc: {
            Title: "Deploy a tailor-made geocodage API as micro services",
            SubTitle: "SubTitle",
            Stack: "Docker | Flask | Swagger | Git Ci-Cd | Linux",
            Description: "In progress ..",
            Date: "Mar 2022 - May 2022"
        },
        DataExpert: {
            Title: "Titre",
            SubTitle: "SubTitle",
            Stack: "GCP | Docker | Terraform | Flask | PostgreSQL | Bootstrap",
            Description: "In progress ..",
            Date: "Mar 2021 - Jan 2022"
        },
        NbaTool: {
            Title: "Titre",
            SubTitle: "SubTitle",
            Stack: "R Shiny",
            Description: "In progress ..",
            Date: "Dec 2020 - Jan 2021"
        },
        SkiingInsep: {
            Title: "Titre",
            SubTitle: "SubTitle",
            Stack: "R | SQL",
            Description: "In progress ..",
            Date: "May 2020 - Aug 2020"
        },
        Givengo: {
            Title: "Titre",
            SubTitle: "SubTitle",
            Stack: "Python | Excel",
            Description: "In progress ..",
            Date: "May 2020 - Jan 2021"
        },
        S4Foot: {
            Title: "Titre",
            SubTitle: "SubTitle",
            Stack: "R Shiny",
            Description: "In progress ..",
            Date: "May 2020 - Oct 2020"
        },
        OlympicsInsep: {
            Title: "Titre",
            SubTitle: "SubTitle",
            Stack: "R | SQL",
            Description: "In progress ...",
            Date: "Feb 2017 - Aug 2017"
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
                                <div className="project-date">{ModalContentDict[props.projectId].Date}</div>
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