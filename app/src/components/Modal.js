import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useState } from "react";
import { Row, Col } from "react-bootstrap";


export const CustomModal = (props) => {
    const [modalShow, setModalShow] = useState(false);
    const ModalContentDict = {
        KawaiBandb: {
            Title: "Build a customer centric strategy",
            SubTitle: "Know your customer trough data",
            Stack: "GCP | Docker | PySpark | SQL",
            Description: "B&B Hôtels, one of the world’s leading hotels, wanted to resize its data strategy. Thus, the group wanted to optimize the use of massive data harvesting via their various direct/digital sources.  \n\n I first intervened as a tech lead to set up a PySpark work infrastructure on their cloud environment  in order to facilitate the development of all data scientists. Based on this environment, I cleaned and deployed a customer data unification cleaning algorithm. This algorithm made it possible to robustify the data and thus perform an analysis of data science. I was then part of the group returning the results to the steering & executive committee. Finally, as a technical reference, I helped the group to choose and set up a customer data platform within their cloud architecture.  \n\n The B&B Hotels Group now uses its data to establish important campaigns and strategies.",
            Date: "Dec 2021 - Aug 2022"
        },
        RsDgfip: {
            Title: "Detect occult activities from social medias",
            SubTitle: "Use web scraping to flag occult activities",
            Stack: "Python | Git Ci-Cd | PostgreSQL",
            Description: "The Directorate-General for Public Finance is a Directorate of the French Central Public Administration which reports to the Ministry of the Economy. Preventing undeclared/hidden activities is a major issue for this directorate. \n\n As a Data Engineer I was, first of all, in charge of external data collection. I developed optimized scraping scripts from multiple social network plateform. I also scheduled and uploaded data through a PostgreSQL database. Finally, I participated in the deployment of the solution by writing some Ci-Cd scripts in order to deploy the analysis of the collected data in a complex government environment (expiration of sensitive informations, only one access to internet throught bastion..). \n\n Afterwards I worked again with DGFIP as a lead data engineer to audit the expansion of data collection. I then technically managed the audit and helped draft the report.",
            Date: "Aug 2021 - Jan 2022"
        },
        WsDgddi: {
            Title: "Combat illegal traffic from social networks",
            SubTitle: "Plateform that tracks illegal traffics detected on social networks",
            Stack: "Python | PostgreSQL | Flask | NodeJS | Angular",
            Description: "One of the French intelligence services required the construction of a platform that would help cyber-customs to stop illegal trafficking. This ambitious project brought together several firms such as Sopra Steria/Cap Gemini and C-Ways.\n\n As Tech lead of the V2 project, I was in charge of the smooth development of an agile team of 3 developers. Specifically, I was in charge of data collection, database and data science. So I managed the development team to have a robust base that fed the visualization platform. First, we produced scripts that collect information through the websites' internal APIs. Once these thousands of data were put into the database, we deployed a detection model based on the reconnection of text and images. Finally, an angular application allowed cyber-customs to view only posts detected as illegal for the model. I also had to adapt to the many technical and administrative constraints of a French intelligence agency.\n\nThe agency now aims to evolve the law to boost detection via social networks.",
            Date: "Jan 2022 - Now"
        },
        Cflash: {
            Title: "Create a tailor-made big data crm analysis tool",
            SubTitle: "Automate CRM analysis",
            Stack: "Python | PySpark",
            Description: "C-Ways has many customers who require CRM analysis. The questions asked are generally the same: How does my brand stand? What is the value of my customers? What are their buying behaviours? How can I improve my sales ? .. \n\n To answer to those questions data scientist used to compute analysis on transactions & clients files. C-Flash is a python package that automate all big data CRM analysis with Apache Spark. I was in charge of a team of 3 developers. In order to guarantee the success and the quick integration of the project I built a backlog and carried out all codes reviews. C-Flash is splitted in three bricks : \n\n1. Pre-process all clients and transactions files in PySpark (unificate, deduplicate, add features, rename, discretize..)\n2. CRM compute with flexible arguments (analysis by any features you may want). Write KPI's in a workbook.\n3. Read workbook and visualize all KPI's in automated powerpoint presentation.\n\n This tool allowed C-Ways to answer CRM questions in a short time.",
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