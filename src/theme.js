import { createTheme } from '@mantine/core';

export const theme = createTheme({
  primaryColor:  'teal',
  colors: {
    primary: [ '#0F0E37' ],
    secondary: [ '#494879' ],
    tertiary: [ '#C5C4E8' ],
    info: [ '#38CFEB' ],
    success: [ '#36C985' ],
    accent: [ '#B8A4E1' ],
    danger: [ '#FF7191' ],
    warning: [ '#FEBF10' ],
  },
  fontFamily: "'Plus Jakarta Sans', sans-serif",
  components: {
    InputWrapper: {
      styles: {
        root: {
          textAlign: 'left',
        }
      }
    }
  }
});
