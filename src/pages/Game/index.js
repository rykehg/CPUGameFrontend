import React, { useState, useRef, useEffect } from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import creatGame from './gameState'
import setupGame from './setupGame'
import { FiPlusCircle, FiMinusCircle, FiLock } from 'react-icons/fi'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import Toast from 'react-bootstrap/Toast'

import './styles.css'
import board from './assets/ProcessadorGameTabuleiroV2.png'

function Home() {
  const canvas = useRef()
  let ctx = null

  let objDrag = []
  let objStatic = []
  let objSelected = null
  let objCollided = null
  let isDown = false
  let dragTarget = null
  let startX = null
  let startY = null

  const clockPointer = [
    {id: 0, xStart: 53, yStart: 466, xEnd: 53, yEnd: 443, size: 3, color: "Lime"},
    {id: 1, xStart: 53, yStart: 466, xEnd: 63, yEnd: 447, size: 3, color: "Lime"},
    {id: 2, xStart: 53, yStart: 466, xEnd: 71, yEnd: 452, size: 3, color: "Red"},
    {id: 3, xStart: 53, yStart: 466, xEnd: 73, yEnd: 464, size: 3, color: "Lime"},
    {id: 4, xStart: 53, yStart: 466, xEnd: 71, yEnd: 475, size: 3, color: "Lime"},
    {id: 5, xStart: 53, yStart: 466, xEnd: 65, yEnd: 483, size: 3, color: "Red"},
    {id: 6, xStart: 53, yStart: 466, xEnd: 53, yEnd: 487, size: 3, color: "Lime"},
    {id: 7, xStart: 53, yStart: 466, xEnd: 42, yEnd: 484, size: 3, color: "Lime"},
    {id: 8, xStart: 53, yStart: 466, xEnd: 36, yEnd: 476, size: 3, color: "Red"},
    {id: 9, xStart: 53, yStart: 466, xEnd: 32, yEnd: 465, size: 3, color: "Lime"},
    {id: 10, xStart: 54, yStart: 466, xEnd: 35, yEnd: 453, size: 3, color: "Lime"},
    {id: 11, xStart: 54, yStart: 466, xEnd: 42, yEnd: 447, size: 3, color: "Red"}
  ]
  let clockHitBox = {x: 15, y: 425, sizeX: 77, sizeY: 77, isDown: false, position: 0}

  const processorNumber = [
    {number: "1"}, {number: "2"}, {number: "3"}
  ]
  let processorHitBox = {x: 150, y: 459, sizeX: 35, sizeY: 25, isDown: false, position: 1}

  //let game = creatGame()
  let game = setupGame()
  objDrag = game.state.piecesInPlay
  objStatic = game.state.tiles
  // initialize the canvas context
  useEffect(() => {
    // dynamically assign the width and height to canvas
    const canvasEle = canvas.current
    canvasEle.width = canvasEle.clientWidth
    canvasEle.height = canvasEle.clientHeight

    // get context of the canvas
    ctx = canvasEle.getContext("2d")
  }, [])

  useEffect(() => {
    draw()
  }, [])

  // draw rectangle
  const draw = () => {
    ctx.clearRect(0, 0, canvas.current.clientWidth, canvas.current.clientHeight)
    const img = document.getElementById("boardImage")
    ctx.drawImage(img, 0, 0, 960, 540)
    //Clock Line
    //drawRectangle(15, 425, 77, 77, 2, "blue", "blue") //hitbox
    const line = clockPointer[clockHitBox.position]
    drawLine(line.xStart, line.yStart, line.xEnd, line.yEnd, line.size, line.color)
    //Number of processors 1x, 2x, 3x
    //drawRectangle(150, 459, 35, 25, 2, "blue", "blue") //hitbox
    const text = processorNumber[processorHitBox.position]
    drawText(text.number, 153, 481, "Lime")
    //Highlight objCollided
    if (objCollided) {
      const os = objCollided
      drawRectangle(os.posX, os.posY, os.sizeX, os.sizeY, os.color, os.color)//posX, posY, width, height, lineSize, lineColor, fillColor
    }
    // redraw each object in the objDrag[] array
    for (let i = 0; i < objDrag.length; i++) {
      const o = objDrag[i]
      if (o === objSelected) {
        if (o.isLocked === true){
          drawTriangle(o.x, o.y, o.size, o.size / 7, 'yellow', o.color)
        } else {
          drawCircle(o.x, o.y, o.size, o.size / 7, 'yellow', o.color)
        }
      }
      else {
        if (o.isLocked === true){
          drawTriangle(o.x, o.y, o.size, 0, o.color, o.color)
        } else {
          drawCircle(o.x, o.y, o.size, 0, o.color, o.color)
        }
      }
    }
    //objDrag.map(info => drawTriangle(info))
  }

  function drawRectangle(posX, posY, width, height, lineSize, lineColor, fillColor) {
    ctx.beginPath()
    ctx.lineWidth = lineSize
    ctx.strokeStyle = lineColor
    ctx.rect(posX, posY, width, height) //.rect(x, y, width, height)
    ctx.closePath()
    ctx.fillStyle = fillColor
    //ctx.fill()
    ctx.stroke()
  }

  function drawCircle(x, y, size, lineSize, lineColor, fillColor) {
    ctx.beginPath()
    ctx.lineWidth = lineSize
    ctx.strokeStyle = lineColor
    ctx.fillStyle = fillColor
    ctx.arc(x + (size / 2), y + (size / 2), size / 2, 0, 2 * Math.PI) // .arc(x, y, radius, startAngle, endAngle, anticlockwise)
    ctx.closePath()
    ctx.stroke()
    ctx.fill()
  }

  function drawTriangle(x, y, size, lineSize, lineColor, fillColor) {
    const height = size * Math.cos(Math.PI / 6)
    ctx.beginPath()
    ctx.moveTo(x, y + size)
    ctx.lineTo(x + size, y + size)
    ctx.lineTo(x + (size / 2), y + size - height)
    ctx.closePath()
    ctx.lineWidth = lineSize
    ctx.strokeStyle = lineColor
    ctx.fillStyle = fillColor
    ctx.fill()
    ctx.stroke()
  }

  function drawLine(startX, startY, endX, endY, lineSize, lineColor) {
    ctx.beginPath()
    ctx.lineWidth = lineSize
    ctx.strokeStyle = lineColor
    ctx.moveTo(startX, startY)
    ctx.lineTo(endX, endY)
    ctx.stroke()
  }

  function drawText(text, x, y, lineColor) {
    ctx.font = "25px Arial"
    ctx.fillStyle = lineColor
    ctx.fillText(text, x, y)
  }

  function checkForCollision(selectedPiece, tiles) {
    if (selectedPiece && tiles) {
      for (let i = 0; i < tiles.length; i++) {
        const tile = tiles[i]
        //console.log(`Checking ${selectedPiece.playerId}-${selectedPiece.pieceId} and ${tile.tileId}`)
        if (selectedPiece.x > tile.posX && selectedPiece.x < tile.posX + tile.sizeX && selectedPiece.y > tile.posY && selectedPiece.y < tile.posY + tile.sizeY) {
          //console.log(`COLLISION between ${selectedPiece.playerId}-${selectedPiece.pieceId} and ${tile.tileId}`)
          return tile
          //Fazer animação
        }
      }
    }
  }
  // identify the click event in the objDrag
  const hitBox = (x, y) => {
    let isTarget = null
    for (let i = 0; i < objDrag.length; i++) {
      const o = objDrag[i]
      if (x >= o.x && x <= o.x + o.size && y >= o.y && y <= o.y + o.size) {
        dragTarget = o
        isTarget = true
        objSelected = o
        break
      }
    }
    return isTarget
  }

  function hitBoxMenus (x, y, o) {
    if (x >= o.x && x <= o.x + o.sizeX && y >= o.y && y <= o.y + o.sizeY) {
      o.isDown = true
    }
    return o
  }

  function menusCountUp(o, v) {
    if (o.isDown === true) {
      if (o.position < v.length-1) {
        o.position++
      }
      else {
        o.position = 0
      }
      draw()
    }
    o.isDown = false
    return o
  }

  const handleMouseDown = e => {
    startX = parseInt(e.nativeEvent.offsetX - canvas.current.clientLeft)
    startY = parseInt(e.nativeEvent.offsetY - canvas.current.clientTop)
    objSelected = null
    objCollided = null
    isDown = hitBox(startX, startY)
    clockHitBox = hitBoxMenus(startX, startY, clockHitBox)
    processorHitBox = hitBoxMenus(startX, startY, processorHitBox)
  }
  const handleMouseMove = e => {
    if (!isDown) return
    const mouseX = parseInt(e.nativeEvent.offsetX - canvas.current.clientLeft)
    const mouseY = parseInt(e.nativeEvent.offsetY - canvas.current.clientTop)
    const dx = mouseX - startX
    const dy = mouseY - startY
    startX = mouseX
    startY = mouseY
    dragTarget.x += dx
    dragTarget.y += dy
    objCollided = checkForCollision(objSelected, objStatic)
    draw()
  }
  //Update game state based on new piece position
  function updateGameState() {
    game.setPieceNewStatus({
      playerId: objSelected.playerId, pieceId: objSelected.pieceId,
      posX: objSelected.x, poxY: objSelected.y, currentTile: objCollided ? objCollided.tileId : null
    })
  }
  const handleMouseUp = e => {
    if (isDown) {
      objCollided = checkForCollision(objSelected, objStatic)
      //correção feita de forma errada para acertar a posição das peças no game.state
      if (objCollided) {
        for (let i = 0; i < objDrag.length; i++) {
          objDrag[i].isDragging = false
        }
      } else {
        objCollided = null
      }
      updateGameState()
      dragTarget = null
      isDown = false
      draw()
    }
    clockHitBox = menusCountUp(clockHitBox, clockPointer)
    processorHitBox = menusCountUp(processorHitBox, processorNumber)
    
  }
  const handleMouseOut = e => {
    handleMouseUp(e)
  }

  //Button to add player pice
  function addPiece() {
    if (objSelected) {
      //Add piece 20px from original
      game.addPlayerPiece({ playerId: objSelected.playerId, posX: objSelected.x + 20, posY: objSelected.y })
      objDrag = game.state.piecesInPlay
      objSelected = null
      draw()
    }
  }
  //Button to remove player pice
  function removePiece() {
    if (objSelected && objSelected.pieceId > 6) {
      game.removePlayerPiece({ playerId: objSelected.playerId, pieceId: objSelected.pieceId })
      objDrag = game.state.piecesInPlay
      objSelected = null
      objCollided = null
      draw()
    }
  }
  
  function lockPlayer() {
    const playerId = objSelected.playerId
    game.lockPlayer({playerId: playerId})
    objDrag = game.state.piecesInPlay
    draw()
  }
  const [show, setShow] = useState(false);
  return (
    <>
{/*       <Row>
        <Col xs={6}>
          <Toast onClose={() => setShow(false)} show={show} delay={3000} autohide>
            <Toast.Header>
              <strong className="mr-auto">Bootstrap</strong>
              <small>11 mins ago</small>
            </Toast.Header>
            <Toast.Body>Woohoo, you're reading this text in a Toast!</Toast.Body>
          </Toast>
        </Col>
        <Col xs={6}>
          <Button onClick={() => setShow(true)}>Show Toast</Button>
        </Col>
      </Row> */}
      <Row>
        <Col md={11} className="Board">
          <img id='boardImage' src={board} alt='tabuleiro' style={{ display: 'none', width: '960px' }} />
          <canvas
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseOut={handleMouseOut}
            ref={canvas}></canvas>
        </Col>
        <Col md={1} className="Menu">
          <Button variant="outline-primary" block={true} onClick={lockPlayer}>
            <FiLock size={18} />
          </Button>
          <Button variant="outline-success" block={true} onClick={addPiece}>
            <FiPlusCircle size={18} />
          </Button>
          <Button variant="outline-danger" block={true} onClick={removePiece}>
            <FiMinusCircle size={18} />
          </Button>
        </Col>
      </Row>
{/*       <Row>
      <Form inline>
        <Form.Group>
          <Form.Label htmlFor="objective">Objective</Form.Label>
            <Form.Control
              type="number"
              value="number"
              className="mx-sm-3"
              id="playerObjective"
            />
            <Form.Text id="objectiveHelp" muted>
              Must be 8-20 characters long.
            </Form.Text>
          </Form.Group>
        </Form>
      </Row> */}
    </>
  );
}

export default Home