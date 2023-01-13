import { ebGaramond, oswald, roboto } from '@theme/ThemeProvider'
import { createGlobalStyle } from 'styled-components'

const ThemeGlobalStyle = createGlobalStyle`
:root {
  --font-content: ${ebGaramond.style.fontFamily};
  --font-title: ${oswald.style.fontFamily};
  --font-terciary: ${roboto.style.fontFamily};
}

::-webkit-scrollbar {
  display: none;
  width: 0;  /* Remove scrollbar space */
  background: transparent;  /* Optional: just make scrollbar invisible */
}
.fp-watermark {
  display: none;
}

body {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: greyscale;
  font-family: var(${(props) => props.theme.font.content});
}

// Handle dark theme with css since js doesnt work with SSR
// See below
// https://stackoverflow.com/questions/67094919/how-to-fix-dark-mode-background-color-flicker-in-nextjs

@media (prefers-color-scheme: dark) {
  body {
    color: ${(props) => props.theme.dark.textColor};
    background-color: ${(props) => props.theme.dark.backgroundColor};  
  }
}

@media (prefers-color-scheme: light) {
  body {
    color: ${(props) => props.theme.light.textColor};
    background-color: ${(props) => props.theme.light.backgroundColor};  
  }
}

* {
  --scroll-behavior: smooth;
  scroll-behavior: smooth;
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  -webkit-tap-highlight-color:  rgba(255, 255, 255, 0);
}

button {
  background: none;
  color: inherit;
  border: none;
  padding: 0;
  cursor: pointer;
  outline: inherit;
}

button,
[type="button"],
[type="reset"],
[type="submit"] {
  -webkit-appearance: none;
}

p {
  margin-block-start: 0;
  margin-block-end: 0;
}

a {
  text-decoration: inherit;
  color: inherit;
}
`

export default ThemeGlobalStyle
