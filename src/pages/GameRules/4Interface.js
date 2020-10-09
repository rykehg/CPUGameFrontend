import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import './styles.css';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import ProcessadorGameTabuleiroV2 from '../../assets/ProcessadorGameTabuleiroV2.png'
import CardsObjetivosEx1 from '../../assets/CardsObjetivosEx1.png'
import CardSO17 from '../../assets/CardSO17.png'

export default function Interface() {

  return (
    <>
      <Row>
        <Col><h3>Interface</h3></Col>
      </Row>
      <Row>
        <Col>
          <p>A interface do jogo representa a que seria a parte interna de um computador.
          Começando a esquerda fica a "Fila de Processos" que será gerida pelos cards de
            sistema operacional. E a "Posição do relógio", marcando o turno a ser jogado. </p>
        </Col>
        <Col>
          <p>A CPU (ou UCP - Unidade Central de Processamento) fictício
          com 3 núcleos e seus componentes internos (detalhados nos componentes do
          tabuleiro). A memória principal, onde os jogadores iniciarão. E os
              dispositivos de entrada e saida E/I. </p>
        </Col>
      </Row>
      <Row>
        <Col>
          <img height={400} src={ProcessadorGameTabuleiroV2} alt="CPUTabuleiroV2" />
        </Col>
      </Row>
      <br />
      <Row>
        <Col md={2}></Col>
        <Col md={4}>
          <p>Além disso temos as "Cartas de objetivos" com função controle ou processamento,
              que devem ser cumpridos pelos jogadores e garantem parte da pontuação.</p>
        </Col>
        <Col>
          <img height={180} src={CardsObjetivosEx1} alt="CardsObjetivos1" className="full" />
        </Col>
      </Row>
      <br />
      <Row>
        <Col md={2}>
          <img height={180} src={CardSO17} alt="CardsObjetivos1" className="full" />
        </Col>
        <Col md={4}>
          <p>E por fim existem as cartas de "Sistema Operacional" que servem para brigar
          por posições na fila e conseguir realizar seu objetivo primeiros que os outros
            jogadores.</p>
        </Col>
      </Row>
    </>
  )
}