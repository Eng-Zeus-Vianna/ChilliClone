import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

:root {
  --black: #000000;
  --black-trans: #393e46;
  --orange: #f89d13;
  --red-trans: #e84a5f;
}

hmtl{
  @media(max-width:720px){
    font-size: 87.5%;
  }

  @media(max-width:1080px){
    font-size: 93.7%;
  }
}

body {
  -webkit-font-smoothing: antialiased;
}

body, input, textarea, button {
  font-family: 'Roboto', sans-serif;
  font-weight: 400;
}

ul {
  text-decoration: none;
}

.headerControl{ 
  top: 0;
  left: 0;
  width: 100%;
  height: auto;
  position: absolute;
  z-index: 3;


}

.banner img{
 position: relative;

  width: 100%;
  height: auto;
  
  top: 1.5rem;
  
}
.banner {
  background-color: rgba(0 , 0, 0, 0.9);
}
`
