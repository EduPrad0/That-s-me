import styled from "styled-components";


export const Container = styled.nav`
    background: rgba(0, 0, 0, 0.4);
    padding: 0 10rem;
    width: 100%;
    display: flex;
    gap: 3rem;
    position: fixed;
    z-index: 1000;

    button{
        background: transparent;
        border: 0;
        display: flex;
        align-items: center;    
        height: 3rem;
        width: 100%;
        

        img{
            max-width: 40px;
            margin: 0.7rem;
        }
    }
    ul{
        margin: 0 10rem;
        display: flex;
        gap: 2rem;
        align-items: center;
        list-style: none;

        li{
            font-family: 'Poppins', sans-seri;
            cursor: pointer;
            
            &:hover {
                border-bottom: 2px groove purple;
            }
        }
    }


    @media (max-width: 768px){
        .hm{
            display: none;
        }
        padding: 0;

        display: flex;
        flex-direction: column-reverse;
        align-items: center;
        justify-content: center;
        gap: 0;

        font-size: 1.5rem;

       
    }


`;
