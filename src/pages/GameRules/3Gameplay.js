import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import './styles.css';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import GameExemple1 from '../../assets/GameExemple1.png'

export default function Gameplay() {

  return (
    <>
      <Row>
        <Col><h3>Gameplay</h3></Col>
      </Row>
      <Row>
        <Col>
          <p>O jogo se dá em turnos seguindo um clock do processador. A ordem dos jogadores
          -processos- no turno será sorteada e colocada na fila de processos. Os jogadores
          compram a carta de objetivo e uma carta de Sistema Operacional (SO). Os objetivos
          são os processos que poderão ser ou não divididos em threads durante sua mudança
          de contexto (software para hardware).</p>
          <p>O jogo segue em uma ordem específica dos jogadores (fila de processos) podendo
          ser alterada por cartas de SO. O primeiro jogador irá executar seu processo no
          primeiro componente do processador (RDM), o segundo jogador também irá executar
          sua jogada seguindo a ordem da fila de processos. O número de jogadores a entrar
          no processador é restrito à sua disponibilidade e quantidade. A partir do terceiro
          jogador, nesse primeiro turno, os processos (jogadores) não poderão fazer um
          movimento de entrada no processador para executar seu objetivo, portanto compram
            cartas de Sistema Operacional (SO).</p>
          <p>Ao final da tomada de decisão no tabuleiro entra uma nova fase do jogo, as
          cartas de SO poderão ser jogadas, essas influenciam diretamente na ordem dos
          processos e sua execução dentro do processador, podendo travar processos,
          mudá-los de posição na fila e comprar mais cartas de SO, dando dinâmica e
          competitividade ao jogo. O jogo segue até que três jogadores cumpram seu(s)
          objetivo(s), caso a dinâmica permita mais objetivos poderão ser comprados.
              Ganha aquele jogador que fizer mais pontos ao completar seus objetivos. </p>
        </Col>
      </Row>
    </>
  )
}