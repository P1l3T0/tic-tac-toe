import { useState } from 'react';


export default function App() {
    return (
        <>
            <Board />
        </>
    );
}

function Board() {
    const [xIsNext, setXIsNext] = useState(true);
    const [squares, setSquares] = useState(Array(9).fill(null));

    function handleClick(i) {
        if (squares[i]) {
            console.log(`square ${squares[i]} already has a value!`);
            return;
        }

        const nextSquare = squares.slice();
        if (xIsNext) {
            nextSquare[i] = "X";
        }
        else {
            nextSquare[i] = "O";
        }
        setSquares(nextSquare);
        setXIsNext(!xIsNext);
    }

    return (
        <>
            <div className="board">
                <div className="board-row">
                    <Square value={squares[0]} onSquareClick={() => handleClick(0)} />
                    <Square value={squares[1]} onSquareClick={() => handleClick(1)} />
                    <Square value={squares[2]} onSquareClick={() => handleClick(2)} />
                </div>
                <div className="board-row">
                    <Square value={squares[3]} onSquareClick={() => handleClick(3)} />
                    <Square value={squares[4]} onSquareClick={() => handleClick(4)} />
                    <Square value={squares[5]} onSquareClick={() => handleClick(5)} />
                </div>
                <div className="board-row">
                    <Square value={squares[6]} onSquareClick={() => handleClick(6)} />
                    <Square value={squares[7]} onSquareClick={() => handleClick(7)} />
                    <Square value={squares[8]} onSquareClick={() => handleClick(8)} />
                </div>
            </div>
        </>
    );
}

function Square({ value, onSquareClick }) {
    return (
        <button
            className='square'
            onClick={onSquareClick}
        >{value}</button>
    );
}
