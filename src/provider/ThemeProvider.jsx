import React from 'react'
import { ThemeProvider as SCThemeProvider } from 'styled-components'

const widthTreshold = '1170px'

const theme = {
  mainColor: '#29154e',
  mainTextColor: '#ffffff',
  secondaryColor: '#7a0056',
  tertiaryColor: '#e84c84',
  gradiantColors: ['#7a0056', '#b3286e', '#c53476', '#d43e7c', '#e84c84'].join(', '),
  isPhone: `@media only screen and (max-width: ${widthTreshold})`,
  isLaptop: `@media only screen and (min-width: ${widthTreshold})`,
  sectionDefaultPaddingTop: '112px',
}

export function ThemeProvider({
  children,
}) {
  return (
    <SCThemeProvider theme={theme}>
      {children}
    </SCThemeProvider>
  )
}

export default ThemeProvider
