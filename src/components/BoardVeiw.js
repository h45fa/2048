import React, { useState } from 'react';
import Tile from './Tile';
import Cell from './Cell';
import {Board} from '../helper'
import useEvent from './../hooks/useEvent';
import GameOver from './GameOver';

const BoardVeiw = () => {
    const [board, setBoard] = useState(new Board());

    const handleKeyDown = (event) => {
      if(board.hasWon()){
        return;
      }
      if(event.keyCode>=37 && event.keyCode<=40) {
        let direction = event.keyCode - 37;
        let boardClone = Object.assign(Object.create(Object.getPrototypeOf(board)), board);
        let newBoard = boardClone.move(direction);
        setBoard(newBoard);
      }
    };

    useEvent('keydown',handleKeyDown);

    const cells = board.cells.map((row, rowIndex) => {
      return (
        <div key={rowIndex}>
          {row.map((col, colIndex) => {
            return (
              // <div className='cell'><Cell key={rowIndex * board.size + colIndex}/></div>
              <div className='cell' key={rowIndex * board.size + colIndex}></div>
            )
          })}
        </div>
      );
    });

    const tiles = board.tiles.filter((tile)=>tile.value !== 0).map((tile,index)=>{
      return <Tile tile={tile} key={index}/>;
    });

    const resetGame = () => {
      setBoard(new Board());
    };
  return (
  <div>
    <div className='details-box'>
      <div className='resetButton' onClick={resetGame}>NEW</div>
      <div className='score-box'>
        <div className='score-header'>SCORE</div>
        <div>{board.score}</div>
      </div>
    </div>
    <div className='board'>
      {cells}
      {tiles}
      <GameOver onRestart={resetGame} board={board}/>
    </div>
  </div>);
}

export default BoardVeiw;