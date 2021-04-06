import React from 'react';

function GameView() {
    return (
        <div className="GameView">
            <h2>Welcome to the game, {process.env.TESTPLAYER ? process.env.TESTPLAYER : 'player!'}</h2>
            <p>You set off on an adventure...</p>
        </div>
    );
}

export default GameView;
