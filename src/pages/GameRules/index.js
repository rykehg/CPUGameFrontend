import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import './styles.css';
import Tab from 'react-bootstrap/Tab'
import TabContainer from 'react-bootstrap/TabContainer'
import TabContent from 'react-bootstrap/TabContent'
import TabPane from 'react-bootstrap/TabPane'
import Nav from 'react-bootstrap/Nav'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'

import Descricao from './1Descricao'
import Objetivo from './2Objetivo'
import Gameplay from './3Gameplay';
import Interface from './4Interface'
import MecanicasJogo from './5MecanicasJogo';
import Pontuacao from './6Pontuacao';
import ComponentesTabuleiro from './7ComponentesTabuleiro';

export default function Home() {

  return (
    <>
      <Row>
        <Col><h3>Regras</h3></Col>
      </Row>
      <Row>
        <Tab.Container id="left-tabs-example" defaultActiveKey="first">
          <Row>
            <Col sm={3}>
              <Nav variant="pills" className="flex-column">
                <Nav.Item>
                  <Nav.Link eventKey="first">1. Descrição</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="second">2. Objetivo</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="third">3. Gameplay</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="fourth">4. Interface</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="fifth">5. Mecânicas do Jogo</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="sixth">6. Pontuação</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="seventh">7. Componentes do Tabuleiro</Nav.Link>
                </Nav.Item>
                <Button variant="outline-success" block={true}>
                  <a href="https://drive.google.com/file/d/17Xk8j_Na2SzHVEYy8nvnpSKSmL9hCPEw/view?usp=sharing" target="_blank">Download PDF</a>
                </Button>
              </Nav>
            </Col>
            <Col sm={9}>
              <Tab.Content>
                <Tab.Pane eventKey="first">
                  <Descricao />
                </Tab.Pane>
                <Tab.Pane eventKey="second">
                  <Objetivo />
                </Tab.Pane>
                <Tab.Pane eventKey="third">
                  <Gameplay />
                </Tab.Pane>
                <Tab.Pane eventKey="fourth">
                  <Interface />
                </Tab.Pane>
                <Tab.Pane eventKey="fifth">
                  <MecanicasJogo />
                </Tab.Pane>
                <Tab.Pane eventKey="sixth">
                  <Pontuacao />
                </Tab.Pane>
                <Tab.Pane eventKey="seventh">
                  <ComponentesTabuleiro />
                </Tab.Pane>
              </Tab.Content>
            </Col>
          </Row>
        </Tab.Container>
      </Row>
    </>
  )
}