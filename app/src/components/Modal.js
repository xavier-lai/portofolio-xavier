import { useState } from "react";
import { Col, Row } from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';


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
            SubTitle: "Teach data engineering trought an end to end project",
            Stack: "Python | Git | GCP",
            Description: "I intervened during 26 hours in the master applied mathematics to data science of Rennes (my previous formation). I have thus addressed the key points of a data scientist today. I built a project that brought them the main points of a data worker. Through the tools of a developer, to notions networks with data collection up to the use of a cloud for an oral restitution.\n\nIn fact as group they had to scrap a international retailer's website. Then they had to pre-process all data to be able to upload in a BigQuery DataSet. Finally, with millions of fake transactions, they had to resume buying behaviours with DataStudio and SQL.",
            Date: "Dec 2022 - Feb 2023"
        },
        Nextrends: {
            Title: "Detect and qualify trends from social medias",
            SubTitle: "Use external sources to detect trends",
            Stack: "Python | Docker | PostgreSQL | Git Ci-Cd | Airflow | Flask | Bootstrap",
            Description: "Nextrends is a brand and a tool that fetch hot stream information from social networks. Then an algorithm process data and compute KPI's.\n\nThis tool was created by my ex Tech Lead Victor Andrieu. At his departure I was lead data engineering in the redesign of Nextrends. I then maintained and deployed new and robust features through the use of services, monitoring, analysis of time series and full-stack development. I also managed the Debian server hosting the solution. Finally I was in charge of small development team to improve the front Flask solution.",
            Date: "Feb 2021 - May 2022"
        },
        ReactivationLbm: {
            Title: "Reactivate customer by their potential",
            SubTitle: "Create a customer reactivation segmentation ",
            Stack: "PySpark | SQL",
            Description: "Le Bon Marché is a French department store belonging to the Louis Vuitton group. The department wanted to have a tool to prioritize the potential of its inactive customers.\n\nI participated in the creation of the segmentation which was divided into three axes: reactivation value, reactivation sector and reactivation probability. I used Spark via python to extract and predict the different axes of segmentation. The probability of reactivation was estimated using a random forest.\n\nToday, Le Bon Marché uses this segmentation to reactivate its customers who have not bought in a certain time using targeted advertising campaigns",
            Date: "Feb 2021 - April 2021"
        },
        CiGpe: {
            Title: "Know and develop GPE's customers",
            SubTitle: "Understanding customer buying behaviour",
            Stack: "PySpark | SQL",
            Description: "GPE is a retail brand for children’s clothing. They needed to know how their customers behaved. What their values were. What strategies to put in place to boost sales\n\nI first used Spark to process data (unification, deduplication). I also participated in the first oral presentations to committees. Finally, we analyzed the data using the C-Flash package as well as creating segmentation.",
            Date: "May 2021 - Oct 2021"
        },
        Farm: {
            Title: "Track and monitor veal farming",
            SubTitle: "Trace the quality of the leather sector with a tailor made aplication.",
            Stack: "Vue JS | AWS | Bootstrap",
            Description: "DDM (Louis Vuitton group) was keen to deploy an application for calf producers to help them ensure the quality of leather. We took the prototype again during the V2. The goal was to make a web application available in places with internet connection constraints.\n\nUnder the direction of my CTO, I developed with Vue.js, the functionalities of the V2 like to be able to scan multiple QR Code animals, to estimate the consumption of resources of a farm or to allow breeders to observe the state of each animal. We also used a state-of-the-art model to perform speech to text.\n\nThe application is now in production on several farms and it will be discussed to extend the application on more sectors.",
            Date: "June 2021 - Sept 2021"
        },
        Formation: {
            Title: "Coach and supervize formation",
            SubTitle: "Skill up the data team with regard to technical stack",
            Stack: "Python | Spark | Git | Docker | Bash",
            Description: "At C-Ways I was in charge of getting the teams up to speed as soon as they arrived.\n\nSo I set up about a week of training. This allowed the developers to become familiar with the requirement of clean and functional programming. The training also included Git best practices as well as handling data scientist provisioning tools as docker services. Besides, the training allowed to approach the basis of the distributed calculation through a single node Spark. Moreover I worked with teams on new technologies such as cloud computing.\n\nFinally, I created new technical tests to evaluate future candidates from a technical point of view.",
            Date: "Jan 2022 - Now"
        },
        CiStokomani: {
            Title: "Know the Stokomani's customer behaviors",
            SubTitle: "Analyze customer behaviors throught big data",
            Stack: "PySpark",
            Description: "Stokomani is a destocking brand that wanted to know the situation of its stores\n\nThe special feature of this mission was that we had no customer data. Indeed, no loyalty program was set up. So we had to take other types of KPI’s. For example, I computed an attractiveness score based on the penetration rate estimated by tickets in a store and the number of inhabitants by professional social categories in each zone. Finally, I participated in all the oral reports to the steering committee.",
            Date: "Mar 2021 - May 2021"
        },
        ApiNgc: {
            Title: "Deploy a tailor-made geocodage API as micro services",
            SubTitle: "Deploy microservice API on a client's Debian server",
            Stack: "Docker | Flask | Swagger | Git Ci-Cd | Linux",
            Description: "API Geocodage is a Python API that was deployed by the CTO. This API made it possible to geolocate addresses even when they were incomplete or misinformed. For this we used several public databases.\n\nI have updated the database query scripts as well as the various services. In addition, simplify and secure API authentication for internal access. Finally, I deployed the microservice API to the client using only a Makefile command.",
            Date: "Mar 2022 - May 2022"
        },
        DataExpert: {
            Title: "Data at the service of high-level sport",
            SubTitle: "A centralized platform to maximize performance",
            Stack: "GCP | Docker | Terraform | Flask | PostgreSQL | Bootstrap",
            Description: "Stade Rennais football club is a club in the elite of the French championship. He is also present in European campaigns such as the champions league or the europa league.\n\n The franchise wanted to be able to use and implement a single player repository from their training center to their pro team. I participated in the establishment of a platform called Data expert which centralizes the functionalities related to the club’s data. For example, the doctor could inform the medical attention of each patient with recall dates and the trainers could take this into account by adjusting their training. In addition, each coach could prepare the game of the week by adding exercise patterns for his starting team. During the match the staff could rate each player. Many other features were present including the implementation of an AI model to predict the occurrence of a traumatic injury based on GPS, behavioral, medical and historical data.\n\nFrom a technical point of view the application was deployed automatically via a Ci-Cd which triggered a Terraform script. This script created a cloud run (GCP) instance using a PostGreSQL cloud base",
            Date: "Mar 2021 - Jan 2022"
        },
        NbaTool: {
            Title: "Sandbox tool to help scouting in NBA",
            SubTitle: "Create a tool to inspect, compare and predict NBA's player performance.",
            Stack: "R Shiny",
            Description: "I made an R Shiny application based on the data of the seasons up to 2017 of all players in the NBA. So I create a first screen where the user can easily visualize which players are the most effective according to several categories of statistics. Then the user can compare two players on a season history. In addition, a screen was used to predict the number of team wins based on input variables. It turns out that the model was very accurate. This nevertheless requires estimating the input variables for the next season. For example, the speed of the game we play next season.\n\nI presented this application to a director of Paris Basket who found it interesting because it is transposable to the French championship. The application is a beta version in French.\n\nSee app : https://xavierlai.shinyapps.io/nba_tool/",
            Date: "Dec 2020 - Jan 2021"
        },
        SkiingInsep: {
            Title: "Detection and identification in alpine skiing",
            SubTitle: "Model the trajectories of young alpine skiers to help French federation scouting",
            Stack: "R | SQL",
            Description: "The French Alpine Ski Federation funded a thesis to increase the medallibility of their teams. I supported Quentin Delarochelambert’s thesis in order to analyse the performance curves of young skiers. The goal was to detect which young people to call in the French team.\n\n So I modeled each future trajectory according to Moore’s law. Then I applied methods of dimension reduction and clustering on the coefficients of each trajectory. Finally, we have put in place a tool used directly by the Federation.\n\nQuentin’s thesis has not yet been defended.",
            Date: "May 2020 - Aug 2020"
        },
        Givengo: {
            Title: "Monitor and scout young basketball players",
            SubTitle: "Integrate multiple data sources to anticipate a youth’s outbreak",
            Stack: "Python | Excel",
            Description: "Givengo executive committee approached me after seeing my NBA tool (see project). It was still the beginning of the project.\n\nThe purpose of the application was to integrate behavioral data into player detection. For example, a player’s listening score to his coach during important moments at the end of the game. I advised both CEO Noam Rudman and Romain Ostric on the mathematical aspects of detection score. That is, what were the mathematically relevant weights but also what statistical inferences could be made.\n\nToday, the application V1 is deployed as a SaaS : https://givengo.fr/pourquoi/",
            Date: "May 2020 - Jan 2021"
        },
        S4Foot: {
            Title: "Visualize and compare chemistry of each team composition",
            SubTitle: "Create an app sharing an innovative live indicator.",
            Stack: "R Shiny",
            Description: "This application was created with the company S4Health which is composed of researchers in sports science of INSEP. The finding came from a thesis by Guillaume Saulière in which we understand that the alchemy of a team in collective sport is the first factor of performance.\n\nI was the main developer of the application and I realized a screen where the user can select the composition of two teams and compare the potential alchemy difference. Each indicator was updated live thanks to a scraping of the transfermarkt site.\n\nThe deployment of the beta version is still on stand by : https://s4foot.com/ligue1",
            Date: "May 2020 - Oct 2020"
        },
        OlympicsInsep: {
            Title: "Understanding Injury Factors at Games to Prevent Future Games",
            SubTitle: "Use data management, modeling and vizualisation to prevent serious injury",
            Stack: "R | SQL",
            Description: "To prepare for the 2024 Olympic Games in Paris, the French teams wanted to be able to understand and avoid the injuries of their athletes.\n\nUnder the direction of an epidemiological expert, I built a study on trauma injuries. With the help of the medical data of the French team at the Beijing, London and Rio games, I was able to analyze and highlight the major factors of injury. This study is concluded by a report making time the state of past injuries . So the experts could go and solicit each sport to potentially change the training.",
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
            <Button variant="default" className="see-more" onClick={() => setModalShow(true)}>
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