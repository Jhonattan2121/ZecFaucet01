import { createGlobalStyle } from 'styled-components';

interface ContainerProps {
  darkMode: boolean;
}

const GlobalStyle = createGlobalStyle<ContainerProps>`
   body  {
    background-color: ${props => (props.darkMode ? '#333' : '#fff')};
    color: ${props => (props.darkMode ? '#fff' : '#000')};
  }

`;

export default GlobalStyle;