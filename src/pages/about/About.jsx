import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './About.style.css';
import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';
import ProfilePic from '../../assets/img/profile/profilepicture.webp';


const About = () => {

    return (
        <div id="about">
            <div className="about">
                <h1 className="pt-3 text-center font-details pb-3">About Me</h1>
                <Container>
                    <Row className="pt-3 pb-5 align-items-center">
                        {/* Profile picture */}
                        <Col xs={12} md={6}>
                            <Row className="justify-content-center mb-2 mr-2">
                                <Image className="profile justify-content-end" alt="profile picture" src={ProfilePic} thumbnail fluid />
                            </Row>
                        </Col>
                        {/* About Me Description */}
                        <Col xs={12} md={6}>
                            <Row className="align-items-start p-2 my-details rounded">
                                {/* Description */}
                                In 2005, I graduated from Indiana University of Kokomo with a Purdue degree (yes, you read that correctly) majoring in Computer Technology. During my years at the university, I learned about various items such as "HTML" and software development using "Visual Basic 6.0".
                                <br />
                                <br />

                                Shortly after graduating, I was brought onboard by an IT company. However, after working with them for twelve years, I was furloughed and eventually let go from the company due to the Covid-19 pandemic.
                                <br />
                                <br />
                                Deciding to take that negative and turn it into a positive, I took the opportunity to think about a career change.  After partaking in a free online introduction seminar to web development offered by Eleven Fifty Academy, I re-discovered the joy that I used to feel during the HTML course that I took back during my Computer Technology major over fifteen years prior.
                                <br />
                                <br />
                                Since then, I have graduated from the twelve-week long full-time course offered by Eleven Fifty Academy for web development. During that time, I garnered knowledge in aspects such as HTML, CSS, Javascript, and TypeScript. I used React for my front-end development. I also have experience with Bootstrap, Reactstrap, Material UI, as well as several different CSS and animation online tools.

                                {/* Buttons */}
                                <Col className="d-flex justify-content-center flex-wrap">
                                    <div>
                                        <a href="#contact">
                                            <Button className="m-2" variant="outline-primary">
                                                Let's Talk!
                                            </Button>
                                        </a>
                                    </div>
                                    <div>
                                        <a href="https://drive.google.com/file/d/1360L76GqFB3O-mjrOwWIe75ZNPRvYoKp/view?usp=sharing" target="_blank" rel="noopener noreferrer">
                                            <Button className="m-2" variant="outline-success">
                                                My Resume
                                            </Button>
                                        </a>
                                    </div>
                                    <div>
                                        <a href="https://github.com/crumler" target="_blank" rel="noopener noreferrer">
                                            <Button className="m-2" variant="outline-dark">
                                                GitHub
                                            </Button>
                                        </a>
                                    </div>
                                    <div>
                                        <a href="https://www.linkedin.com/in/chrisrumler/" target="_blank" rel="noopener noreferrer">
                                            <Button className="m-2" variant="outline-info">
                                                LinkedIn
                                            </Button>
                                        </a>
                                    </div>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    )
};

export default About;