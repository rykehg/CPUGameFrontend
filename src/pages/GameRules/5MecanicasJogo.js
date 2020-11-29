import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import './styles.css';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import GameExemple1 from '../../assets/GameExemple1.png'
import Mecanica1 from '../../assets/Mecanica1.png'
import Mecanica2Obj22 from '../../assets/Mecanica2Obj22.png'
import Mecanica3OS27 from '../../assets/Mecanica3OS27.png'
import Mecanica3 from '../../assets/Mecanica3.png'
import Mecanica4NaoPerm from '../../assets/Mecanica4NaoPerm.png'
import Mecanica5Travado from '../../assets/Mecanica5Travado.png'
import Mecanica6SO15Imune from '../../assets/Mecanica6SO15Imune.png'
import Mecanica6SO19Trave from '../../assets/Mecanica6SO19Trave.png'
import Mecanica6SO07Suba from '../../assets/Mecanica6SO07Suba.png'
import Mecanica7Decod from '../../assets/Mecanica7Decod.png'
import Mecanica7DecodCard from '../../assets/Mecanica7DecodCard.png'
import Mecanica7VarCard from '../../assets/Mecanica7VarCard.png'
import Mecanica8 from '../../assets/Mecanica8.png'

export default function MecanicasJogo() {

  return (
    <>
      <Row>
        <Col>
          <h3>Mecânicas do jogo</h3>
        </Col>
      </Row>
      <Row>
        <Col>
          <h6>INÍCIO</h6>
        </Col>
      </Row>
      <Row>
        <Col>
          <p>1. O jogo se dá em turnos. (TEORIA: assim como o clock define o tempo dos 
            processos os jogadores executarão suas instruções dentro do processador em turnos)</p>
          <p>2. Cada jogador assumirá o papel de um processo/ thread ou parte de um programa 
            a ser executada pelo processador.</p>
        </Col>
        <Col>
          <img src={Mecanica1} alt="Mecanica1" className="full" />
        </Col>
      </Row>
      <Row>
        <Col>
          <h6>PREPARAÇÃO</h6>
        </Col>
      </Row>
      <Row>
        <Col>
          <img src={Mecanica2Obj22} alt="Mecanica2Obj22" className="full" />
          <img src={Mecanica3OS27} alt="Mecanica3OS27" className="full" />
        </Col>
        <Col>
          <p>3. A ordem dos jogadores ou processos será sorteada no início.</p>
          <p>4. No início os jogadores sorteiam três cartas de objetivo (que podem ser lidas)  
          e escolhem uma para executar, devolvendo as demais cartas a pilha. Este é o objetivo  
          a ser cumprido até o fim do jogo. O processo (programa/ thread), é parte de uma 
          instrução que deverá ser cumprida e, como pontuação extra, decodificada.</p>
          <p>5. E por fim, compram também uma carta de SO.</p>
        </Col>
      </Row>
      <Row>
        <Col>
          <h6>O JOGO</h6>
        </Col>
      </Row>
      <Row>
        <Col>
          <p>6. Todos os processos terão início na memória principal e deverão tentar 
            entrar no processador.</p>
          <p>7. Cada jogador terá um movimento por clock (rodada) para executar a instrução 
            corretamente do seu programa.</p>
          <p>8. Cada jogador terá 30s para mexer seu processo (círculo) para o devido local 
            do processador para ser executado, obedecendo o número de núcleos de processadores.</p>
          <p>9. Caso a instrução esteja errada ou o tempo seja esgotado o processo do grupo 
            irá para o fim da fila e não executa a ação (o jogador poderá optar a não 
            realizar sua jogada para tirar dúvidas, nesse caso seu processo também irá para 
            o fim da fila).</p>
          <p>10. Caso o número de jogadores ativos em um local no tabuleiro exceda o número 
            de núcleos do processador estes deverão aguardar na fila até seu processo “ter 
            espaço” para ser executado e poderão comprar uma carta aleatória de Sistema 
            Operacional (SO). Essa regra só poderá ser quebrada caso o processo tenha sido 
            parado por uma carta de SO (▲) (figura ao lado) ou caso um dos processos 
            ocupantes tenha errado sua jogada. (TEORIA: O gerenciamento dos processos é 
            feito pelo sistema operacional, quando um processo é parado (▲) ou busca dados 
            (erra ▲) a sua tarefa é salva no CI, cache ou até mesmo MP para que ele possa 
            continuar de onde parou no próximo clock (ou quando tiver prioridade). </p>
          <p>11. E segue o turno do próximo jogador.</p>
          <p>12. Entre um clock e outro os jogadores poderão usar as cartas de SO para 
            travar, destravar ou movimentar a fila de processos. As cartas serão jogadas 
            usando a ordem da fila. O jogador pode optar por não realizar nenhuma jogada 
            podendo comprar um card de SO.</p>
          <p>13. Os jogadores que receberem objetivos com operações lógicas só saberão a 
            operação a ser executada no “componente” Decodificador de instruções ao comprar 
            aleatoriamente uma carta de instrução e outra de variável. </p>
          <p>14. Ao sair do processador os processos devem passar pela UC e acessar nessa 
            mesma jogada o RDM</p>
        </Col>
        <Col>
          <img src={Mecanica3} alt="Mecanica3" className="full" />
          <br /><br />
          <img src={Mecanica4NaoPerm} alt="Mecanica4NaoPerm" className="full" />
          <br /><br />
          <img src={Mecanica5Travado} alt="Mecanica5Travado" className="full" />
          <br /><br />
          <img src={Mecanica6SO15Imune} alt="Mecanica6SO15Imune" className="full" />
          <img src={Mecanica6SO19Trave} alt="Mecanica6SO19Trave" className="full" />
          <img src={Mecanica6SO07Suba} alt="Mecanica6SO07Suba" className="full" />
          <br /><br />
          <img src={Mecanica7Decod} alt="Mecanica7Decod" className="full" />
          <img src={Mecanica7DecodCard} alt="Mecanica7DecodCard" className="full" />
          <img src={Mecanica7VarCard} alt="Mecanica7VarCard" className="full" />
        </Col>
      </Row>
      <Row>
        <Col>
          <h6>Observações</h6>
        </Col>
      </Row>
      <Row>
        <Col>
          <img src={Mecanica8} alt="GameExemple1" className="full" />
        </Col>
        <Col>
          <p>Caso TODOS os jogadores estejam com processo interrompidos é contado um clock 
            e eles são automaticamente destravados podendo todos jogar no próximo clock (rodada).</p>
          <p>Cartas de eventos serão sorteadas a cada três rodadas e podem mudar o 
            andamento do jogo, adicionando ou removendo um processador (figura ao lado). </p>
          <p>O fim do objetivo será completo quando a finalização do processo é dada no 
            dispositivo de saída correto.</p>
          <p>Ao cumprir um objetivo outro poderá ser comprado até a finalização do jogo 
            (dependendo do andamento). </p>
          <p>A ordem de todos os movimentos obedece a ordem do jogador na posição na fila, 
            mesmo para jogar card de SO. </p>
          <p>Cards de SO podem ser jogados independente se o processo esta travado. </p>
          <p>Os jogadores têm acesso aos materiais e consulta que precisarem (inclusive 
            professor/monitor).  Porém ao consultarem monitores ou professor este irá para 
            o fim da fila de processos (TEORIA: o processo estaria em estado de pronto, 
            porém na espera de uma informação requisitada). </p>
          <p>No tabuleiro será considerando o registrador de instrução (RI) o decodificador 
            de instrução e a unidade de controle (UC) como uma só casa, porém toda a vez 
            que um dado for sair do processador ou acessar diretamente a UAL ele deve passar 
            pela UC, ou seja, um dado ou processo que segue do decodificador de instrução 
            para a memória principal deverá passar um turno na UC e no RDM antes de prosseguir. </p>
          <p>Quanto aos objetivos foram adicionados contexto para dar dinâmica ao jogo, 
            apesar de parecerem instruções simples elas iriam requerer muito mais passagens 
            de códigos em linguagem de máquina / threads dentro do processador e mais de um 
            processo sendo executado (Ex.: Calcular uma operação e imprimir o resultado em 
            tela, seriam ao menos duas passagens pelo processador. Uma para efetuar o cálculo 
            e outra para imprimir o resultado, no mínimo). </p>
        </Col>
      </Row>
    </>
  )
}