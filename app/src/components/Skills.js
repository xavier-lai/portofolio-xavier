import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import { Container, Row, Col } from "react-bootstrap";
import { useState } from 'react';
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
                { key: ["Programming"], data: 95 },
                { key: ["Data engineering"], data: 90 },
                { key: ["Machine learning"], data: 70 },
                { key: ["Data analysis"], data: 70 },
                { key: ["Ops"], data: 75 },
                { key: ["Cloud"], data: 70 },
                { key: ["Statistics"], data: 65 },
                { key: ["Front end"], data: 20 },
                { key: ["Machine learning", "Statistics"], data: 5 },
                { key: ["Data engineering", "Ops"], data: 3 },
                { key: ["Cloud", "Data engineering"], data: 10 },
                { key: ["Data analysis", "Data engineering"], data: 5 },
                { key: ["Data analysis", "Machine learning"], data: 5 },
                { key: ["Data analysis", "Statistics"], data: 1 },
                { key: ["Ops", "Machine learning"], data: 1 },
                { key: ["Data engineering", "Machine learning"], data: 5 },
                { key: ["Data engineering", "Ops", "Machine learning"], data: 3 },
                { key: ["Ops", "Programming"], data: 10 },
                { key: ["Front end", "Programming"], data: 4 },
                { key: ["Programming", "Data engineering"], data: 10 },
            ]
        } else {
            return [
                { key: ["Agility"], data: 90 },
                { key: ["Autonomy"], data: 90 },
                { key: ["Management"], data: 30 },
                { key: ["Decision making"], data: 70 },
                { key: ["Team spirit"], data: 95 },
                { key: ["Communication"], data: 80 },
                { key: ["Needs translation"], data: 80 },
                { key: ["Team spirit", "Communication"], data: 5 },
                { key: ["Communication", "Management"], data: 5 },
                { key: ["Team spirit", "Management"], data: 2 },
                { key: ["Agility", "Autonomy"], data: 10 },
                { key: ["Needs translation", "Decision making"], data: 10 },
                { key: ["Needs translation", "Autonomy"], data: 1 },
                { key: ["Needs translation", "Agility"], data: 1 },
            ]
        }

    }

    const getChartColor = (skillType) => {
        if (skillType === "Hard") {
            return [
                "#78339e",
                "#78339e",
                "#2d60e8",
                "#2d60e8",
                "#78339e",
                "#2d60e8",
                "#2d60e8",
                "#2d60e8",
                "#2d60e8",
                "#78339e",
                "#78339e",
                "#78339e",
                "#2d60e8",
                "#2d60e8",
                "#78339e",
                "#2d60e8",
                "#78339e",
                "#78339e",
                "#78339e",
                "#78339e",
            ];
        } else if (skillType === "Soft") {
            return [
                "#78339e",
                "#2d60e8",
                "#2d60e8",
                "#2d60e8",
                "#78339e",
                "#2d60e8",
                "#78339e",
                "#78339e",
                "#2d60e8",
                "#78339e",
                "#2d60e8",
                "#78339e",
                "#2d60e8",
                "#78339e"
            ]
        }
    }

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
                                <div style={{ width: '100vw', height: '50vh' }}>
                                    <VennDiagram
                                        type="venn"
                                        disabled={false}
                                        data={getChartData(skillType)}
                                        series={
                                            <VennSeries
                                                colorScheme={getChartColor(skillType)}
                                                arc={
                                                    <VennArc
                                                        stroke={(_data, _index, active, hovered) => {
                                                            if (hovered) {
                                                                return "white";
                                                            } else if (active) {
                                                                return "d785ce";
                                                            }
                                                        }}
                                                    />
                                                }
                                                label={
                                                    <VennLabel
                                                        active={true}
                                                        showAll={false}
                                                        wrap={true}
                                                        fontFamily="Centra"
                                                        fontSize={12}
                                                        animated="false"
                                                    />
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