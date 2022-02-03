/* eslint-disable @typescript-eslint/no-unused-vars */
/// <reference types="react-scripts" />
import 'styled-components';
import StyledApp from './src/App';

declare module '*.mp3';

declare module "react/jsx-runtime" {
  export default any;
}

declare module 'styled-components' {
  export interface DefaultTheme {
    primaryColor: string;
    secondaryColor: string;
    accentColor: string;
  }
}
