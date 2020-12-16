import React from 'react';
import { Parallax, Background } from 'react-parallax';
import Container from "react-bootstrap/Container";
import Fade from "react-reveal/Fade";
import Slide from 'react-reveal/Slide';
import Particles from 'react-particles-js';
import { particlesOptions } from './particlesOptions';
// Import of Components
import MyNavbar from './components/navbar/Navbar';
import MyCarousel from './components/carousel/Carousel';
import TitleMessage from './components/title-message/TitleMessage';
import About from './pages/about/About';
import Skills from './pages/skills/Skills';
import Experience from './pages/experience/Experience';
import Projects from './components/projects/Projects';
import Contact from './pages/contact/Contact';
import Footer from './components/footer/Footer';

import './App.css';

const App = () => {
  return (
    <div className="App" style={{ position: "relative" }}>
      <MyNavbar />

      <Particles className="particles particles-box" params={particlesOptions} />

      <MyCarousel />
      <TitleMessage />

      <div>
        <Parallax
          blur={{ min: -30, max: 30 }}
          bgImage={require("./assets/img/parallex/background.webp")}
          bgImageAlt=""
          strength={-200}
        >
          <div>
            <Container className="container-box rounded">
              <Fade duration={500}>
                <About />
              </Fade>
            </Container>
          </div>
        </Parallax>
      </div>
      <div>
        <Parallax
          blur={{ min: -30, max: 30 }}
          bgImage={require("./assets/img/parallex/background.webp")}
          bgImageAlt=""
          strength={-200}
        >
          <div>
            <Container className="container-box rounded">
              <Slide bottom duration={500}>
                <Skills />
              </Slide>
            </Container>
          </div>
        </Parallax>
      </div>
      <div>
        <Parallax
          blur={{ min: -30, max: 30 }}
          bgImage={require("./assets/img/parallex/background.webp")}
          bgImageAlt=""
          strength={-200}
        >
          <div>
            <Container className="container-box rounded">
              <Fade duration={500}>
                <Experience />
              </Fade>
            </Container>
          </div>
        </Parallax>
      </div>
      <Container className="container-box rounded">
        <Slide bottom duration={500}>
          <hr />
          <Projects />
        </Slide>
      </Container>
      <Container className="container-box rounded">
        <Fade duration={500}>
          <hr />
          <Contact />
        </Fade>
      </Container>

      <hr />
      <Footer />
    </div>
  );
};

export default App;