import { Col } from "react-bootstrap";
import { CustomModal } from "./Modal";


export const ProjectCard = ({ title, description, imgUrl, projectId }) => {
    return (
        <Col sm={6} md={4}>
            <div className="proj-imgbx">
                <img src={imgUrl} alt="Img box" />
                <div className="proj-txtx">
                    <h4>{title}</h4>
                    <span>{description}</span>
                    <div>
                        <span><CustomModal imgUrl={imgUrl} projectId={projectId} /></span>
                    </div>
                </div>
            </div>
        </Col>
    )
}