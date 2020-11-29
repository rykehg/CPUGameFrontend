import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import './styles.css';
import Carousel from 'react-bootstrap/Carousel'
import Row from 'react-bootstrap/Row'

import GameExemple1 from '../../assets/GameExemple1.png'
import GameExemple2 from '../../assets/GameExemple2.png'
import GameTabuleiroV2 from '../../assets/ProcessadorGameTabuleiroV2.png'
import pexelspixabay1 from '../../assets/pexels-pixabay-1.jpg'
import pexelsathena2 from '../../assets/pexels-athena-2.jpg'

export default function Home() {

  return (
    <>
      <Row>
        <div className="home-text">
          <h1>CPU Game</h1>
          <h2>The Neumann Machine</h2>
          <h4>Uma ferramenta de aprendizado e ensino de arquitetura de computadores</h4>
        </div>
      </Row>
      <Row className="Home">
        <Carousel interval={3000} keyboard={false} pauseOnHover={true}>
          <Carousel.Item>
            <img
              className="d-block w-100 crop"
              src={pexelspixabay1}
              alt="Third slide"
            />
            <Carousel.Caption>
              <h3>CPU Game</h3>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100 crop"
              src={GameTabuleiroV2}
              alt="First slide"
            />
            <Carousel.Caption>
              <h3>Componentes do Jogo</h3>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100 crop"
              src={pexelsathena2}
              alt="Third slide"
            />
          </Carousel.Item>
        </Carousel>
      </Row>
    </>
  )
}