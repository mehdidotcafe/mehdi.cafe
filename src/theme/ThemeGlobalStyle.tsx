import { createGlobalStyle } from 'styled-components'

import { ebGaramond, oswald, roboto } from '@theme/ThemeProvider'

const ThemeGlobalStyle = createGlobalStyle`
:root {
  --font-content: ${ebGaramond.style.fontFamily};
  --font-title: ${oswald.style.fontFamily};
  --font-terciary: ${roboto.style.fontFamily};
}

// Hide scrollbars
::-webkit-scrollbar {
  display: none;
  width: 0;
  background: transparent;
}

.fp-watermark {
  display: none;
}

html {
  -ms-overflow-style: none; /* IE 11 */
  scrollbar-width: none; /* Firefox 64 */
  scrollbar-color: transparent transparent;
}

body {
  margin: 0;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: greyscale;
  font-family: var(${(props) => props.theme.font.content});
}

// Handle dark theme with css since js doesnt work with SSR
// See below
// https://stackoverflow.com/questions/67094919/how-to-fix-dark-mode-background-color-flicker-in-nextjs

// @media (prefers-color-scheme: dark) {
  body {
    color: ${(props) => props.theme.dark.textColor};
    background-color: ${(props) => props.theme.dark.backgroundColor};  
  }

  a {
    color: ${(props) => props.theme.dark.linkColor};
  }
// }

// @media (prefers-color-scheme: light) {
//   body {
//     color: ${(props) => props.theme.light.textColor};
//     background-color: ${(props) => props.theme.light.backgroundColor};  
//   }

//   a {
//     color: ${(props) => props.theme.light.linkColor};
//   }

// }

* {
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
}
`

export default ThemeGlobalStyle
