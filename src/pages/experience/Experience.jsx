import React from 'react';
import Jumbotron from "react-bootstrap/Jumbotron";
import Tilt from "react-tilt";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import L_EFA from '../../assets/icons/efa.png';
import L_KAR from '../../assets/icons/kar.svg';
import "./Experience.style.css";

const Experience = () => {

    return (
        <div id="experience">
            <h1 className="pt-3 text-center font-details-b pb-3">Experience</h1>
            <Jumbotron className="jumbo-style">
                <Container>
                    <Tilt options={{ max: 25 }}>
                        <Card>
                            <Card.Header as="h5" className="d-flex justify-content-center flex-wrap">
                                <Card.Img variant="top" className="img-resize" src={L_EFA} alt="Eleven Fifty Academy logo" />
                            </Card.Header>
                            <Card.Body className="d-flex justify-content-center flex-column">
                                <div>
                                    <Card.Title className="text-center">Eleven Fifty Academy</Card.Title>
                                </div>
                                <div>
                                    <Card.Text className="text-center style">
                                        <strong className="body-title-style">Full Stack Web Developer Student</strong>
                                        <br />
                                        <strong> Description </strong>
                                        <ul className="text-left">
                                            <li>Participated in a 12-week long full-time course on learning full stack web development</li>
                                            <li>Learned HTML, CSS, and JavaScript</li>
                                            <li>Created a full stack project using Node.js and Express</li>
                                            <li>Participated in a two week group project utilizing Agile methodology</li>
                                            <li>Created a solo project that involved building a web site that utilized full CRUD functionality</li>
                                        </ul>
                                        <br />
                                        <strong> Duration </strong>
                                        <p className="text-center">September 2020 - December 2020</p>
                                    </Card.Text>
                                </div>
                            </Card.Body>
                        </Card>
                    </Tilt>
                </Container>
            </Jumbotron>
            <Jumbotron className="jumbo-style">
                <Container>
                    <Tilt options={{ max: 25 }}>
                        <Card>
                            <Card.Header as="h5" className="d-flex justify-content-center flex-wrap">
                                <Card.Img variant="top" className="img-resize" src={L_KAR} alt="KAR Global logo" />
                            </Card.Header>
                            <Card.Body className="d-flex justify-content-center flex-column">
                                <div>
                                    <Card.Title className="text-center">KAR Global</Card.Title>
                                </div>
                                <div>
                                    <Card.Text className="text-center style">
                                        <strong className="body-title-style ">Technical Support Analyst</strong>
                                        <br />
                                        <strong> Description </strong>
                                        <ul className="text-left">
                                            <li>Provided break/fix support for the company's telephony infrastructure</li>
                                            <li>Administered and provided support for the company's ServiceNow platform</li>
                                            <li>Utilized Active Directory to administrate employee access to company production systems and network</li>
                                        </ul>
                                        <br />
                                        <strong> Duration </strong>
                                        <p className="text-center">September 2007 - August 2020</p>
                                    </Card.Text>
                                </div>
                            </Card.Body>
                        </Card>
                    </Tilt>
                </Container>
            </Jumbotron>
        </div >
    )
};

export default Experience;