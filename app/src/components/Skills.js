import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import { Container, Row, Col } from "react-bootstrap";
import { useState } from 'react';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import colorSharp from "../assets/img/color-sharp.png";
import { VennDiagram, VennSeries, VennArc, VennLabel } from "reaviz"

import masterDegreePdf from "../assets/pdf/master_degree_xavier_lai.pdf";

export const Skills = () => {

    const [skillType, setSkillType] = useState("Hard");
    const updateSkillType = (newSkillType) => {
        setSkillType(newSkillType)
    }

    const getChartData = (skillType) => {
        if (skillType === "Hard") {
            return [
                { key: ["Data engineering"], data: 90 },
                { key: ["Data analysis"], data: 70 },
                { key: ["Front end"], data: 20 },
                { key: ["Statistics"], data: 65 },
                { key: ["Machine learning"], data: 70 },
                { key: ["Ops"], data: 75 },
                { key: ["Programming"], data: 95 },
                { key: ["Machine learning", "Statistics"], data: 5 },
                { key: ["Data engineering", "Ops"], data: 3 },
                { key: ["Data analysis", "Data engineering"], data: 5 },
                { key: ["Data analysis", "Machine learning"], data: 5 },
                { key: ["Data analysis", "Statistics"], data: 1 },
                { key: ["Ops", "Machine learning"], data: 1 },
                { key: ["Data engineering", "Machine learning"], data: 5 },
                { key: ["Data engineering", "Ops", "Machine learning"], data: 3 },
                { key: ["Ops", "Programming"], data: 10 },
                { key: ["Front end", "Programming"], data: 4 },
                { key: ["Programming", "Data engineering"], data: 10 },
                { key: ["Programming", "Data engineering", "Ops", "Machine learning"], data: 3 }
            ]
        } else {
            return [
                { key: ["Management"], data: 50 },
                { key: ["Agility"], data: 85 },
            ]
        }

    }

    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };
    <Carousel responsive={responsive}>
        <div>Item 1</div>
        <div>Item 2</div>
        <div>Item 3</div>
        <div>Item 4</div>
    </Carousel>;

    return (
        <section className="skills" id="skills">
            <Container>
                <Row>
                    <Col>
                        <div className="skill-bx">
                            <Row>
                                <Col sm={3}></Col>
                                <Col sm={6}>
                                    <h2>{skillType} Skills</h2>
                                </Col >
                                <Col sm={3}>
                                    <DropdownButton
                                        id="dropdown-skill-button"
                                        title="Skills type"
                                        className="dropdown-skill"
                                    >
                                        <Dropdown.Item active onClick={() => updateSkillType("Hard")}>Hard skills</Dropdown.Item>
                                        <Dropdown.Item onClick={() => updateSkillType("Soft")}>Soft skills</Dropdown.Item>
                                    </DropdownButton >
                                </Col>
                            </Row>
                            <Row>
                                <p><a href={masterDegreePdf} target="blank">Master’s degree</a> with honours in applied mathematics, data science, digisport option</p>
                                <div style={{ width: '100vw', height: '80vh' }}>
                                    <VennDiagram
                                        type="venn"
                                        disabled={false}
                                        data={getChartData(skillType)}
                                        series={
                                            <VennSeries
                                                colorScheme={['#2d60e8']}
                                                arc={
                                                    <VennArc
                                                        stroke={(_data, _index, active, hovered) => {
                                                            if (hovered) {
                                                                return "#d785ce";
                                                            } else if (active) {
                                                                return '#d785ce';
                                                            }
                                                            return 'blue';
                                                        }}
                                                    />
                                                }
                                                label={
                                                    <VennLabel active={true} showAll={false} wrap={true} fontFamily="Centra" animated="false" />
                                                }
                                            />}
                                    />
                                </div>
                            </Row>
                        </div>
                    </Col>
                </Row>
            </Container>
            <img className="background-image-left" src={colorSharp} alt="BG Img" />
        </section >
    )
}