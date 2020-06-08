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
  border: 0px;
}

html, body {
  .react-datepicker {
  font-size: 1em;
}
.react-datepicker__header {
  padding-top: 0.8em;
}
.react-datepicker__month {
  margin: 0.4em 1em;
}
.react-datepicker__day-name, .react-datepicker__day {
  width: 1.9em;
  line-height: 1.9em;
  margin: 0.166em;
}
.react-datepicker__current-month {
  font-size: 1em;
}
.react-datepicker__navigation {
  top: 1em;
  line-height: 1.7em;
  border: 0.45em solid transparent;
}
.react-datepicker__navigation--previous {
  border-right-color: #ccc;
  left: 1em;
}
.react-datepicker__navigation--next {
  border-left-color: #ccc;
  right: 1em;
}
}

`;
