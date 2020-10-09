import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import './styles.css';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Table from 'react-bootstrap/Table'


import GameExemple1 from '../../assets/GameExemple1.png'

export default function Descricao() {

  return (
    <>
      <Row>
        <Col><h3>Descrição</h3></Col>
      </Row>
      <Row>
        <Col>
          <p>O jogo tem como objetivo explicar o funcionamento de um processador com a
          arquitetura de Von Neumann por meio de um tabuleiro que apresenta a estrutura do
          processador Intel 8080 (lançado em 1974), típico das máquinas com arquitetura
          Single Instruction Single Data (SISD). O uso do esquema de um processador Intel
          8080 tem a finalidade de facilitar o entendimento da arquitetura básica de um
          processador (Monteiro 5ª ed). Porém a mecânica do jogo se dá com estrutura de
          pipeline, introduzida somente nos processadores Intel 8086 (lançado em 1976), e
          com o uso de múltiplos processadores, tecnologias que não existiam na época
          caracterizando um Multiple Instruction Multiple Data (MIMD). Apesar das
          arquiteturas e engenharias não terem coexistido foram usadas juntos no presente
          jogo, a fim de facilitar o entendimento sobre o funcionamento dos
          microprocessadores atuais e como um sistema operacional pode gerenciar os
            diferentes programas e processos.</p>
        </Col>
      </Row>
      <Row>
        <Col>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>#</th>
                <th>Conteúdo</th>
                <th>Livro</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>Processador Intel 8080</td>
                <td>Monteiro, 5ed, Cap 6- Processadores, p. 153 – 203. Especificamente p. 158 a 163.</td>
              </tr>
              <tr>
                <td>2</td>
                <td>Taxonomia de Flynn</td>
                <td>Machado, 4ed, Cap 12 – Considerações sobre outras arquiteturas, p. 398.</td>
              </tr>
              <tr>
                <td>3</td>
                <td>Pipeline</td>
                <td>Machado, 4ed, Cap 2 – Conceitos de hardware e software, p. 31.</td>
              </tr>
              <tr>
                <td>4</td>
                <td>Sistema Operacional</td>
                <td>Machado, 4ed, Cap 1 – Visão geral, p. 15 a 21.</td>
              </tr>
              <tr>
                <td>5</td>
                <td>Processos / threads</td>
                <td>Machado, 4ed, Cap 5 – Processos p. 65 a 72. e Cap 6 – Threads, p. 85 a 89.</td>
              </tr>
              <tr>
                <td>5</td>
                <td>Conversão de bases</td>
                <td>Monteiro, 5ed, Cap 3 – Conversão de bases e aritmética computacional, p 54 a 73.</td>
              </tr>
              <tr>
                <td>6</td>
                <td>Barramento</td>
                <td>Machado, 4ed, Cap 2 – Conceitos de hardware e software, p. 29 a 31.</td>
              </tr>
            </tbody>
          </Table>
        </Col>
      </Row>
      <Row>
        <Col>
          <br />
          <h5>Bibliografia</h5>
          <p>MACHADO, F. B., & MAIA, L. P. Arquitetura de sistemas operacionais (Vol. 4). LTC, 2004.</p>
          <p>MONTEIRO, M. A. Introdução à organização de computadores. 5ª Edição. Rio de Janeiro: LTC, 2007.</p>
        </Col>
      </Row>
    </>
  )
}