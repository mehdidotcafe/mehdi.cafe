import 'styled-components'

type Color = `#${string}`
type MediaQuery = string

type ThemeColors = {
  backgroundColor: Color
  linkColor: Color
  textColor: Color
}

declare module 'styled-components' {
  export interface DefaultTheme {
    mainColor: Color
    secondaryColor: Color
    tertiaryColor: Color
    gradiantColors: Color[]

    isPhone: MediaQuery,
    isLaptop: MediaQuery,

    sectionDefaultPaddingTop: number,
    iconSize: number,

    font: {
      title: string,
      content: string,
      terciary: string,
    },

    light: ThemeColors,
    dark: ThemeColors,
  }
}
