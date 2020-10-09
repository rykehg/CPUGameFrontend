import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import './styles.css';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import GameExemple1 from '../../assets/GameExemple1.png'

export default function Objetivo() {

  return (
    <>
      <Row>
        <Col><h3>Objetivo</h3></Col>
      </Row>
      <Row></Row>
      <Row>
        <Col>
          <p>Completar os objetivos criptografados sorteados fazendo o caminho do dado na UCP,
          marcando o maior número de pontos. </p>
        </Col>
      </Row>
    </>
  )
}