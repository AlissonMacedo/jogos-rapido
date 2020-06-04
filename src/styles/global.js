import { createGlobalStyle } from 'styled-components';

import 'react-perfect-scrollbar/dist/css/styles.css';
import 'react-toastify/dist/ReactToastify.css';

export default createGlobalStyle`
@import url("https://fonts.googleapis.com/css?family=Roboto:400,700&display=swap");

* {
  margin: 0;
  padding: 0;
  outline: 0;
  box-sizing: border-box;
}

*:focus {
  outline: 0;
}

html {
  /* a cada 1rem será considera 10px */
  font-size: 62.5%;
}

@media (max-width: 768px) {
  html {
    font-size: 50%;
  }
}

html, body, #root {

  margin: 0;
  padding: 0;
  outline: 0;
  box-sizing: border-box;
  height: 100%;
 }

body {
  font-size: 1.6rem;

  -webkit-font-smoothing: antialiased;

}


.bodyOverflow {
  overflow: hidden;
}

body, input, button {
  font: 14px 'Roboto', sans-serif;
}

a {
  text-decoration: none;
}

ul {
  list-style: none;
}

button {
  cursor: pointer;
}

`;
