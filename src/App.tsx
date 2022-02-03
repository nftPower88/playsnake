import React, { useState } from 'react';
import Game from 'panels/Game';
import Speaker from 'components/Speaker';
import StyledApp from 'AppStyle';

const App = () => {
  const [mute, setMute] = useState(localStorage.getItem('MUTE') !== null);

  const handleMute = (mute: boolean) => {
    if (mute) {
      localStorage.setItem('MUTE', 'true');
    } else {
      localStorage.removeItem('MUTE');
    }
    setMute(mute);
  };

  return (
    <StyledApp>      
      <Speaker onClick={handleMute} mute={mute} />
      <Game mute={mute} />
    </StyledApp>
  );
};

export default App;
