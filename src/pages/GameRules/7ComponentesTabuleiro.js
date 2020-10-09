import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import './styles.css';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

export default function ComponentesTabuleiro() {

  return (
    <>
      <Row>
        <Col><h3>Componentes do Tabuleiro</h3></Col>
      </Row>
      <Row>
        <Col>
        <p>RDM (MBR) – Registrador de dado de memória à Primeira entrada do dado no 
          processador - Para efetuar o cálculo da UAL o dado deve estar no registrador. O 
          resultado da UAL também deve ser armazenado. O cache L1 ou L2 ou MP podem ser 
          usados para guardar momentaneamente esses dados, porém as velocidades dos 
          registradores internos são bem maiores.</p>
        </Col>
      </Row>
      <Row>
        <Col>
        <p>REM (MAR) – Registrador de endereço de memória – Registra o endereço de dados 
          que a UC requisita para a MP, tais dados são registrados e entram por meio do RDM.</p>
        </Col>
      </Row>
      <Row>
        <Col>
        <p>CI (PC) contador de instrução / processos - Segundo principal passo dentro do 
          processador das instruções a serem executadas.</p>
        </Col>
      </Row>
      <Row>
        <Col>
        <p>RI – registrador de instruções – é o responsável por registrar qual instrução 
          está sendo executada.</p>
        </Col>
      </Row>
      <Row>
        <Col>
        <p>Decodificador de instruções – Decodifica a operação a ser realizada pela UAL e UC.</p>
        </Col>
      </Row>
      <Row>
        <Col>
        <p>UC – Unidade de controle – Solicita a busca de uma instrução na MP (uma por vez)
          solicita o armazenamento nos registradores da UCP; Interpreta a operação 
          decodificada (+, -, entrada ou saída de dado, movimentação de um dado); solicita 
          a busca dos dados onde estiverem armazenados (Operandos). </p>
        </Col>
      </Row>
      <Row>
        <Col>
        <p>Registradores de trabalho – Registram os dados que serão usados na UAL e se 
          necessário o resultado da operação.</p>
        </Col>
      </Row>
      <Row>
        <Col>
        <p>UAL - Unidade aritmética e lógica - aglomerado de circuitos lógicos e 
          componentes eletrônicos simples, que integrados, realizam as operações 
          (+, -, *, /, E, OU, XOR, complemento, deslocamento direita e esquerda, incremento
          de 1 e decremento de 1). Possuem duas entradas (dados e controle) e uma saída 
          (resultado da operação).</p>
        </Col>
      </Row>
      <Row>
        <Col>
        <p>Relógio (clock) – determina o ciclo de máquina através de uma frequência (Hz), 
          e está dita os ciclos das instruções a serem realizadas em todo o computador. </p>
        </Col>
      </Row>
      <Row>
        <Col>
        <p>Memória principal – dispositivo que permite ao computador guardar dados, e 
          processos temporariamente.</p>
        </Col>
      </Row>
      <Row>
        <Col>
        <p>Periféricos - aparelhos ou placas de expansão que enviam ou recebem informações do computador.</p>
        </Col>
      </Row>
      <Row>
        <Col>
        <p>Pipeline – É uma técnica que permite ao processador executar múltiplas instruções 
          paralelamente em estágios diferentes. </p>
        </Col>
      </Row>
      <Row>
        <Col>
        <p>Processo – É em essência um programa em execução, ou seja, um conjunto de 
          informações para que o sistema operacional implemente a ocorrência de programas 
          no processador. Gerenciar processos é uma das principais funções de um sistema 
          operacional, possibilitando aos programas alocar recursos, compartilhando dados, 
          trocar informações e sincronizar suas execuções. </p>
        </Col>
      </Row>
      <Row>
        <Col>
        <p>Thread – É a forma do processo se dividir em mais tarefas. </p>
        </Col>
      </Row>
      <Row>
        <Col>
        <p>Sistema Operacional – No contexto desse jogo, é o responsável por gerenciar os 
          processos dentro do processador, fazendo o papel de intermediário entre os 
          programas (software) e os componentes físicos do computador (hardware). Porém 
          suas funções vão muito além disso, desde a interface ao usuário até controle do hardware. </p>
        </Col>
      </Row>
      <Row>
        <Col>
        <p>Barramentos - É um conjunto de linhas de comunicação que permitem a interligação 
          entre dispositivos.</p>
        </Col>
      </Row>
    </>
  )
}