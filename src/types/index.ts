export declare interface CompProps {
  children: React.ReactNode;
  rest?: any;
}

export declare interface SvgProps {
  width?: number;
  height?: number;
  fill?: string;
  viewBox?: string;
}

export declare interface TransientSvgProps {
  $size: SvgProps;
}

export const defaultSvgProps: SvgProps = {
  width: 40,
  height: 40,
  fill: 'rgba(0, 0, 0, 0.8)',
  viewBox: '0 0 512 512',
};

export const DefaultTheme = {
  primaryColor: 'rgba(0, 0, 0, 0.75)',
  secondaryColor: '#bdbdbd',
  accentColor: 'rgb(0, 0, 0)',
};

export enum GameLevel {
  Newbie = 'Newbie',
  Normal = 'Normal',
  Master = 'Master',
}

export declare interface GameConfig {
  level: GameLevel;
  score: number;
  bestScore: number;
}

export const defaultGameConfig: GameConfig = {
  level: GameLevel.Newbie,
  score: 0,
  bestScore: 0,
};

export enum GameTitle {
  Go = 'GO',
  GameOver = 'GAME OVER',
  BestScore = 'PONTUACAO',
}

export enum GameState {
  Initial,
  CountingDown,
  Playing,
  Pausing,
  End,
}

export const BoardCell = {
  column: 21,
  row: 15,
};

export enum KeyCode {
  Space = 32,
  Left = 37,
  Up = 38,
  Right = 39,
  Down = 40,
}

export const Direction = {
  left: { x: 0, y: -1 },
  right: { x: 0, y: 1 },
  up: { x: -1, y: 0 },
  down: { x: 1, y: 0 },
};
