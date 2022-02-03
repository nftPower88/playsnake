import React from 'react';
import { GameConfig, defaultGameConfig } from 'types';
import StyledStatus, { StyledShareButton } from './style';

interface StatusProps extends GameConfig {
  stopped: boolean;
}

const Status = ({ score, bestScore, level, stopped }: StatusProps) => {
  const sharable = typeof window.navigator.share === 'function' && stopped;
  const handleShare = () => {
    sharable &&
      window.navigator.share({
        title: 'Jogo da Cobrinha',
        text: `Sua pontuação nível ${level} ${score} no jogo!`,
        url: window.location.href,
      });
  };

  return (
    <StyledStatus>
      <p>{score}</p>
      <StyledShareButton onClick={handleShare} $stopped={sharable}>
        Share!
      </StyledShareButton>
      <p>{`${level} ${bestScore}`}</p>
    </StyledStatus>
  );
};

Status.defaultProps = {
  stopped: false,
  ...defaultGameConfig,
} as StatusProps;
export default Status;
