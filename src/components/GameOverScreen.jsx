import React from 'react'

export default function GameOverScreen({gameOver, setGameOver, setPlay}) {
  const fnc = () => {
    setGameOver(false)
    setPlay(false)
  }
  return (
   <div className='grid gap-6'>
    <h1 className=' text-4xl'>GameOver</h1>
     <button className=' px-5 py-2 bg-blue-700 text-white rounded-full ' onClick={(e)=> fnc()}>Reiniciar</button>
     </div>

  )
}
