import React, { useEffect, useState } from "react";
import GameOverScreen from "./GameOverScreen";
import { List } from "./List";

export default function Game({
  play,
  setPlay,
  playerTurn,
  setPlayerTurn,
  gameOver,
  setGameOver,
  score,
  setScore,
}) {
  const itens = List(12);
  const boxs = document.querySelectorAll("div.box");
  const [arrCompStt, setArrCompStt] = useState([]);
  const ArrSeqComp = [];
  const arrComp = [];
  const ArrPlayer = [];
  console.log(playerTurn, play)
  const clearBoxs = () => {
    boxs.forEach((bx) => {
      bx.classList.remove("boxComp");
      bx.classList.remove("boxSucess");
      bx.classList.remove("boxErr");
    });
  };

  const newSequenceComp = () => {
    clearBoxs()
    function shuffle(o) {
      for (
        var j, x, i = o.length;
        i;
        j = Math.floor(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x
      );
      return o;
    }
    let cInt = 0;

    //Gerador do arr
    boxs.forEach((bx, i) => {
      ArrSeqComp.push(i);
    });

    //Embaralha o array
    let arrRandom = shuffle(ArrSeqComp);

    //Gera um interval
    const interval = setInterval(() => {
      if (cInt < 5) {
        cInt++;
        boxs[arrRandom[cInt - 1]].classList.add("boxComp");
        arrComp.push(arrRandom[cInt - 1]);
      } else {
        setTimeout(() => {
          setArrCompStt(arrComp);
          clearBoxs();
          setPlayerTurn(true);
          clearInterval(interval);
        }, 500);
      }
    }, 400);
  };

  const playerPlay = (e, i) => {
    ArrPlayer.push(i);

    const includes = arrCompStt.includes(i);

    if (includes) {
      e.target.classList.add("boxSucess");
    } else {
      e.target.classList.add("boxErr");
      setPlayerTurn(false);
      setTimeout(() => {
        gameOverFun();
      }, 500);
    }

    if (ArrPlayer.length === 5) {
      e.target.classList.add("boxSucess");

      setTimeout(() => {
        setScore(score + 500);
        clearBoxs();
        newSequenceComp();
      }, 1000);
    }
  };

  const gameOverFun = () => {
    clearBoxs();
    setPlayerTurn(false);
    setScore(0);
    setGameOver(true)
  };
  useEffect(() => {
    play
      ?  !playerTurn
        ? newSequenceComp()
        : setPlayerTurn(false)
      : setPlayerTurn(false);
  }, [play]);

  return (
    <div className="appGame w-full bg-blue-100 flex justify-center items-center">
      {gameOver ? <GameOverScreen setPlay={setPlay} gameOver={gameOver} setGameOver={setGameOver}/> : (
        <div className="gameBox p-4 grid grid-cols-4 justify-items-center content-center gap-12">
          {itens.map((index) => (
            <div
              key={index}
              id={`bx-${index}`}
              className={`box cursor-pointer border-[1px] border-blue-300  transition-all`}
              onClick={(e) => (playerTurn ? playerPlay(e, index) : null)}
            ></div>
          ))}
        </div>
      )}
    </div>
  );
}
