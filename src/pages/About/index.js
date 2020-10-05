import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
//import './styles.css';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import GameExemple1 from '../../assets/GameExemple1.png';

export default function Home() {
  return (
    <>
      <Row className="justify-content-md-center">
      <h2>Sobre</h2>
      <p>‘CPU Game - The Neumann Machine’ é um jogo de tabuleiro para plataforma web com o objetivo de auxiliar os estudantes no aprendizado da arquitetura de computadores. O game utiliza como premissa o funcionamento de um processador Intel 8080. Entre os temas abordados, estão a comunicação entre a memória principal (MP), dispositivos de entrada e saída (E/S), conceito de Pipeline e a maneira que o sistema operacional lida com os processos.</p>
      <img src={GameExemple1}  width={720} alt="game-exemple-1"/>
      <span>Na imagem, é possível ver como o tabuleiro foi estruturado com os componentes de um processador. Cada player representa um processo e eles competem entre si para garantir a execução do mesmo. </span><br></br>
      </Row>
      <Row className="justify-content-md-center">
      <h3>História</h3>
      <p>A ideia inicial do game surgiu em 2018 e foi proposta pelos alunos de Análise e Desenvolvimento de Sistemas da Fatec Rubens Lara, Henrique Hessel Gaeta e Lucas Davi Santana de Jesus. O protótipo do jogo foi testado em sala de aula com materiais de baixo custo: Powerpoint para exibição do tabuleiro e movimentação das peças e cartas impressas para a interação entre os grupos. No fim do mesmo ano, o estudo originou um artigo científico publicado no Congresso Internacional de Tecnologia e Gestão (CITEG) com o auxílio das professoras Nadia Cristina Balduino Andrade dos Santos e Adelia da Silva Saraiva.</p>
      <p>Em 2020, o CPU Game foi desenvolvido em plataforma web. Neste momento, o projeto já contava com a participação de outros dois alunos: Igor Augusto Monteiro Silva e Luciano Robson Ferreira Lima. O jogo foi o tema do trabalho de conclusão de curso dos quatro estudantes envolvidos no processo.</p>
      </Row>
    </>
  )
}