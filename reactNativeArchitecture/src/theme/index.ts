import palette from './colors';
import typography from './fonts';

const theme = {
  colors: {
    white: palette.WHITE,
    black: palette.BLACK,
    lightText: palette.WHITE,
    darkText: palette.BLACK,

    primary: palette.BLUE,
    secondary: palette.ORANGE,

    headerBackground: palette.ORANGE,

    ...palette,
  },
  ...typography,
};

export type Theme = typeof theme;
export default theme;
