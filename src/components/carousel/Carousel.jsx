import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import LifeBegins from '../../assets/img/carousal/life_begins.webp';
import CodeBulb from '../../assets/img/carousal/code_bulb.webp';
import FightStick from '../../assets/img/carousal/fight_stick.webp';
import ScrollDown from '../scrolldown/scrolldown';

import './Carousel.style.css';

const MyCarousel = () => {

    return (
        <div id="home">
            <Carousel controls={false} indicators interval={2500} pauseOnHover={false}>
                <Carousel.Item>
                    <img
                        className="d-block w-100 custom-img"
                        src={LifeBegins}
                        alt="First slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 custom-img"
                        src={CodeBulb}
                        alt="Third slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 custom-img"
                        src={FightStick}
                        alt="Third slide"
                    />
                </Carousel.Item>
            </Carousel>
            <ScrollDown />
        </div>
    )
};

export default MyCarousel;