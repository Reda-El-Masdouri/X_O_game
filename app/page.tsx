"use client";
import Image from 'next/image';
import { useState } from 'react';
import Cell from './components/Cell';


export default function Home() {
  const [cells, setCells] = useState(["", "", "", "", "", "", "", "", ""]);
  const [go, setGo] = useState("O");
  return (
    <div className='container'>
      <div className='gameboard'>
        {
          cells.map(
            (cell, index) => <Cell id={index} go={go} setGo={setGo} key={index} cells={cells} setCells={setCells}/>
          )
        }
      </div>
    </div>
  )
}
