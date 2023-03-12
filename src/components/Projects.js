import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import ProjectCard from "./ProjectsCard";
import { projImg1, projImg2, projImg3, projImg4, projImg5, projImg6,projImg7,projImg8,projImg9, colorSharp2 } from "../assets/img";
import TrackVisibility from 'react-on-screen';
import 'animate.css';

const Projects = () => {

    const projects1 = [
        {
            title: "Bank Site",
            description: "React-App",
            imgUrl: projImg1,
        },
        {
            title: "UI/UX Design",
            description: "Design & Development",
            imgUrl: projImg2,
        },
        {
            title: "Resturant Site",
            description: "React-App",
            imgUrl: projImg3,
        },
    ];
    const projects2 = [
        {
            title: "Movie Land",
            description: "React-App",
            imgUrl: projImg4,
        },
        {
            title: "Weather App",
            description: "React-App",
            imgUrl: projImg5,
        },
        {
            title: "Text Editor",
            description: "React-App",
            imgUrl: projImg6,
        },
    ];
    const projects3 = [
        {
            title: "Daily News",
            description: "React-App",
            imgUrl: projImg7,
        },
        {
            title: "Todo's List",
            description: "Vanilla Js",
            imgUrl: projImg8,
        },
        {
            title: "Tic-Tac-Toe",
            description: "Vanilla Js",
            imgUrl: projImg9,
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
                                    <p>Following projects showcases my skills and experience through real-world examples of my work. Each project is hosted on my github account. It reflects my ability to solve complex problems, work with different technologies, and manage projects effectively.</p>
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
                                                        projects1.map((project, index) => {
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
                                                        projects2.map((project, index) => {
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

                                                <Row>
                                                    {
                                                        projects3.map((project, index) => {
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
            <img className="background-image-right" src={colorSharp2} alt='' />
        </section>
    )
}

export default Projects;