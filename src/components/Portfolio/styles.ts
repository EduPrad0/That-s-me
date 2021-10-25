import styled from "styled-components";

export const ContainerPort = styled.section`
   padding-top: 5rem;
   background-color: #FFFFFF;
    z-index: 2;
    overflow: hidden;

    display: flex;
    flex-direction: column;
    align-items: center;

   div {
    h1{
        font-size: 2.5rem;
    }
   }


   


`;


export const Container = styled.div`
    display: flex;
    /* flex-direction: row-reverse; */
    align-items: center;
    background-color: #00BFFF;
    background-attachment: fixed;
    position: relative;
    

    section {
        display: flex;
        flex-direction: column;
        align-items: center;

        a{
            color: blue;
        }

    }

    @media (max-width: 768px) {
       display: flex;
       flex-direction: column-reverse;

       section{
           text-align: center;
            
           p{
                margin: 0 9rem;
                padding: 0 3rem;
            }

        
        }
   }
   
  
`;


export const AnimationImg = styled.section`
    @media (max-width: 768px) {
        animation: treme 0.1s;
    }


        img {
            animation: treme 0.3s;
            animation-iteration-count: 3;
        }

        @keyframes treme {
        0% {transform: skewY(-2deg);}
        25% {transform: skewY(-1deg)}
        50% {transform: skewY(2deg)}
        75% {transform: skewY(1deg);}
        100% {transform: skewY(0)}
        }
    
`;



export const ContainerSenai = styled.section`
    background-color: #92CBDC;


    padding: 7rem;
    display: flex;
    align-items: center;
    position: relative;
    justify-content: space-around;
    

    section {
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: justify;
        max-width: 60%;


        span{
            color: red;
        }
        a{
            color: blue;
        }

    }

    @media (max-width: 768px) {
        display: flex;
       flex-direction: column;

       section{
           margin: 0;
           padding: 0;
           text-align: center;
        }
    }
`;



export const Divizinha = styled.div`
    color: white;
    display: flex;
    flex-wrap: wrap;
    article {
        background: black;
        margin: 1rem 5rem;
        padding: 1rem;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;    
        border-radius: .5rem;

        img{
            width: 20rem;
            height: 10rem;
        }
    }


`;


