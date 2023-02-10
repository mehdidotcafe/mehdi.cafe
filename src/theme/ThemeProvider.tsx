import { EB_Garamond, Oswald, Roboto } from '@next/font/google'
import { ReactNode, useEffect, useState } from 'react'
import { DefaultTheme, ThemeProvider as StyledComponentsThemeProvider } from 'styled-components'

const widthThreshold = 1170

export const ebGaramond = EB_Garamond({
  subsets: ['latin'],
  display: 'swap',
})

export const oswald = Oswald({
  weight: '700',
  subsets: ['latin'],
  display: 'swap',
})

export const roboto = Roboto({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
})

const useWidthBreakpoints = () => {
  const [isPhone, setIsPhone] = useState(false)

  useEffect(() => {
    setIsPhone(window.matchMedia(`(max-width: ${theme.breakpoints.width}px)`).matches === true)
  }, [])

  return {
    isPhone,
    isLaptop: !isPhone,
  }
}

const theme: DefaultTheme = {
  mainColor: '#29154e',
  secondaryColor: '#7a0056',
  tertiaryColor: '#e84c84',
  gradiantColors: ['#7a0056', '#b3286e', '#c53476', '#d43e7c', '#e84c84'],

  isPhone: `@media only screen and (max-width: ${widthThreshold}px)`,
  isLaptop: `@media only screen and (min-width: ${widthThreshold}px)`,
  sectionDefaultPaddingTop: 112,
  iconSize: 32,

  breakpoints: {
    useWidthBreakpoints,
    width: widthThreshold,
  },

  font: {
    content: '--font-content',
    title: '--font-title',
    terciary: '--font-terciary',
  },
  dark: {
    backgroundColor: '#2b2b2b',
    textColor: '#ffffff',
    linkColor: '#ffffff',
  },
  light: {
    backgroundColor: '#ffffff',
    textColor: '#000000',
    linkColor: '#ffffff',
  },
}

type Props = {
  children: ReactNode
}

const ThemeProvider = ({
  children,
}: Props) => (
  <StyledComponentsThemeProvider theme={theme}>
    {children}
  </StyledComponentsThemeProvider>
)

export default ThemeProvider
