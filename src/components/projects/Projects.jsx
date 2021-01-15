import React from 'react';
import { Timeline, Events, UrlButton, ImageEvent, themes, createTheme } from '@merc/react-timeline';
import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";

// Project Images
import L_NASA from '../../assets/img/projects/nasa.webp';
import L_Spotify from '../../assets/img/projects/playlist.webp';
import L_Covid from '../../assets/img/projects/covidthumbnail.webp';
import L_Recipeazy from '../../assets/img/projects/recipeazy.webp';
import L_Combo from '../../assets/img/projects/cbthumbnail.webp';
import L_Mega from '../../assets/img/projects/creaturethumbnail.webp';

// Skill Images
import L_REACT from "../../assets/img/skills/react.svg";
import L_NODE_JS from "../../assets/img/skills/nodejs.svg";
import L_EXPRESS from "../../assets/img/skills/express.svg";
import L_POSTGRESQL from "../../assets/img/skills/postgresql.svg";
import Image from "react-bootstrap/Image";
import L_HTML5 from "../../assets/img/skills/html-5.svg";
import L_HEROKU from "../../assets/img/skills/heroku.svg";
import L_CSS3 from "../../assets/img/skills/css3.svg";
import L_BOOTSTRAP4 from "../../assets/img/skills/bootstrap-4.svg";
import L_GIT from "../../assets/img/skills/github-api.svg";
import L_MATERIALUI from "../../assets/img/skills/material-ui-1.svg";
import L_JAVASCRIPT from '../../assets/img/skills/javascript.svg';
import L_REACT_BOOTSTRAP from "../../assets/img/skills/react-bootstrap.svg";

import "./Projects.style.css";

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

const Projects = () => {

    return (
        <div id="projects">
            <h1 className="pt-3 text-center font-details-b pb-3">Projects</h1>
            <Timeline theme={customTheme}>
                <Events>
                    {/* Spotify Music Playlist */}
                    <ImageEvent
                        date="12/08/2020"
                        className="text-center project-title"
                        text="Spotify Music Playlist"
                        src={L_Spotify}
                        alt="Spotify Music Playlist"
                    >
                        <div className="d-flex justify-content-between flex-column mt-1">
                            <div>
                                <Accordion>
                                    <Card>
                                        <Accordion.Toggle
                                            as={Card.Header}
                                            eventKey="0"
                                            className="p-2 text-center accordian-main"
                                            style={{ backgroundColor: "#2d43ba" }}
                                        >
                                            Project Details
                                        </Accordion.Toggle>

                                        <Accordion.Collapse eventKey="0" className="text-left">
                                            <Card.Body>
                                                <strong>Description:</strong> This was a music playlist creator using Spotify logo branding and theme style.  This uses full CRUD functionality.
                                                <hr />
                                                <strong>Features:</strong>
                                                <ul className="list-styles pt-1">
                                                    <li>Users can create their own accounts</li>
                                                    <li>Created using React and Material-UI</li>
                                                    <li>Responsive Design</li>
                                                </ul>
                                                <hr />
                                                <strong>Technology used:</strong>
                                                <ul>
                                                    <li>
                                                        <span className="p-2">
                                                            <Image
                                                                src={L_HTML5}
                                                                alt="HTML 5"
                                                                rounded
                                                                className="image-style m-1"
                                                            ></Image>{" "}
                                                        HTML5
                                                        </span>
                                                    </li>
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
                                                    <li>
                                                        <span className="p-2">
                                                            <Image
                                                                src={L_REACT}
                                                                alt="React"
                                                                rounded
                                                                className="image-style1 m-1"
                                                            ></Image>{" "}
                                                        React
                                                        </span>
                                                    </li>
                                                    <li>
                                                        <span className="p-2">
                                                            <Image
                                                                src={L_NODE_JS}
                                                                alt="Node.js"
                                                                rounded
                                                                className="image-style1 m-1"
                                                            ></Image>{" "}
                                                        Node.js
                                                        </span>
                                                    </li>
                                                    <li>
                                                        <span className="p-2">
                                                            <Image
                                                                src={L_EXPRESS}
                                                                alt="Express"
                                                                rounded
                                                                className="image-style1 m-1"
                                                            ></Image>{" "}
                                                        Express
                                                        </span>
                                                    </li>
                                                    <li>
                                                        <span className="p-2">
                                                            <Image
                                                                src={L_POSTGRESQL}
                                                                alt="PostgreSQL"
                                                                rounded
                                                                className="image-style1 m-1"
                                                            ></Image>{" "}
                                                        PostgreSQL
                                                        </span>
                                                    </li>
                                                    <li>
                                                        <span className="p-2">
                                                            <Image
                                                                src={L_MATERIALUI}
                                                                alt="Material-UI"
                                                                rounded
                                                                className="image-style1 m-1"
                                                            ></Image>{" "}
                                                        Material-UI
                                                        </span>
                                                    </li>
                                                    <li>
                                                        <span className="p-2">
                                                            <Image
                                                                src={L_HEROKU}
                                                                alt="Heroku"
                                                                rounded
                                                                className="image-style1 m-1"
                                                            ></Image>{" "}
                                                        Heroku
                                                        </span>
                                                    </li>
                                                    <li>
                                                        <span className="p-2">
                                                            <Image
                                                                src={L_GIT}
                                                                alt="Github"
                                                                rounded
                                                                className="image-style1 m-1"
                                                            ></Image>{" "}
                                                        Github
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
                                    href="https://cgr-spotify-playlist-client.herokuapp.com/"
                                    target="_blank"
                                >
                                    Deployed Version
                                </UrlButton>

                                <UrlButton
                                    href="https://github.com/crumler/spotify-playlist-client2"
                                    target="_blank"
                                >
                                    Client Source Code
                                </UrlButton>

                                <UrlButton
                                    href="https://github.com/crumler/Spotify-Playlist-server"
                                    target="_blank"
                                >
                                    Server Source Code
                                </UrlButton>
                            </div>
                        </div>
                    </ImageEvent>

                    {/* RecipEazy Group Project */}

                    <ImageEvent
                        date="11/05/2020"
                        className="text-center  project-title"
                        text="RecipEazy"
                        src={L_Recipeazy}
                        alt="RecipEazy"
                    >
                        <div className="d-flex justify-content-between flex-column mt-1">
                            <div>
                                <Accordion>
                                    <Card>
                                        <Accordion.Toggle
                                            as={Card.Header}
                                            eventKey="0"
                                            className="p-2 text-center accordian-main"
                                            style={{ backgroundColor: "#2d43ba" }}
                                        >
                                            Project Details
                                        </Accordion.Toggle>

                                        <Accordion.Collapse eventKey="0" className="text-left">
                                            <Card.Body>
                                                <strong>Description:</strong> This was a group project with several team members that involved utilizing a third-party API that allowed users to search for food recipes and add ingredients for that recipe to a grocery list.  This project contained full CRUD functionality.
                                                <hr />
                                                <strong>Features:</strong>
                                                <ul className="list-styles pt-1">
                                                    <li>Users can create their own accounts and grocery shopping lists</li>
                                                    <li>Created using React and ReactStrap</li>
                                                    <li>Responsive Design</li>
                                                </ul>
                                                <hr />
                                                <strong>Technology used:</strong>
                                                <ul>
                                                    <li>
                                                        <span className="p-2">
                                                            <Image
                                                                src={L_HTML5}
                                                                alt="HTML 5"
                                                                rounded
                                                                className="image-style m-1"
                                                            ></Image>{" "}
                                                        HTML5
                                                        </span>
                                                    </li>
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
                                                    <li>
                                                        <span className="p-2">
                                                            <Image
                                                                src={L_REACT}
                                                                alt="React"
                                                                rounded
                                                                className="image-style1 m-1"
                                                            ></Image>{" "}
                                                        React
                                                        </span>
                                                    </li>
                                                    <li>
                                                        <span className="p-2">
                                                            <Image
                                                                src={L_NODE_JS}
                                                                alt="Node.js"
                                                                rounded
                                                                className="image-style1 m-1"
                                                            ></Image>{" "}
                                                        Node.js
                                                        </span>
                                                    </li>
                                                    <li>
                                                        <span className="p-2">
                                                            <Image
                                                                src={L_EXPRESS}
                                                                alt="Express"
                                                                rounded
                                                                className="image-style1 m-1"
                                                            ></Image>{" "}
                                                        Express
                                                        </span>
                                                    </li>
                                                    <li>
                                                        <span className="p-2">
                                                            <Image
                                                                src={L_POSTGRESQL}
                                                                alt="PostgreSQL"
                                                                rounded
                                                                className="image-style1 m-1"
                                                            ></Image>{" "}
                                                        PostgreSQL
                                                        </span>
                                                    </li>
                                                    <li>
                                                        <span className="p-2">
                                                            <Image
                                                                src={L_REACT_BOOTSTRAP}
                                                                alt="ReactStrap"
                                                                rounded
                                                                className="image-style1 m-1"
                                                            ></Image>{" "}
                                                        ReactStrap
                                                        </span>
                                                    </li>
                                                    <li>
                                                        <span className="p-2">
                                                            <Image
                                                                src={L_HEROKU}
                                                                alt="Heroku"
                                                                rounded
                                                                className="image-style1 m-1"
                                                            ></Image>{" "}
                                                        Heroku
                                                        </span>
                                                    </li>
                                                    <li>
                                                        <span className="p-2">
                                                            <Image
                                                                src={L_GIT}
                                                                alt="Github"
                                                                rounded
                                                                className="image-style1 m-1"
                                                            ></Image>{" "}
                                                        Github
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
                                    href="https://group-4-recipeazy-client.herokuapp.com/"
                                    target="_blank"
                                >
                                    Deployed Version
                                </UrlButton>

                                <UrlButton
                                    href="https://github.com/gubcodes/recipeazy"
                                    target="_blank"
                                >
                                    Source Code
                                </UrlButton>
                            </div>
                        </div>
                    </ImageEvent>

                    {/* NASA Photo of the Day */}

                    <ImageEvent
                        date="10/08/2020"
                        className="text-center  project-title"
                        text="NASA Photo of the Day"
                        src={L_NASA}
                        alt="NASA Photo of the Day"
                    >
                        <div className="d-flex justify-content-between flex-column mt-1">
                            <div>
                                <Accordion>
                                    <Card>
                                        <Accordion.Toggle
                                            as={Card.Header}
                                            eventKey="0"
                                            className="p-2 text-center accordian-main"
                                            style={{ backgroundColor: "#2d43ba" }}
                                        >
                                            Project Details
                                        </Accordion.Toggle>

                                        <Accordion.Collapse eventKey="0" className="text-left">
                                            <Card.Body>
                                                <strong>Description:</strong> Using the official NASA API, I created a site that was a photo gallery of the last five days worth of daily photos that were released by NASA.
                                                <hr />
                                                <strong>Features:</strong>
                                                <ul className="list-styles pt-1">
                                                    <li>Users could click on photos to view high-definition version of the photo</li>
                                                    <li>Created using HTML, CSS, JavaScript, and Bootstrap</li>
                                                </ul>
                                                <hr />
                                                <strong>Technology used:</strong>
                                                <ul>
                                                    <li>
                                                        <span className="p-2">
                                                            <Image
                                                                src={L_HTML5}
                                                                alt="HTML 5"
                                                                rounded
                                                                className="image-style m-1"
                                                            ></Image>{" "}
                                                        HTML5
                                                        </span>
                                                    </li>
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
                                                    <li>
                                                        <span className="p-2">
                                                            <Image
                                                                src={L_BOOTSTRAP4}
                                                                alt="Bootstrap"
                                                                rounded
                                                                className="image-style1 m-1"
                                                            ></Image>{" "}
                                                        Bootstrap
                                                        </span>
                                                    </li>
                                                    <li>
                                                        <span className="p-2">
                                                            <Image
                                                                src={L_GIT}
                                                                alt="Github"
                                                                rounded
                                                                className="image-style1 m-1"
                                                            ></Image>{" "}
                                                        Github
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
                                    href="https://rumler-api.web.app/"
                                    target="_blank"
                                >
                                    Deployed Version
                                </UrlButton>

                                <UrlButton
                                    href="https://github.com/crumler/NASA-APOD"
                                    target="_blank"
                                >
                                    Source Code
                                </UrlButton>
                            </div>
                        </div>
                    </ImageEvent>

                    {/* COVID-19 API Project */}

                    <ImageEvent
                        date="09/21/2020"
                        className="text-center  project-title"
                        text="COVID-19 API"
                        src={L_Covid}
                        alt="COVID-19 API"
                    >
                        <div className="d-flex justify-content-between flex-column mt-1">
                            <div>
                                <Accordion>
                                    <Card>
                                        <Accordion.Toggle
                                            as={Card.Header}
                                            eventKey="0"
                                            className="p-2 text-center accordian-main"
                                            style={{ backgroundColor: "#2d43ba" }}
                                        >
                                            Project Details
                                        </Accordion.Toggle>

                                        <Accordion.Collapse eventKey="0" className="text-left">
                                            <Card.Body>
                                                <strong>Description:</strong> Using the official COVID-19 API, I created a project that fetches the most current data related to cases of COVID-19.  This project pulls both the new and total count of new cases, deaths, and recoveries of COVID-19 patients.
                                                <hr />
                                                <strong>Features:</strong>
                                                <ul className="list-styles pt-1">
                                                    <li>Created using HTML, CSS, and JavaScript</li>
                                                    <li>Mobile Responsive via CSS Grid Box</li>
                                                </ul>
                                                <hr />
                                                <strong>Technology used:</strong>
                                                <ul>
                                                    <li>
                                                        <span className="p-2">
                                                            <Image
                                                                src={L_HTML5}
                                                                alt="HTML 5"
                                                                rounded
                                                                className="image-style m-1"
                                                            ></Image>{" "}
                                                        HTML5
                                                        </span>
                                                    </li>
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
                                                    <li>
                                                        <span className="p-2">
                                                            <Image
                                                                src={L_JAVASCRIPT}
                                                                alt="JavaScript"
                                                                rounded
                                                                className="image-style1 m-1"
                                                            ></Image>{" "}
                                                        JavaScript
                                                        </span>
                                                    </li>
                                                    <li>
                                                        <span className="p-2">
                                                            <Image
                                                                src={L_GIT}
                                                                alt="Github"
                                                                rounded
                                                                className="image-style1 m-1"
                                                            ></Image>{" "}
                                                        Github
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
                                    href="https://crumler.github.io/covid-19-api-project/"
                                    target="_blank"
                                >
                                    Deployed Version
                                </UrlButton>

                                <UrlButton
                                    href="https://github.com/crumler/covid-19-api-project"
                                    target="_blank"
                                >
                                    Source Code
                                </UrlButton>
                            </div>
                        </div>
                    </ImageEvent>

                    {/* Combo Breaker Site Replication Project */}

                    <ImageEvent
                        date="09/14/2020"
                        className="text-center  project-title"
                        text="Combo Breaker Static Layout"
                        src={L_Combo}
                        alt="Combo Breaker Static Layout"
                    >
                        <div className="d-flex justify-content-between flex-column mt-1">
                            <div>
                                <Accordion>
                                    <Card>
                                        <Accordion.Toggle
                                            as={Card.Header}
                                            eventKey="0"
                                            className="p-2 text-center accordian-main"
                                            style={{ backgroundColor: "#2d43ba" }}
                                        >
                                            Project Details
                                        </Accordion.Toggle>

                                        <Accordion.Collapse eventKey="0" className="text-left">
                                            <Card.Body>
                                                <strong>Description:</strong> I replicated the layout of another site that is live.  The purpose of this was to utilize CSS Flex Box.
                                                <hr />
                                                <strong>Features:</strong>
                                                <ul className="list-styles pt-1">
                                                    <li>Created using HTML and CSS</li>
                                                    <li>Mobile Responsive via CSS Flex Box</li>
                                                </ul>
                                                <hr />
                                                <strong>Technology used:</strong>
                                                <ul>
                                                    <li>
                                                        <span className="p-2">
                                                            <Image
                                                                src={L_HTML5}
                                                                alt="HTML 5"
                                                                rounded
                                                                className="image-style m-1"
                                                            ></Image>{" "}
                                                        HTML5
                                                        </span>
                                                    </li>
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
                                    href="https://crumler.github.io/staticLayout/"
                                    target="_blank"
                                >
                                    Deployed Version
                                </UrlButton>

                                <UrlButton
                                    href="https://github.com/crumler/staticLayout"
                                    target="_blank"
                                >
                                    Source Code
                                </UrlButton>
                            </div>
                        </div>
                    </ImageEvent>

                    {/* Mega Man Creature Project */}

                    <ImageEvent
                        date="09/11/2020"
                        className="text-center  project-title"
                        text="Mega Man CSS Creature"
                        src={L_Mega}
                        alt="Mega Man CSS Creature"
                    >
                        <div className="d-flex justify-content-between flex-column mt-1">
                            <div>
                                <Accordion>
                                    <Card>
                                        <Accordion.Toggle
                                            as={Card.Header}
                                            eventKey="0"
                                            className="p-2 text-center accordian-main"
                                            style={{ backgroundColor: "#2d43ba" }}
                                        >
                                            Project Details
                                        </Accordion.Toggle>

                                        <Accordion.Collapse eventKey="0" className="text-left">
                                            <Card.Body>
                                                <strong>Description:</strong> My very first project within our web development course at Eleven Fifty Academy was to create a creature using only CSS code. I went with the classic Nintendo character known as "Mega Man".
                                                <hr />
                                                <strong>Features:</strong>
                                                <ul className="list-styles pt-1">
                                                    <li>Created using only CSS</li>
                                                </ul>
                                                <hr />
                                                <strong>Technology used:</strong>
                                                <ul>
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
                                    href="https://crumler.github.io/CSS-Creature/"
                                    target="_blank"
                                >
                                    Deployed Version
                                </UrlButton>

                                <UrlButton
                                    href="https://github.com/crumler/CSS-Creature"
                                    target="_blank"
                                >
                                    Source Code
                                </UrlButton>
                            </div>
                        </div>
                    </ImageEvent>


                </Events>
            </Timeline>
        </div>
    )
};

export default Projects;