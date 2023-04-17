import { useState } from 'react';


export default function App() {
    return <Board />;
}

function Board() {
    const [xIsNext, setXIsNext] = useState(true);
    const [squares, setSquares] = useState(Array(9).fill(null));

    function handleClick(i) {
        if (squares[i])
            return;

        const nextSquare = squares.slice();
        xIsNext ? nextSquare[i] = "X" : nextSquare[i] = "O";

        setSquares(nextSquare);
        setXIsNext(!xIsNext);
    }

    function reset() {
        setSquares(Array(9).fill(null));
        setXIsNext(true);
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

                <Reset reset={reset} />
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

function Reset({ reset }) {
    return (
        <button
            className='reset'
            onClick={reset}
        >Reset Game</button>
    );
}
