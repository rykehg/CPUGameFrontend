import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import './styles.css';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import GameExemple1 from '../../assets/GameExemple1.png'
import GameExemple2 from '../../assets/GameExemple2.png'

export default function Pontuacao() {

  return (
    <>
      <Row>
        <Col>
          <h3>Cumprindo Objetivos e Pontuação</h3>
        </Col>
      </Row>
      <Row>
        <Col>
          <h6>OBJETIVOS</h6>
        </Col>
      </Row>
      <Row>
        <Row>
          <Col>
            <p>Existem dois tipos de objetivos que podem ser comprados ou escolhidos, que
            possuem pontuações diferentes. (TEORIA: As atividades realizadas por um processador
            (função) podem ser divididas em duas grandes categorias: função processamento
            e função controle).</p>
          </Col>
        </Row>
        <Row>
          <Col>
            <h6>PONTUAÇÃO</h6>
          </Col>
        </Row>
        <Row>
          <Col>
            <p>Objetivo <b>função controle</b> com 7 turnos (700 pontos + 100 extra, se decodificado
          de forma correta) (TEORIA: Função controle exercida pelos componentes que se
          encarregam das atividades de busca interpretação e controle da execução das
          instruções, bem como do controle da ação dos demais componentes do sistema de
            computação, por exemplo: memória, E/S):</p>
            <p>Ex: O Caps Lock do teclado foi pressionado. Acenda o LED correspondente.
            (MP 🡪 RDM + CI 🡪 RI + Decodificador de Instrução 🡪 UC 🡪 UAL 🡪 UC +
              RDM 🡪  MP 🡪 Teclado) </p>
          </Col>
        </Row>
        <Row>
          <Col>
            <img src={GameExemple1} alt="GameEx1" className="full" />
            <p>Jogadas que o processo Cyano faria para cumprir seu objetivo de
            função controle, acaso ele não erre ou seja atrapalhado por outro jogador.</p>
          </Col>
        </Row>
      </Row>
      <Row>
        <Col>
          <p>Objetivo <b>função processamento</b> com 8 turnos (800 pontos + 200 extra se
            decodificados de forma correta) (TEORIA: Função processamento se encarrega
            de realizar as atividades relacionadas com a efetiva execução de uma operação,
            ou seja, processar, realizar um cálculo aritmético ou lógico):</p>
          <p>Ex: Dois dados da memória principal A e B descobrir qual operação será
            realizada (A{">"}B) com esses dados e exibir o resultado em tela (Dado A MP 🡪
            RDM + CI 🡪 RI + Decodificador de Instrução + UC 🡪 dado A RT  + requisita
            dado B na REM  🡪 dado A UAL + dado B RDM + dado B RT 🡪 dado B UAL
            (comparação é feita) Resultado 🡪  UC + RDM 🡪  MP 🡪  Monitor).</p>
        </Col>
        <Row>
          <Col>
            <img src={GameExemple2} alt="GameEx2" className="full" />
            <p>Jogadas que o processo Cyano faria para cumprir seu objetivo de função
            processamento, acaso ele não erre ou seja atrapalhado por outro jogador.</p>
          </Col>
        </Row>
      </Row>
      <Row>
        <Col>
          <p>Ao cumprir um objetivo outro poderá ser comprado até a finalização do jogo
            (dependendo do andamento). </p>
          <p>O jogo acaba idealmente após 3h corridas de jogo (30 segundos por grupo → 6
            grupos → 8-15 turnos → 24 a 45- 60min se não existirem atrasos).</p>
          <p>OU</p>
          <p>Dependendo do andamento, o jogo dura até 3 grupos conseguirem completar um
          objetivo (previsão de 12 turnos 1-2h) se essa for a opção escolhida os demais
          grupos que não completaram seu objetivo descontam da pontuação o número de
          turnos multiplicado por 25 da pontuação final. Por exemplo o grupo amarelo
          precisaria de mais 4 rodadas (clocks) para finalizar seu objetivo de 800 + 200
            ou seja 1000 – (4x25) = 900 pontos no final.</p>
          <p><b>Ganha o jogador que acumular mais pontos</b></p>
        </Col>
      </Row>
    </>
  )
}