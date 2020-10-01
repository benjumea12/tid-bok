import { DefaultTheme, keyframes } from 'styled-components'

const animaShowElement = keyframes`
  0% {
    transform: scale(0.9);
    opacity: 0;
  }

  100% {
    transform: scale(1);
    opacity: 1;
  }
`;

const animaHideElement = keyframes`
  0% {
    transform: scale(1);
    opacity: 1;
  }

  100% {
    transform: scale(0.9);
    opacity: 0;
  }
`;

// Deafult my theme
const myTheme: DefaultTheme = {
  // Colors
  colors: {
    primary: '#0E4B64',
    primaryLight: '#EBF1F5',
    secondary: '#F1A326',
    secondaryLight: '#FBF0CE',
    tertiary: '#FF5F5F',
    black: '#000000',
    white: '#ffffff',
    default: '#7d7d7d'
  },
  // Fonts
  fonts: {
    primary: 'Poppins',
    secondary: 'Roboto',
  },
  // Default sizes for devices
  sizes: {
    xl: '1200px',
    lg: '992px', 
    md: '768px',
    sm: '576px'
  },
  // Transition 
  transition: 'cubic-bezier(0.65, 0.05, 0.36, 1)',
  // Animations 
  animaShowElement,
  animaHideElement
}

// Type colors
export type TColors = 'primary' | 'secondary' | 'tertiary' | 'primaryLight' | 'secondaryLight' | 'white' | 'black'

//Function for get theme color
const color = (bg?: TColors): string => {
  switch (bg) {
    case 'primary':
      return myTheme.colors.primary
    case 'primaryLight':
      return myTheme.colors.primaryLight
    case 'secondary':
      return myTheme.colors.secondary
    case 'secondaryLight':
      return myTheme.colors.secondaryLight
    case 'tertiary':
      return myTheme.colors.tertiary
    case 'black':
      return myTheme.colors.black
    case 'white':
      return myTheme.colors.white
    default:
      return myTheme.colors.default
  }
}

// Function media query
export const media = myTheme.sizes
/* export const media = (Object.keys(myTheme.sizes) as Array<keyof typeof myTheme.sizes>).reduce(
  (acc, key) => {
    acc[key] = (style: String) =>
      `@media (min-width: ${myTheme.sizes[key]}) { ${style} }`;
    return acc;
  },
  {} as { [index: string]: Function }
); */


export { myTheme, color }