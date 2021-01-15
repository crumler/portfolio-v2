import React from 'react';
import { Timeline, Events, UrlButton, ImageEvent, themes, createTheme } from '@merc/react-timeline';
import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";

// Certificate Images
import L_HTML_CSS from "../../assets/img/accomplishments/html_css_cert.webp";

// Skill Images
import L_HTML5 from "../../assets/img/skills/html-5.svg";
import L_CSS3 from "../../assets/img/skills/css3.svg";
import Image from "react-bootstrap/Image";

import "./Accomplishments.style.css";

const customTheme = createTheme(themes.default, {
    card: {
        backgroundColor: '#efefef',
    },
    date: {
        backgroundColor: '#2d43ba',
    },
    marker: {
        borderColor: '#2d43ba',
    },
    timelineTrack: {
        backgroundColor: '#2d43ba',
    },
    urlButton: {
        backgroundColor: '#2d43ba',
    },
});

const Accomplishments = () => {

    return (
        <div id="accomplishments">
            <h1 className="pt-3 text-center font-details-b pb-3">Accomplishments</h1>
            <Timeline theme={customTheme}>
                <Events>
                    <ImageEvent
                        date="01/13/2021"
                        className="text-center project-title"
                        text="Build Responsive Real World Websites with HTML5 and CSS3"
                        src={L_HTML_CSS}
                        alt="HTML and CSS Certification"
                    >
                        <div className="d-flex justify-content-between flex-column mt-1">
                            <Accordion>
                                <Card>
                                    <Accordion.Toggle
                                    as={Card.Header}
                                    eventKey="0"
                                    className="p-2 text-center accordian-main"
                                    style={{backgroundColor: "#2d43ba"}}>
                                        Accomplishment Details
                                        </Accordion.Toggle>

                                        <Accordion.Collapse
                                            eventKey="0"
                                            className="text-left">
                                                <Card.Body>
                                                    <strong>Description:</strong> This is a certification that I received for completing the Udemy course "Build Responsive Real World Websites with HTML5 and CSS3".
                                                    <hr />
                                                    <strong>Features:</strong>
                                                    <ul className="list-styles pt-1">
                                                        <li>Learned how to create modern and professional looking web sites</li>
                                                    </ul>
                                                    <hr />
                                                    <strong>Subject Matter:</strong>
                                                <ul>
                                                        <li><span className="p-2">
                                                            <Image
                                                                src={L_HTML5}
                                                                alt="HTML 5"
                                                                rounded
                                                                className="image-style m-1"
                                                            ></Image>{" "}
                                                        HTML5
                                                        </span></li>
                                                        <li>
                                                        <span className="p-2">
                                                            <Image
                                                                src={L_CSS3}
                                                                alt="CSS 3"
                                                                rounded
                                                                className="image-style m-1"
                                                            ></Image>{" "}
                                                        CSS3
                                                        </span>
                                                    </li>
                                                </ul>
                                            </Card.Body>
                                        </Accordion.Collapse>
                                </Card>
                            </Accordion>
                        </div>
                        <div className="d-flex justify-content-between flex-nowrap text-center">
                                <UrlButton
                                    href="https://crumler.github.io/OmniFood/"
                                    target="_blank"
                                >
                                    Course Project
                                </UrlButton>

                                <UrlButton
                                    href="https://github.com/crumler/OmniFood"
                                    target="_blank"
                                >
                                    Project Source Code
                                </UrlButton>
                            </div>
                    </ImageEvent>
                </Events>
            </Timeline>
        </div>
    )
};

export default Accomplishments;