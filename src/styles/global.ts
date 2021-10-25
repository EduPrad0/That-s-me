import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
   :root{
       --back: #f0f2f5;
       --red: #E5234D;
       --blue: #5429CC;
       --green: #33CC95;
       --blue-light: #6933FF;

       --text-title: #363f5f;
       --text-body: #969cb3;

       --shape: #FFFFFF; 

   }
   
   *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    }

    @media (max-width: 768px) {
    *{
        overflow-x: hidden;
    }

    }

    html{
        @media (max-width: 1080x) {
            font-size: 93.75%;
        }

        @media (max-width: 720px){
            font-size: 87.5%;
        }
    }


    body{
        background: var(--back);
        -webkit-font-smoothing: antialiased;
    }

    body, input, textarea, button{
        font-family: 'Poppins', sans-serif;
        font-weight: 400;
    }

    h1, h2, h3, h4, h5, h6{
        font-weight: 600;
    }

    button{
        cursor: pointer;

    }

    [disabled]{
        opacity: 0.6;
        cursor: not-allowed;
    }

    a{
        text-decoration: none;
        color: inherit;
        cursor: pointer;
    }


    
`;