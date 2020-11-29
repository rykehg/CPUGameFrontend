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
              <br/>
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
                <Card className="p-3">
                  <Card.Body>
                    <Card.Title>Objetivo 2</Card.Title>
                    <Card.Text>O Caps Lock do teclado foi pressionado. Acenda o LED correspondente (converta para hexadecimal).</Card.Text>
                    <Card.Text>10110000011110100000_00111011</Card.Text>
                    <Card.Subtitle className="mb-2 text-muted">Pontos: 700</Card.Subtitle>
                    <Card.Subtitle className="mb-2 text-muted">Extra: 100</Card.Subtitle>
                  </Card.Body>
                </Card>
                <Card className="p-3">
                  <Card.Body>
                    <Card.Title>Objetivo 3</Card.Title>
                    <Card.Text>Forneça energia ao periférico sonoro fazendo com que seu LED fique aceso (converta para hexadecimal).</Card.Text>
                    <Card.Text>01011010101110100000</Card.Text>
                    <Card.Subtitle className="mb-2 text-muted">Pontos: 700</Card.Subtitle>
                    <Card.Subtitle className="mb-2 text-muted">Extra: 100</Card.Subtitle>
                  </Card.Body>
                </Card>
              </CardColumns>
              <CardColumns>
                <Card className="p-3">
                  <Card.Body>
                    <Card.Title>Objetivo 4</Card.Title>
                    <Card.Text>Forneça um pulso elétrico e ligue o periférico de vídeo (converta para hexadecimal).</Card.Text>
                    <Card.Text>1111000001110000_000001000010</Card.Text>
                    <Card.Subtitle className="mb-2 text-muted">Pontos: 700</Card.Subtitle>
                    <Card.Subtitle className="mb-2 text-muted">Extra: 100</Card.Subtitle>
                  </Card.Body>
                </Card>
                <Card className="p-3">
                  <Card.Body>
                    <Card.Title>Objetivo 5</Card.Title>
                    <Card.Text>O Scroll Lock do teclado foi pressionado. Acenda o LED correspondente (converta para hexadecimal).</Card.Text>
                    <Card.Text>10110000011110100000_00001111</Card.Text>
                    <Card.Subtitle className="mb-2 text-muted">Pontos: 700</Card.Subtitle>
                    <Card.Subtitle className="mb-2 text-muted">Extra: 100</Card.Subtitle>
                  </Card.Body>
                </Card>
                <Card className="p-3">
                  <Card.Body>
                    <Card.Title>Objetivo 6</Card.Title>
                    <Card.Text>O Num Lock do teclado foi pressionado. Acenda o LED correspondente (converta para hexadecimal).</Card.Text>
                    <Card.Text>10110000011110100000_00100010</Card.Text>
                    <Card.Subtitle className="mb-2 text-muted">Pontos: 700</Card.Subtitle>
                    <Card.Subtitle className="mb-2 text-muted">Extra: 100</Card.Subtitle>
                  </Card.Body>
                </Card>
              </CardColumns>
              <CardColumns>
                <Card className="p-3">
                  <Card.Body>
                    <Card.Title>Objetivo 7</Card.Title>
                    <Card.Text>Forneça um pulso de energia ao Disco Rígido fazendo com que o seu LED fique aceso (converta para hexadecimal).</Card.Text>
                    <Card.Text>1111000001110000_000001111000</Card.Text>
                    <Card.Subtitle className="mb-2 text-muted">Pontos: 700</Card.Subtitle>
                    <Card.Subtitle className="mb-2 text-muted">Extra: 100</Card.Subtitle>
                  </Card.Body>
                </Card>
                <Card className="p-3">
                  <Card.Body>
                    <Card.Title>Objetivo 8</Card.Title>
                    <Card.Text>Ligue o periférico sonoro fazendo com que seu LED fique aceso (converta para hexadecimal).</Card.Text>
                    <Card.Text>011000000001101010111010</Card.Text>
                    <Card.Subtitle className="mb-2 text-muted">Pontos: 700</Card.Subtitle>
                    <Card.Subtitle className="mb-2 text-muted">Extra: 100</Card.Subtitle>
                  </Card.Body>
                </Card>
                <Card className="p-3">
                  <Card.Body>
                    <Card.Title>Objetivo 9</Card.Title>
                    <Card.Text>Ligue o periférico de impressão fazendo com que seu LED fique aceso (converta para hexadecimal).</Card.Text>
                    <Card.Text>110100001100_000001110101</Card.Text>
                    <Card.Subtitle className="mb-2 text-muted">Pontos: 700</Card.Subtitle>
                    <Card.Subtitle className="mb-2 text-muted">Extra: 100</Card.Subtitle>
                  </Card.Body>
                </Card>
              </CardColumns>
              <CardColumns>
                <Card className="p-3">
                  <Card.Body>
                    <Card.Title>Objetivo 10</Card.Title>
                    <Card.Text>Forneça um pulso elétrico e ligue o periférico de vídeo (converta para hexadecimal).</Card.Text>
                    <Card.Text>1111000001110000_100000100101</Card.Text>
                    <Card.Subtitle className="mb-2 text-muted">Pontos: 700</Card.Subtitle>
                    <Card.Subtitle className="mb-2 text-muted">Extra: 100</Card.Subtitle>
                  </Card.Body>
                </Card>
                <Card className="p-3">
                  <Card.Body>
                    <Card.Title>Objetivo 11</Card.Title>
                    <Card.Text>Forneça energia ao periférico sonoro fazendo com que seu LED fique aceso (converta para hexadecimal).</Card.Text>
                    <Card.Text>1010101110101100101001111110</Card.Text>
                    <Card.Subtitle className="mb-2 text-muted">Pontos: 700</Card.Subtitle>
                    <Card.Subtitle className="mb-2 text-muted">Extra: 100</Card.Subtitle>
                  </Card.Body>
                </Card>
                <Card className="p-3">
                  <Card.Body>
                    <Card.Title>Objetivo 12</Card.Title>
                    <Card.Text>Desligue o periférico sonoro fazendo com que seu LED fique apagado (converta para hexadecimal).</Card.Text>
                    <Card.Text>101110100111101001111010</Card.Text>
                    <Card.Subtitle className="mb-2 text-muted">Pontos: 700</Card.Subtitle>
                    <Card.Subtitle className="mb-2 text-muted">Extra: 100</Card.Subtitle>
                  </Card.Body>
                </Card>
              </CardColumns>
              <CardColumns>
                <Card className="p-3">
                  <Card.Body>
                    <Card.Title>Objetivo 13</Card.Title>
                    <Card.Text>Forneça um pulso de energia ao Disco Rígido fazendo com que o seu LED fique aceso (converta para hexadecimal).</Card.Text>
                    <Card.Text>110000001101000101100000</Card.Text>
                    <Card.Subtitle className="mb-2 text-muted">Pontos: 700</Card.Subtitle>
                    <Card.Subtitle className="mb-2 text-muted">Extra: 100</Card.Subtitle>
                  </Card.Body>
                </Card>
                <Card className="p-3">
                  <Card.Body>
                    <Card.Title>Objetivo 14</Card.Title>
                    <Card.Text>Desligue o periférico de impressão fazendo com que seu LED fique apagado (converta para hexadecimal).</Card.Text>
                    <Card.Text>110100001100_001001110011</Card.Text>
                    <Card.Subtitle className="mb-2 text-muted">Pontos: 700</Card.Subtitle>
                    <Card.Subtitle className="mb-2 text-muted">Extra: 100</Card.Subtitle>
                  </Card.Body>
                </Card>
                <Card className="p-3">
                  <Card.Body>
                    <Card.Title>Objetivo 15</Card.Title>
                    <Card.Text>Forneça um pulso elétrico e ligue o periférico de vídeo (converta para hexadecimal).</Card.Text>
                    <Card.Text>1111000001110000_011001000010</Card.Text>
                    <Card.Subtitle className="mb-2 text-muted">Pontos: 700</Card.Subtitle>
                    <Card.Subtitle className="mb-2 text-muted">Extra: 100</Card.Subtitle>
                  </Card.Body>
                </Card>
              </CardColumns>
              <CardColumns>
                <Card className="p-3">
                  <Card.Body>
                    <Card.Title>Objetivo 16</Card.Title>
                    <Card.Text>Desligue o periférico de impressão fazendo com que seu LED fique apagado (converta para hexadecimal).</Card.Text>
                    <Card.Text>10110000011110100000_000011111111</Card.Text>
                    <Card.Subtitle className="mb-2 text-muted">Pontos: 700</Card.Subtitle>
                    <Card.Subtitle className="mb-2 text-muted">Extra: 100</Card.Subtitle>
                  </Card.Body>
                </Card>
                <Card className="p-3">
                  <Card.Body>
                    <Card.Title>Objetivo 17</Card.Title>
                    <Card.Text>A partir de duas variáveis da memória principal (A e B) comprar uma carta decodificador, realizar a operação e exibir o resultado em tela.</Card.Text>
                    <Card.Text>A = +11111010 (+250)<br/>A_?_B</Card.Text>
                    <Card.Subtitle className="mb-2 text-muted">Pontos: 800</Card.Subtitle>
                    <Card.Subtitle className="mb-2 text-muted">Extra: 200</Card.Subtitle>
                  </Card.Body>
                </Card>
                <Card className="p-3">
                  <Card.Body>
                    <Card.Title>Objetivo 18</Card.Title>
                    <Card.Text>A partir de duas variáveis da memória principal (A e B) comprar uma carta decodificador, realizar a operação e exibir o resultado em tela.</Card.Text>
                    <Card.Text>A = -11111010 (-250)<br/>A_?_B</Card.Text>
                    <Card.Subtitle className="mb-2 text-muted">Pontos: 800</Card.Subtitle>
                    <Card.Subtitle className="mb-2 text-muted">Extra: 200</Card.Subtitle>
                  </Card.Body>
                </Card>
              </CardColumns>
              <CardColumns>
                <Card className="p-3">
                  <Card.Body>
                    <Card.Title>Objetivo 19</Card.Title>
                    <Card.Text>A partir de duas variáveis da memória principal (A e B) comprar uma carta decodificador, realizar a operação e imprimir a conta e o resultado.</Card.Text>
                    <Card.Text>A = +10010110 (+150)<br/>A_?_B</Card.Text>
                    <Card.Subtitle className="mb-2 text-muted">Pontos: 800</Card.Subtitle>
                    <Card.Subtitle className="mb-2 text-muted">Extra: 200</Card.Subtitle>
                  </Card.Body>
                </Card>
                <Card className="p-3">
                  <Card.Body>
                    <Card.Title>Objetivo 20</Card.Title>
                    <Card.Text>A partir de duas variáveis da memória principal (A e B) comprar uma carta decodificador, realizar a operação e exibir o resultado em tela.</Card.Text>
                    <Card.Text>A = -10010110 (-150)<br/>A_?_B</Card.Text>
                    <Card.Subtitle className="mb-2 text-muted">Pontos: 800</Card.Subtitle>
                    <Card.Subtitle className="mb-2 text-muted">Extra: 200</Card.Subtitle>
                  </Card.Body>
                </Card>
                <Card className="p-3">
                  <Card.Body>
                    <Card.Title>Objetivo 21</Card.Title>
                    <Card.Text>A partir de duas variáveis da memória principal (A e B) comprar uma carta decodificador, realizar a operação e exibir o resultado em tela.</Card.Text>
                    <Card.Text>A = +10010110 (+150)<br/>A_?_B</Card.Text>
                    <Card.Subtitle className="mb-2 text-muted">Pontos: 800</Card.Subtitle>
                    <Card.Subtitle className="mb-2 text-muted">Extra: 200</Card.Subtitle>
                  </Card.Body>
                </Card>
              </CardColumns>
              <CardColumns>
                <Card className="p-3">
                  <Card.Body>
                    <Card.Title>Objetivo 22</Card.Title>
                    <Card.Text>A partir de duas variáveis da memória principal (A e B) comprar uma carta decodificador, realizar a operação e exibir o resultado em tela.</Card.Text>
                    <Card.Text>A = -10010110 (+150)<br/>A_?_B</Card.Text>
                    <Card.Subtitle className="mb-2 text-muted">Pontos: 800</Card.Subtitle>
                    <Card.Subtitle className="mb-2 text-muted">Extra: 200</Card.Subtitle>
                  </Card.Body>
                </Card>
                <Card className="p-3">
                  <Card.Body>
                    <Card.Title>Objetivo 23</Card.Title>
                    <Card.Text>A partir de duas variáveis da memória principal (A e B) comprar uma carta decodificador, realizar a operação e imprimir a conta e o resultado.</Card.Text>
                    <Card.Text>A = +11111010 (+250)<br/>A_?_B</Card.Text>
                    <Card.Subtitle className="mb-2 text-muted">Pontos: 800</Card.Subtitle>
                    <Card.Subtitle className="mb-2 text-muted">Extra: 200</Card.Subtitle>
                  </Card.Body>
                </Card>
                <Card className="p-3">
                  <Card.Body>
                    <Card.Title>Objetivo 24</Card.Title>
                    <Card.Text>A partir de duas variáveis da memória principal (A e B) comprar uma carta decodificador, realizar a operação e imprimir a conta e o resultado.</Card.Text>
                    <Card.Text>A = -11111010 (+250)<br/>A_?_B</Card.Text>
                    <Card.Subtitle className="mb-2 text-muted">Pontos: 800</Card.Subtitle>
                    <Card.Subtitle className="mb-2 text-muted">Extra: 200</Card.Subtitle>
                  </Card.Body>
                </Card>
              </CardColumns>
              <CardColumns>
                <Card className="p-3">
                  <Card.Body>
                    <Card.Title>Objetivo 25</Card.Title>
                    <Card.Text>A partir de duas variáveis da memória principal (A e B) comprar uma carta decodificador, realizar a operação e exibir a conta e o resultado em tela.</Card.Text>
                    <Card.Text>A = +10010110 (+150)<br/>A_?_B</Card.Text>
                    <Card.Subtitle className="mb-2 text-muted">Pontos: 800</Card.Subtitle>
                    <Card.Subtitle className="mb-2 text-muted">Extra: 200</Card.Subtitle>
                  </Card.Body>
                </Card>
                <Card className="p-3">
                  <Card.Body>
                    <Card.Title>Objetivo 26</Card.Title>
                    <Card.Text>A partir de duas variáveis da memória principal (A e B) comprar uma carta decodificador, realizar a operação e exibir a conta e o resultado em tela.</Card.Text>
                    <Card.Text>A = +11111010 (+250)<br/>A_?_B</Card.Text>
                    <Card.Subtitle className="mb-2 text-muted">Pontos: 800</Card.Subtitle>
                    <Card.Subtitle className="mb-2 text-muted">Extra: 200</Card.Subtitle>
                  </Card.Body>
                </Card>
                <Card className="p-3">
                  <Card.Body>
                    <Card.Title>Objetivo 27</Card.Title>
                    <Card.Text>A partir de duas variáveis da memória principal (A e B) comprar uma carta decodificador, realizar a operação e grave o dado no HD.</Card.Text>
                    <Card.Text>A = +10010110 (+150)<br/>A_?_B</Card.Text>
                    <Card.Subtitle className="mb-2 text-muted">Pontos: 800</Card.Subtitle>
                    <Card.Subtitle className="mb-2 text-muted">Extra: 200</Card.Subtitle>
                  </Card.Body>
                </Card>
              </CardColumns>
              <CardColumns>
                <Card className="p-3">
                  <Card.Body>
                    <Card.Title>Objetivo 28</Card.Title>
                    <Card.Text>A partir de duas variáveis da memória principal (A e B) comprar uma carta decodificador, realizar a operação e grave o dado no HD.</Card.Text>
                    <Card.Text>A = -10010110 (-150)<br/>A_?_B</Card.Text>
                    <Card.Subtitle className="mb-2 text-muted">Pontos: 800</Card.Subtitle>
                    <Card.Subtitle className="mb-2 text-muted">Extra: 200</Card.Subtitle>
                  </Card.Body>
                </Card>
                <Card className="p-3">
                  <Card.Body>
                    <Card.Title>Objetivo 29</Card.Title>
                    <Card.Text>A partir de duas variáveis da memória principal (A e B) comprar uma carta decodificador, realizar a operação e imprimir a conta e o resultado.</Card.Text>
                    <Card.Text>A = +10010110 (+150)<br/>A_?_B</Card.Text>
                    <Card.Subtitle className="mb-2 text-muted">Pontos: 800</Card.Subtitle>
                    <Card.Subtitle className="mb-2 text-muted">Extra: 200</Card.Subtitle>
                  </Card.Body>
                </Card>
                <Card className="p-3">
                  <Card.Body>
                    <Card.Title>Objetivo 30</Card.Title>
                    <Card.Text>A partir de duas variáveis da memória principal (A e B) comprar uma carta decodificador, realizar a operação e imprimir a conta e o resultado.</Card.Text>
                    <Card.Text>A = +11111010 (+250)<br/>A_?_B</Card.Text>
                    <Card.Subtitle className="mb-2 text-muted">Pontos: 800</Card.Subtitle>
                    <Card.Subtitle className="mb-2 text-muted">Extra: 200</Card.Subtitle>
                  </Card.Body>
                </Card>
              </CardColumns>
              <CardColumns>
                <Card className="p-3">
                  <Card.Body>
                    <Card.Title>Objetivo 31</Card.Title>
                    <Card.Text>A partir de duas variáveis da memória principal (A e B) comprar uma carta decodificador, realizar a operação e grave o dado no HD.</Card.Text>
                    <Card.Text>A = +11111010 (+250)<br/>A_?_B</Card.Text>
                    <Card.Subtitle className="mb-2 text-muted">Pontos: 800</Card.Subtitle>
                    <Card.Subtitle className="mb-2 text-muted">Extra: 200</Card.Subtitle>
                  </Card.Body>
                </Card>
                <Card className="p-3">
                  <Card.Body>
                    <Card.Title>Objetivo 32</Card.Title>
                    <Card.Text>A partir de duas variáveis da memória principal (A e B) comprar uma carta decodificador, realizar a operação e grave o dado no HD.</Card.Text>
                    <Card.Text>A = -11111010 (+250)<br/>A_?_B</Card.Text>
                    <Card.Subtitle className="mb-2 text-muted">Pontos: 800</Card.Subtitle>
                    <Card.Subtitle className="mb-2 text-muted">Extra: 200</Card.Subtitle>
                  </Card.Body>
                </Card>
              </CardColumns>
            </Tab>
            <Tab eventKey="Decodificador" title="Decodificador">
              <br/>
              <h4>Cartas de Decodificador</h4>
              <CardColumns>
                <Card className="p-3">
                  <Card.Body>
                    <Card.Title>Decodificador 1</Card.Title>
                    <Card.Text>A maior que B</Card.Text>
                  </Card.Body>
                </Card>
                <Card className="p-3">
                  <Card.Body>
                    <Card.Title>Decodificador 2</Card.Title>
                    <Card.Text>A menor que B</Card.Text>
                  </Card.Body>
                </Card>
                <Card className="p-3">
                  <Card.Body>
                    <Card.Title>Decodificador 3</Card.Title>
                    <Card.Text>A mais B</Card.Text>
                  </Card.Body>
                </Card>
              </CardColumns>
              <CardColumns>
                <Card className="p-3">
                  <Card.Body>
                    <Card.Title>Decodificador 4</Card.Title>
                    <Card.Text>A menos B</Card.Text>
                  </Card.Body>
                </Card>
                <Card className="p-3">
                  <Card.Body>
                    <Card.Title>Decodificador 5</Card.Title>
                    <Card.Text>A igual a B</Card.Text>
                  </Card.Body>
                </Card>
                <Card className="p-3">
                  <Card.Body>
                    <Card.Title>Decodificador 6</Card.Title>
                    <Card.Text>A diferente de B</Card.Text>
                  </Card.Body>
                </Card>
              </CardColumns>
              <CardColumns>
                <Card className="p-3">
                  <Card.Body>
                    <Card.Title>Decodificador 7</Card.Title>
                    <Card.Text>A maior que +200<br/>E<br/>B menor que +200</Card.Text>
                  </Card.Body>
                </Card>
                <Card className="p-3">
                  <Card.Body>
                    <Card.Title>Decodificador 8</Card.Title>
                    <Card.Text>A maior que -200<br/>OU<br/>B menor que -200</Card.Text>
                  </Card.Body>
                </Card>
                <Card className="p-3">
                  <Card.Body>
                    <Card.Title>Decodificador 9</Card.Title>
                    <Card.Text>A igual a +150<br/>E<br/>B igual a +150</Card.Text>
                  </Card.Body>
                </Card>
              </CardColumns>
              <CardColumns>
                <Card className="p-3">
                  <Card.Body>
                    <Card.Title>Decodificador 10</Card.Title>
                    <Card.Text>A diferente de +250<br/>OU<br/>B diferente de +250</Card.Text>
                  </Card.Body>
                </Card>
                <Card className="p-3">
                  <Card.Body>
                    <Card.Title>Decodificador 11</Card.Title>
                    <Card.Text>A maior que +200<br/>E<br/>B menor que -200</Card.Text>
                  </Card.Body>
                </Card>
                <Card className="p-3">
                  <Card.Body>
                    <Card.Title>Decodificador 12</Card.Title>
                    <Card.Text>A igual a +250<br/>OU<br/>B diferente de +150</Card.Text>
                  </Card.Body>
                </Card>
              </CardColumns>
            </Tab>
            <Tab eventKey="Variável " title="Variável">
              <br/>
              <h4>Cartas de Variável</h4>
              <CardColumns>
                <Card className="p-3">
                  <Card.Body>
                    <Card.Title>Variável 1</Card.Title>
                    <Card.Text>B = +11111010</Card.Text>
                  </Card.Body>
                </Card>
                <Card className="p-3">
                  <Card.Body>
                    <Card.Title>Variável 2</Card.Title>
                    <Card.Text>B = -11111010</Card.Text>
                  </Card.Body>
                </Card>
                <Card className="p-3">
                  <Card.Body>
                    <Card.Title>Variável 3</Card.Title>
                    <Card.Text>B = +10010110</Card.Text>
                  </Card.Body>
                </Card>
              </CardColumns>
              <CardColumns>
                <Card className="p-3">
                  <Card.Body>
                    <Card.Title>Variável 4</Card.Title>
                    <Card.Text>B = -10010110</Card.Text>
                  </Card.Body>
                </Card>
                <Card className="p-3">
                  <Card.Body>
                    <Card.Title>Variável 5</Card.Title>
                    <Card.Text>B = +250</Card.Text>
                  </Card.Body>
                </Card>
                <Card className="p-3">
                  <Card.Body>
                    <Card.Title>Variável 6</Card.Title>
                    <Card.Text>B = -250</Card.Text>
                  </Card.Body>
                </Card>
              </CardColumns>
              <CardColumns>
                <Card className="p-3">
                  <Card.Body>
                    <Card.Title>Variável 7</Card.Title>
                    <Card.Text>B = +150</Card.Text>
                  </Card.Body>
                </Card>
                <Card className="p-3">
                  <Card.Body>
                    <Card.Title>Variável 8</Card.Title>
                    <Card.Text>B = -150</Card.Text>
                  </Card.Body>
                </Card>
              </CardColumns>
            </Tab>
            <Tab eventKey="SistemaOperacional" title="Sistema Operacional">
              <br/>
              <h4>Cartas de Sistema Operacional</h4>
              <CardColumns>
                <Card className="p-3">
                  <Card.Body>
                    <Card.Title>SO 01</Card.Title>
                    <Card.Title>Use ao fim do clock:</Card.Title>
                    <Card.Text>Você recebeu dois níveis de prioridade! Suba seu processo até duas posições na fila. Compre uma carta de SO.</Card.Text>
                  </Card.Body>
                </Card>
                <Card className="p-3">
                  <Card.Body>
                    <Card.Title>SO 02</Card.Title>
                    <Card.Title>Use ao fim do clock:</Card.Title>
                    <Card.Text>Você recebeu três níveis de prioridade! Seu processo sobe até três posições na fila. Compre uma carta de SO.</Card.Text>
                  </Card.Body>
                </Card>
                <Card className="p-3">
                  <Card.Body>
                    <Card.Title>SO 03</Card.Title>
                    <Card.Title>Use ao fim do clock:</Card.Title>
                    <Card.Text>Escolha um processo para descer até duas posições na fila. Compre uma carta de SO.</Card.Text>
                  </Card.Body>
                </Card>
              </CardColumns>
              <CardColumns>
                <Card className="p-3">
                  <Card.Body>
                    <Card.Title>SO 04</Card.Title>
                    <Card.Title>Use ao fim do clock:</Card.Title>
                    <Card.Text>Escolha um processo para descer até três posições na fila. Compre uma carta de SO.</Card.Text>
                  </Card.Body>
                </Card>
                <Card className="p-3">
                  <Card.Body>
                    <Card.Title>SO 05</Card.Title>
                    <Card.Title>Use ao fim do clock:</Card.Title>
                    <Card.Text>Você recebeu dois níveis de prioridade! Suba seu processo até duas posições na fila. Compre uma carta de SO.</Card.Text>
                  </Card.Body>
                </Card>
                <Card className="p-3">
                  <Card.Body>
                    <Card.Title>SO 06</Card.Title>
                    <Card.Title>Use ao fim do clock:</Card.Title>
                    <Card.Text>Você recebeu três níveis de prioridade! Seu processo sobe até três posições na fila. Compre uma carta de SO.</Card.Text>
                  </Card.Body>
                </Card>
              </CardColumns>
              <CardColumns>
                <Card className="p-3">
                  <Card.Body>
                    <Card.Title>SO 07</Card.Title>
                    <Card.Title>Use ao fim do clock:</Card.Title>
                    <Card.Text>Escolha um processo para descer até duas posições na fila. Compre uma carta de SO.</Card.Text>
                  </Card.Body>
                </Card>
                <Card className="p-3">
                  <Card.Body>
                    <Card.Title>SO 08</Card.Title>
                    <Card.Title>Use ao fim do clock:</Card.Title>
                    <Card.Text>Você recebeu três níveis de prioridade! Seu processo sobe até três posições na fila. Compre uma carta de SO.</Card.Text>
                  </Card.Body>
                </Card>
                <Card className="p-3">
                  <Card.Body>
                    <Card.Title>SO 09</Card.Title>
                    <Card.Title>Use ao fim do clock:</Card.Title>
                    <Card.Text>Você pode destravar um processo qualquer que não seja o seu e travar outro. Compre uma carta de SO.</Card.Text>
                  </Card.Body>
                </Card>
              </CardColumns>
              <CardColumns>
                <Card className="p-3">
                  <Card.Body>
                    <Card.Title>SO 10</Card.Title>
                    <Card.Title>Use ao fim do clock:</Card.Title>
                    <Card.Text>Você pode destravar um processo qualquer que não seja o seu e travar outro. Compre uma carta de SO.</Card.Text>
                  </Card.Body>
                </Card>
                <Card className="p-3">
                  <Card.Body>
                    <Card.Title>SO 11</Card.Title>
                    <Card.Title>Use em outro processo ao fim do clock:</Card.Title>
                    <Card.Text>Troque de posição com outro processo. Compre uma carta de SO.</Card.Text>
                  </Card.Body>
                </Card>
                <Card className="p-3">
                  <Card.Body>
                    <Card.Title>SO 12</Card.Title>
                    <Card.Title>Use em outro processo ao fim do clock:</Card.Title>
                    <Card.Text>Troque de posição com outro processo. Compre uma carta de SO.</Card.Text>
                  </Card.Body>
                </Card>
              </CardColumns>
              <CardColumns>
                <Card className="p-3">
                  <Card.Body>
                    <Card.Title>SO 13</Card.Title>
                    <Card.Title>Use ao fim do clock:</Card.Title>
                    <Card.Text>Seu processo fica imune a uma carta de SO.</Card.Text>
                  </Card.Body>
                </Card>
                <Card className="p-3">
                  <Card.Body>
                    <Card.Title>SO 14</Card.Title>
                    <Card.Title>Use ao fim do clock:</Card.Title>
                    <Card.Text>Seu processo fica imune a uma carta de SO.</Card.Text>
                  </Card.Body>
                </Card>
                <Card className="p-3">
                  <Card.Body>
                    <Card.Title>SO 15</Card.Title>
                    <Card.Title>Use ao fim do clock:</Card.Title>
                    <Card.Text>Seu processo fica imune a uma carta de SO.</Card.Text>
                  </Card.Body>
                </Card>
              </CardColumns>
              <CardColumns>
                <Card className="p-3">
                  <Card.Body>
                    <Card.Title>SO 16</Card.Title>
                    <Card.Title>Use quando seu processo for alvo de uma carta:</Card.Title>
                    <Card.Text>Seu processo fica imune a uma carta de SO. Jogue a carta que iria ter efeito no seu processo em um terceiro jogador.</Card.Text>
                  </Card.Body>
                </Card>
                <Card className="p-3">
                  <Card.Body>
                    <Card.Title>SO 17</Card.Title>
                    <Card.Title>Use em outro processo ao fim do clock:</Card.Title>
                    <Card.Text>Interrompa outro processo em execução. Troque de posição com ele. Ele não joga nesse clock, mas compra uma carta de SO.</Card.Text>
                  </Card.Body>
                </Card>
                <Card className="p-3">
                  <Card.Body>
                    <Card.Title>SO 18</Card.Title>
                    <Card.Title>Use em outro processo ao fim do clock:</Card.Title>
                    <Card.Text>Interrompa outro processo em execução. Troque de posição com ele. Ele não joga nesse clock, mas compra uma carta de SO.</Card.Text>
                  </Card.Body>
                </Card>
              </CardColumns>
              <CardColumns>
                <Card className="p-3">
                  <Card.Body>
                    <Card.Title>SO 19</Card.Title>
                    <Card.Title>Use quando seu processo for alvo de uma carta:</Card.Title>
                    <Card.Text>Trave um processo adversário por uma rodada (ele não joga). Ele desce até duas posições na fila, mas compra o uma carta de SO.</Card.Text>
                  </Card.Body>
                </Card>
                <Card className="p-3">
                  <Card.Body>
                    <Card.Title>SO 20</Card.Title>
                    <Card.Title>Use em outro processo ao fim do clock:</Card.Title>
                    <Card.Text>Trave um processo adversário por uma rodada (ele não joga). Ele desce até duas posições na fila, mas compra o uma carta de SO.</Card.Text>
                  </Card.Body>
                </Card>
                <Card className="p-3">
                  <Card.Body>
                    <Card.Title>SO 21</Card.Title>
                    <Card.Title>Use em outro processo ao fim do clock:</Card.Title>
                    <Card.Text>Interrompa outro processo em execução. Ele vai para o final da fila, não joga durante esse clock, mas compra uma carta de SO.</Card.Text>
                  </Card.Body>
                </Card>
              </CardColumns>
              <CardColumns>
                <Card className="p-3">
                  <Card.Body>
                    <Card.Title>SO 22</Card.Title>
                    <Card.Title>Use essa carta ao fim de um clock:</Card.Title>
                    <Card.Text>Só seu processo joga nesta rodada porém todos os demais jogadores compram um carta de SO. Seu processo é imune a qualquer carta nessa rodada.</Card.Text>
                  </Card.Body>
                </Card>
                <Card className="p-3">
                  <Card.Body>
                    <Card.Title>SO 23</Card.Title>
                    <Card.Title>Use essa carta ao fim de um clock:</Card.Title>
                    <Card.Text>Só seu processo joga nesta rodada porém todos os demais jogadores compram um carta de SO. Seu processo é imune a qualquer carta nessa rodada.</Card.Text>
                  </Card.Body>
                </Card>
                <Card className="p-3">
                  <Card.Body>
                    <Card.Title>SO 24</Card.Title>
                    <Card.Title>Use essa carta ao fim de um clock:</Card.Title>
                    <Card.Text>Seu processo e outro a sua escolha jogam nesta rodada porém todos os demais jogadores compram um carta de SO. Seu processo é imune a qualquer carta nessa rodada.</Card.Text>
                  </Card.Body>
                </Card>
              </CardColumns>
              <CardColumns>
                <Card className="p-3">
                  <Card.Body>
                    <Card.Title>SO 25</Card.Title>
                    <Card.Title>Use essa carta ao fim de um clock:</Card.Title>
                    <Card.Text>Seu processo e outro a sua escolha jogam nesta rodada porém todos os demais jogadores compram um carta de SO. Seu processo é imune a qualquer carta nessa rodada.</Card.Text>
                  </Card.Body>
                </Card>
                <Card className="p-3">
                  <Card.Body>
                    <Card.Title>SO 26</Card.Title>
                    <Card.Title>Use em outro processo ao fim do clock:</Card.Title>
                    <Card.Text>Interrompa outro processo em execução. Troque de posição com ele. Ele não joga nesse clock, mas compra uma carta de SO.</Card.Text>
                  </Card.Body>
                </Card>
                <Card className="p-3">
                  <Card.Body>
                    <Card.Title>SO 27</Card.Title>
                    <Card.Title>Use ao fim do clock:</Card.Title>
                    <Card.Text>Você pode destravar um processo qualquer que não seja o seu e travar outro. Compre uma carta de SO.</Card.Text>
                  </Card.Body>
                </Card>
              </CardColumns>
              <CardColumns>
                <Card className="p-3">
                  <Card.Body>
                    <Card.Title>SO 28</Card.Title>
                    <Card.Title>Use quando seu processo for alvo de uma carta:</Card.Title>
                    <Card.Text>Seu processo fica imune a uma carta de SO. Jogue a carta que iria ter efeito no seu processo em um terceiro jogador.</Card.Text>
                  </Card.Body>
                </Card>
              </CardColumns>
            </Tab>
            <Tab eventKey="Evento" title="Evento">
              <br/>
              <h4>Cartas de Evento</h4>
              <CardColumns>
                <Card className="p-3">
                  <Card.Body>
                    <Card.Title>Evento 01</Card.Title>
                    <Card.Text>Todos os jogadores compram uma carta de SO.</Card.Text>
                  </Card.Body>
                </Card>
                <Card className="p-3">
                  <Card.Body>
                    <Card.Title>Evento 02</Card.Title>
                    <Card.Text>O SO usará um processador durante esse clock prioritariamente. Todos os processos ficam reduzidos a um processador a menos por um clock.</Card.Text>
                  </Card.Body>
                </Card>
                <Card className="p-3">
                  <Card.Body>
                    <Card.Title>Evento 03</Card.Title>
                    <Card.Text>O SO usará um processador durante esse clocks prioritariamente. Todos os processos ficam reduzidos a um processador a menos por um clock.</Card.Text>
                  </Card.Body>
                </Card>
              </CardColumns>
              <CardColumns>
                <Card className="p-3">
                  <Card.Body>
                    <Card.Title>Evento 04</Card.Title>
                    <Card.Text>O SO está trabalhando de forma eficiente! Todos os processos recebem um processador a mais por um clock.</Card.Text>
                  </Card.Body>
                </Card>
              </CardColumns>
            </Tab>
          </Tabs>
        </Col>
      </Row>
    </>
  )
}