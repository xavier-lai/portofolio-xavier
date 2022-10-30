import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import bbhLogo from "../assets/img/bbh.png";
import dgfipLogo from "../assets/img/dgfip.jpg";
import dgddiLogo from "../assets/img/dgddi.png";
import cwaysLogo from "../assets/img/cw.jpg";
import ngcLogo from "../assets/img/ngc.jpg";
import nextrendsLogo from "../assets/img/nextrends.jpg";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

    const projectsTab1 = [
        {
            title: "Know your customer",
            description: "Tech lead",
            imgUrl: bbhLogo,
        },
        {
            title: "Social network",
            description: "Lead Data Engineer",
            imgUrl: dgfipLogo,
        },
        {
            title: "WebScraping",
            description: "Tech lead",
            imgUrl: dgddiLogo,
        },
        {
            title: "C-Flash",
            description: "Project manager & lead developper",
            imgUrl: cwaysLogo,
        },
        {
            title: "API",
            description: "Ops engineer",
            imgUrl: ngcLogo,
        },
        {
            title: "Nextrends",
            description: "Data Engineer",
            imgUrl: nextrendsLogo,
        },
    ];


    const projectsTab2 = [
        {
            title: "C-Flash",
            description: "Project manager & lead developper",
            imgUrl: cwaysLogo,
        },
        {
            title: "C-Flash",
            description: "Project manager & lead developper",
            imgUrl: cwaysLogo,
        },
        {
            title: "C-Flash",
            description: "Project manager & lead developper",
            imgUrl: cwaysLogo,
        },
        {
            title: "C-Flash",
            description: "Project manager & lead developper",
            imgUrl: cwaysLogo,
        },
        {
            title: "C-Flash",
            description: "Project manager & lead developper",
            imgUrl: cwaysLogo,
        },
        {
            title: "C-Flash",
            description: "Project manager & lead developper",
            imgUrl: cwaysLogo,
        },
    ];

    return (
        <section className="project" id="project">
            <Container>
                <Row>
                    <Col size={12}>
                        <TrackVisibility>
                            {({ isVisible }) =>
                                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                                    <h2>Projects</h2>
                                    <p align="justify">The majority of the projects were carried out during my experience in the consulting firm <a href="https://c-ways.com/" target="blank">C-Ways</a></p>
                                    <Tab.Container id="projects-tabs" defaultActiveKey="first">
                                        <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                                            <Nav.Item>
                                                <Nav.Link eventKey="first">Tab 1</Nav.Link>
                                            </Nav.Item>
                                            <Nav.Item>
                                                <Nav.Link eventKey="second">Tab 2</Nav.Link>
                                            </Nav.Item>
                                            <Nav.Item>
                                                <Nav.Link eventKey="third">Tab 3</Nav.Link>
                                            </Nav.Item>
                                        </Nav>
                                        <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                                            <Tab.Pane eventKey="first">
                                                <Row>
                                                    {
                                                        projectsTab1.map((project, index) => {
                                                            return (
                                                                <ProjectCard
                                                                    key={index}
                                                                    {...project}
                                                                />
                                                            )
                                                        })
                                                    }
                                                </Row>
                                            </Tab.Pane>
                                            <Tab.Pane eventKey="second">
                                                <Row>
                                                    {
                                                        projectsTab2.map((project, index) => {
                                                            return (
                                                                <ProjectCard
                                                                    key={index}
                                                                    {...project}
                                                                />
                                                            )
                                                        })
                                                    }
                                                </Row>
                                            </Tab.Pane>
                                            <Tab.Pane eventKey="third">
                                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
                                            </Tab.Pane>
                                        </Tab.Content>
                                    </Tab.Container>
                                </div>}
                        </TrackVisibility>
                    </Col>
                </Row>
            </Container>
            <img className="background-image-right" src={colorSharp2}></img>
        </section>
    )
}