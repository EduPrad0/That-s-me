import styled from "styled-components";



export const Container = styled.div`
    background: #FFFFFF;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    @media (max-width: 768px){
        
    }
`;


export const Skill = styled.div`
    display: flex;
    flex-wrap: wrap;
    @media (max-width: 768px){
        flex-direction: row;
        flex-wrap: wrap;
    }
`;

export const Fil = styled.div`
    div{
        align-items: center;

        img{
            padding: 1rem 3rem;
        }
    }

    @media (max-width: 768px){
       display: flex;
       flex-direction: row-reverse;
       div {
           img{
               width: 50%;
           }
       }

    }
`;