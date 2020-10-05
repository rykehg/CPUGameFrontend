import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import './styles.css';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Tabs from 'react-bootstrap/Tabs'
import Tab from 'react-bootstrap/Tab'
import Card from 'react-bootstrap/Card'
import CardDeck from 'react-bootstrap/CardDeck'
import CardColumns from 'react-bootstrap/CardColumns'

import GameExemple1 from '../../assets/GameExemple1.png'
import GameExemple2 from '../../assets/GameExemple2.png'

export default function Home() {

  return (
    <>
      <Row>
        <Col>
          <h2>Cartas do Jogo</h2>
          <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example">
            <Tab eventKey="Objetivos" title="Objetivos">
              <h4>Cartas de Objetivos</h4>
              <CardColumns>
                <Card className="p-3">
                  <Card.Body>
                    <Card.Title>Objetivo 1</Card.Title>
                    <Card.Text>Ligue o periférico de impressão fazendo com que seu LED fique 
                      aceso (converta para hexadecimal).</Card.Text>
                    <Card.Text>110100001100_000001011001</Card.Text>
                    <Card.Subtitle className="mb-2 text-muted">Pontos: 700</Card.Subtitle>
                    <Card.Subtitle className="mb-2 text-muted">Extra: 100</Card.Subtitle>
                  </Card.Body>
                </Card>
                <Card >
                  <Card.Body>
                    <Card.Title>Objetivo 1</Card.Title>
                    <Card.Text>Ligue o periférico de impressão fazendo com que .</Card.Text>
                    <Card.Text>110100001100_000001011001</Card.Text>
                    <Card.Subtitle className="mb-2 text-muted">Pontos: 700</Card.Subtitle>
                    <Card.Subtitle className="mb-2 text-muted">Extra: 100</Card.Subtitle>
                  </Card.Body>
                </Card>
                <Card >
                  <Card.Body>
                    <Card.Title>Objetivo 1</Card.Title>
                    <Card.Text>Ligue o periférico de impressão fazendo com que seu LED fique 
                      aceso (converta para hexadecimal).</Card.Text>
                    <Card.Text>110100001100_000001011001</Card.Text>
                    <Card.Subtitle className="mb-2 text-muted">Pontos: 700</Card.Subtitle>
                    <Card.Subtitle className="mb-2 text-muted">Extra: 100</Card.Subtitle>
                  </Card.Body>
                </Card>
                <Card >
                  <Card.Body>
                    <Card.Title>Objetivo 1</Card.Title>
                    <Card.Text>Ligue o periférico de impressão fazendo com que seu LED fique 
                      aceso (converta para hexadecimal).</Card.Text>
                    <Card.Text>110100001100_000001011001</Card.Text>
                    <Card.Subtitle className="mb-2 text-muted">Pontos: 700</Card.Subtitle>
                    <Card.Subtitle className="mb-2 text-muted">Extra: 100</Card.Subtitle>
                  </Card.Body>
                </Card>
                <Card >
                  <Card.Body>
                    <Card.Title>Objetivo 1</Card.Title>
                    <Card.Text>Ligue o periférico de impressão fazendo com que seu LED fique 
                      aceso (converta para hexadecimal).</Card.Text>
                    <Card.Text>110100001100_000001011001</Card.Text>
                    <Card.Subtitle className="mb-2 text-muted">Pontos: 700</Card.Subtitle>
                    <Card.Subtitle className="mb-2 text-muted">Extra: 100</Card.Subtitle>
                  </Card.Body>
                </Card>
                <Card >
                  <Card.Body>
                    <Card.Title>Objetivo 1</Card.Title>
                    <Card.Text>Ligue o periférico de impressão fazendo com que seu LED fique 
                      aceso (converta para hexadecimal).</Card.Text>
                    <Card.Text>110100001100_000001011001</Card.Text>
                    <Card.Subtitle className="mb-2 text-muted">Pontos: 700</Card.Subtitle>
                    <Card.Subtitle className="mb-2 text-muted">Extra: 100</Card.Subtitle>
                  </Card.Body>
                </Card>
              </CardColumns>
            </Tab>
            <Tab eventKey="Decodificador" title="Decodificador">
              <h4>Cartas de Decodificador</h4>
            </Tab>
            <Tab eventKey="Variável " title="Variável">
              <h4>Cartas de Variável</h4>
            </Tab>
            <Tab eventKey="SistemaOperacional" title="Sistema Operacional">
              <h4>Cartas de Sistema Operacional</h4>
            </Tab>
          </Tabs>
        </Col>
      </Row>
    </>
  )
}