import React from "react";
import Jumbotron from "react-bootstrap/Jumbotron";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Logo from '../../assets/icons/logo.png';
import "./Contact.style.css";

const Contact = () => {

    return (
        <div id="contact">
            <h1 className="pt-3 text-center font-details-b pb-3">Contact Me</h1>
            <Jumbotron className="contact-jumbotron">
                <Row>
                    <Col className="d-flex justify-content-center flex-wrap">
                        <div className="m-2">
                            <a href="mailto:cgrumler@gmail.com" target="_blank" rel="noopener noreferrer">
                                <Button variant="outline-danger" title="cgrumler@gmail.com">
                                    <i className="fas fa-envelope-square"></i> E-mail Me
                                </Button>
                            </a>
                        </div>
                        <div className="m-2">
                            <a href="https://www.linkedin.com/in/chrisrumler/" target="_blank" rel="noopener noreferrer">
                                <Button variant="outline-primary" title="LinkedIn Profile">
                                    <i className="fab fa-linkedin"></i> My LinkedIn
                                </Button>
                            </a>
                        </div>

                        <div className="m-2">
                            <a href="https://github.com/crumler" target="_blank" rel="noopener noreferrer">
                                <Button variant="outline-dark" title="GitHub Profile">
                                    <i className="fab fa-github-square"></i> My GitHub
                                </Button>
                            </a>
                        </div>
                    </Col>
                </Row>
            </Jumbotron>
        </div>
    )
};

export default Contact;