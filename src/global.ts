import { createGlobalStyle } from "styled-components";

import variables from "./styles/variables";

export default createGlobalStyle`

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-size: 62.5%;
  font-family:${variables.fonts.primaryFont} ;
}

html {
  font-size: 62.5%;
}
@media (max-width: 768px) {
    html {
      font-size: 54.6875%;
    }
  }


body{
  background: ${variables.colors.gray600};
  color: ${variables.colors.gray300};
  -webkit-font-smoothing: antialiased;
 
}

body,
input,
textarea,
button{
  font-weight: 400;
  font-size:1.6rem;

  
  border: none ;
  outline: none ;
}

button{
  background:none ;

}

p,span, strong, li, h1, h2, h3, h4, h5, h6, a, time{
  font-size:1.6rem;
  
}

::-webkit-scrollbar {
    width:10px;
    height: 10px;
    }
     
    
    ::-webkit-scrollbar-track {
    background: ${variables.colors.gray700};
    }
     

    ::-webkit-scrollbar-thumb {
   
      background: ${variables.colors.blue300};
    border-radius: 5px;
    }


`;
