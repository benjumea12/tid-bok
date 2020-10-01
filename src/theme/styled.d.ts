// import original module declarations
import 'styled-components'

// and extend them!
declare module 'styled-components' {
  export interface DefaultTheme {
    // Colors
    colors: {
      primary: string
      primaryLight: string
      secondary: string
      secondaryLight: string
      tertiary: string
      black: string
      white: string
      default: string
    }
    // Fonts
    fonts: {
      primary: string
      secondary: string
    }
    // Divices sizes
    sizes: {
      xl: string
      lg: string
      md: string
      sm: string
    }
    // Transition 
    transition: string
    // Animations
    animaShowElement: Array
    animaHideElement: Array
  }
}