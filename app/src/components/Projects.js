import 'animate.css';

import TrackVisibility from 'react-on-screen';
import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";

import bbhLogo from "../assets/img/bbh.png";
import dgfipLogo from "../assets/img/dgfip.jpg";
import dgddiLogo from "../assets/img/dgddi.png";
import cwaysLogo from "../assets/img/cw.jpg";
import ngcLogo from "../assets/img/ngc.jpg";
import nextrendsLogo from "../assets/img/nextrends.jpg";
import srfcLogo from "../assets/img/srfc.jpg";
import insepLogo from "../assets/img/insep.jpg";
import givengoLogo from "../assets/img/givengo.jpg";
import s4healthLogo from "../assets/img/s4health.jpg";
import nbatoolsLogo from "../assets/img/nba-tools.jpg";
import lbmLogo from "../assets/img/lbm.jpg";
import stokomaniLogo from "../assets/img/stokomani.jpg";
import ddmLogo from "../assets/img/ddm.jpg";
import gpeLogo from "../assets/img/gpe.jpg";
import ur2Logo from "../assets/img/ur2.jpg";
import colorSharp2 from "../assets/img/color-sharp2.png";

export const Projects = () => {

    const mainProjectsList = [
        {
            title: "Know your customer",
            description: "Tech lead",
            imgUrl: bbhLogo,
            projectId: "KawaiBandb",
        },
        {
            title: "Social network",
            description: "Lead Data Engineer",
            imgUrl: dgfipLogo,
            projectId: "RsDgfip",

        },
        {
            title: "WebScraping",
            description: "Tech lead",
            imgUrl: dgddiLogo,
            projectId: "WsDgddi",

        },
        {
            title: "C-Flash",
            description: "Project manager & lead developper",
            imgUrl: cwaysLogo,
            projectId: "Cflash",

        },
        {
            title: " AI and ML technologies",
            description: "Part-time Teacher",
            imgUrl: ur2Logo,
            projectId: "Teaching",

        },
        {
            title: "Nextrends",
            description: "Data Engineer",
            imgUrl: nextrendsLogo,
            projectId: "Nextrends",

        },
    ];


    const otherProjectsList = [
        {
            title: "Reactivation score",
            description: "Data scientist",
            imgUrl: lbmLogo,
            projectId: "ReactivationLbm",

        },
        {
            title: "Customer strategy",
            description: "Data scientist",
            imgUrl: gpeLogo,
            projectId: "CiGpe",

        },
        {
            title: "Farm v3",
            description: "Developper",
            imgUrl: ddmLogo,
            projectId: "Farm",

        },
        {
            title: "Tech formations",
            description: "Tech lead",
            imgUrl: cwaysLogo,
            projectId: "Formation",

        },
        {
            title: "Customer Insights",
            description: "Data scientist",
            imgUrl: stokomaniLogo,
            projectId: "CiStokomani",

        },
        {
            title: "API",
            description: "Ops engineer",
            imgUrl: ngcLogo,
            projectId: "ApiNgc",
        },
    ];

    const sportProjectsList = [
        {
            title: "Data expert",
            description: "Developper",
            imgUrl: srfcLogo,
            projectId: "DataExpert",

        },
        {
            title: "NBA tools",
            description: "Owner",
            imgUrl: nbatoolsLogo,
            projectId: "NbaTool",
        },
        {
            title: "Alpin skiing detection",
            description: "Data scientist intern",
            imgUrl: insepLogo,
            projectId: "SkiingInsep",
        },
        {
            title: "GIVE'N GO",
            description: "Freelance consultant",
            imgUrl: givengoLogo,
            projectId: "Givengo",
        },
        {
            title: "Chemistry app",
            description: "Main developper",
            imgUrl: s4healthLogo,
            projectId: "S4Foot",
        },
        {
            title: "Injuries in the Olympics",
            description: "Data analyst intern",
            imgUrl: insepLogo,
            projectId: "OlympicsInsep",
        },
    ];

    return (
        <section className="project" id="projects">
            <Container>
                <Row>
                    <Col size={12}>
                        <TrackVisibility>
                            {({ isVisible }) =>
                                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                                    <h2>Projects</h2>
                                    <p align="justify">The majority of the projects were carried out during my experience in the consulting firm <a href="https://c-ways.com/" target="blank">C-Ways</a></p>
                                    <Tab.Container id="projects-tabs" defaultActiveKey="mainTab">
                                        <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                                            <Nav.Item>
                                                <Nav.Link eventKey="mainTab">Main</Nav.Link>
                                            </Nav.Item>
                                            <Nav.Item>
                                                <Nav.Link eventKey="otherThab">Other</Nav.Link>
                                            </Nav.Item>
                                            <Nav.Item>
                                                <Nav.Link eventKey="sportTab">Sport</Nav.Link>
                                            </Nav.Item>
                                        </Nav>
                                        <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                                            <Tab.Pane eventKey="mainTab">
                                                <Row>
                                                    {
                                                        mainProjectsList.map((project, index) => {
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
                                            <Tab.Pane eventKey="otherThab">
                                                <Row>
                                                    {
                                                        otherProjectsList.map((project, index) => {
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
                                            <Tab.Pane eventKey="sportTab">
                                                <p>As you may have noticed, I am a sports fan. I've been able to work on some projects in <font color="#d785ce"><strong>high performance sport</strong></font> during my career, especially during my experiences at the French National Institute for Sport and Physical Education (INSEP).</p>
                                                <Row>
                                                    {
                                                        sportProjectsList.map((project, index) => {
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
                                        </Tab.Content>
                                    </Tab.Container>
                                </div>}
                        </TrackVisibility>
                    </Col>
                </Row>
            </Container>
            <img className="background-image-right" src={colorSharp2}></img>
        </section >
    )
}