import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import './styles.css';
import Carousel from 'react-bootstrap/Carousel'
import Row from 'react-bootstrap/Row'

import GameExemple1 from '../../assets/GameExemple1.png'
import GameExemple2 from '../../assets/GameExemple2.png'
import GameTabuleiroV2 from '../../assets/ProcessadorGameTabuleiroV2.png'

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
              className="d-block w-100 full"
              src={GameTabuleiroV2}
              alt="First slide"
            />
            <Carousel.Caption>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100 crop"
              src={GameExemple1}
              alt="Third slide"
            />
            <Carousel.Caption>
              <h3>Second slide label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={GameExemple2}
              alt="Third slide"
            />
            <Carousel.Caption>
              <h3>Third slide label</h3>
              <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </Row>
    </>
  )
}