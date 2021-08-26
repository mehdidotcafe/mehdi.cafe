import { createGlobalStyle } from 'styled-components'

export const MainStyle = createGlobalStyle`
button {
  background: none;
  color: inherit;
  border: none;
  padding: 0;
  font: inherit;
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

@media only screen and (min-width: 812px) {  
  .bp-small {
    display: none !important;
  }
}

@media only screen and (max-width: 812px) {
  .bp-large {
    display: none !important;
  }
}
`

export default MainStyle
