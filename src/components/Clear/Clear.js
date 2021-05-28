import React from 'react';
import { Button } from '@smooth-ui/core-sc';

const StartNewGame = ({startNewGame, isVisible}) => (
  <div>
    {isVisible &&
    <Button variant="blue" width={1} mt={10} minHeight={40} fontSize={22} type="button" onClick={startNewGame}>
    Start New Game
  </Button>
    }
    
  </div>
);

export default StartNewGame;