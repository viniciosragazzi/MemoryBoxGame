import { useState } from "react"
import Game from "./components/Game"
import Header from "./components/Header"

function App() {
  
  const [level, setLevel] = useState(1)
  const [score, setScore] = useState(0)
  const [stage, setStage] = useState(0)
  const [gameOver, setGameOver] = useState(false)
  const [play, setPlay] = useState(false)
  const [playerTurn, setPlayerTurn] = useState(false)

  return (
    <div className="App">
    {!gameOver ?  <Header play={play} setPlay={setPlay}  score={score} setScore={setScore}/> : null}
     <Game  play={play} playerTurn={playerTurn} setPlay={setPlay} setPlayerTurn={setPlayerTurn}  score={score} setScore={setScore} gameOver={gameOver} setGameOver={setGameOver}/>
    </div>
  )
}

export default App
