import React from 'react'
import { ThemeProvider as SCThemeProvider } from 'styled-components'

const widthTreshold = '1170px'

const theme = {
  mainColor: '#29154e',
  mainTextColor: '#ffffff',
  secondaryColor: '#7a0056',
  gradiantColors: ['#7a0056', '#961356', '#af2854', '#c43f51', '#d7574e'].join(', '),
  isPhone: `@media only screen and (max-width: ${widthTreshold})`,
  isLaptop: `@media only screen and (min-width: ${widthTreshold})`,
}

export const ThemeProvider = ({
  children,
}) => (
  <SCThemeProvider theme={theme}>
    {children}
  </SCThemeProvider>
)

export default ThemeProvider
