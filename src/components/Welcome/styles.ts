import styled from "styled-components";
import astronaut from '../../assets/astronautWW.png'

export const ContainerHome = styled.main`
    background-attachment: fixed;
   position: relative;
    display: flex;
    align-items: center;
    justify-content: center;


    div{
        display: flex;
        flex-direction: column;
        align-items: center;

        
        animation-name: Img;
            animation-duration: 1s;
        

                @keyframes Img {
            from {
                margin-left: 200px;
            }
            to {
                margin-right: 0;
            }
        }
    }

    margin-bottom: 6rem;


    @media (max-width: 768px) {
        background: url(${astronaut});
        background-size: cover;
        height: 100vh;
        position: relative;


        div{
            h1, p{
                background-color: #8A83BC;
            }
            position: absolute;
            bottom: 0rem;
        }

        article {
            img {
                display: none;
            }
        }
    }

`;

export const ContainerAbout = styled.main`
 background-attachment: fixed;
   display: flex;
    flex-direction: row-reverse;
    align-items: center;
    justify-content: space-around;


    article{
        img{
            animation-name: Img;
            animation-duration: 1s;
        }

                @keyframes Img {
            from {
                margin-right: 600px;
            }
            to {
                margin-right: 0;
            }
        }
    }



    div{
        display: flex;
        flex-direction: column;

        text-align: justify;
        max-width: 20rem;
    }

    margin-bottom: 6rem;

    @media (max-width: 768px) {
        article{
            img{
                display: none
            }
        }

        div{
            display: flex;
            align-items: center;
        }

        height: 100vh;
        position: relative;
    }

`;