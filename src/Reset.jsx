export function Reset({ onResetGame }) {
    return (
        <button
            className='reset'
            onClick={onResetGame}
        >Reset</button>
    );
}
