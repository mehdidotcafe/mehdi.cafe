import { createGlobalStyle } from 'styled-components'

export const MainStyle = createGlobalStyle`

.iScrollVerticalScrollbar {
  display: none;
}

::-webkit-scrollbar {
  display: none;
}

/* Hide scrollbar for IE, Edge and Firefox */
* {
  -ms-overflow-style: none;  /* IE and Edge */
  scrollbar-width: none;  /* Firefox */
}

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

${(props) => props.theme.isLaptop} {  
  .bp-small {
    display: none !important;
  }
}

${(props) => props.theme.isPhone} {
  .bp-large {
    display: none !important;
  }
}
`

export default MainStyle
