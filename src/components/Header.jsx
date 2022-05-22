import React from "react";
import {BsPlayCircle} from 'react-icons/bs'
import {HiOutlineViewGridAdd} from 'react-icons/hi'
import { AiOutlineReload } from 'react-icons/ai'
export default function Header({play, setPlay, score, setScore}) {
  return (
    <header className="flex w-full h-16 text-sm bg-blue-500 justify-between px-5 md:px-10 items-center text-white">
    {play ? (  <AiOutlineReload className=" text-2xl cursor-pointer hover:animate-pulse" onClick={()=> setPlay(false)}/>) : (  <BsPlayCircle className=" text-2xl cursor-pointer hover:animate-pulse" onClick={()=> setPlay(true)}/>)}
      <h1 className=" text-lg md:text-2xl flex items-end  gap-2 font-semibold tracking-widest">MemoryBox <HiOutlineViewGridAdd className="text-lg md:text-3xl"/></h1>
      <div className="timerScore flex gap-4 text-center">
        <div className="score grid border p-1 rounded-md">
          <p className="font-bold">Score</p>
          <div className="scoreBx">
            <span>{score}</span>
          </div>
        </div>
      </div>
    </header>
  );
}
