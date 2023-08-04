import { extendTheme } from 'native-base';

export const THEME = extendTheme({
  colors: {
    blue: {
      500: '#364D9D',
      300: '#647AC7',
    },
    gray: {
      700: '#121214',
      600: '#202024',
      500: '#29292E',
      400: '#323238',
      300: '#7C7C8A',
      200: '#C4C4CC',
      100: '#EDECEE'
    },
    white: '#FFFFFF',
    red: {
      100: '#EE7979'
    }
  },
  fonts: {
    heading: 'Karla_700Bold',
    body: 'Karla_400Regular',
  },
  fontSizes: {
    xs: 12,
    sm: 14,
    md: 16,
    lg: 18,
    xl: 20,
  },
  sizes: {
    14: 56,
    33: 148
  }
})