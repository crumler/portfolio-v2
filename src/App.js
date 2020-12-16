import React from 'react';
import { Parallax, Background } from 'react-parallax';
import Container from "react-bootstrap/Container";
import Fade from "react-reveal/Fade";
// Import of Components
import MyNavbar from './components/navbar/Navbar';
import MyCarousel from './components/carousel/Carousel';
import TitleMessage from './components/title-message/TitleMessage';
import About from './pages/about/About';
import Skills from './pages/skills/Skills';

import './App.css';

const App = () => {
  return (
    <div className="App" style={{ position: "relative" }}>
      <MyNavbar />
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
              <Fade duration={500}>
                <Skills />
              </Fade>
            </Container>
          </div>
        </Parallax>
      </div>
    </div>
  );
}

export default App;