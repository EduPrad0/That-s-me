import styled from "styled-components";


export const ButtonStyle = styled.button`
  
  height: 50px;
    border-radius: 8px;
    font-weight: 500;
    background: #6d47df;
    color: #fff;
    padding: 0 32px;

    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    border: 0;

    transition: filter 0.2s; 
    opacity: 0.8;


    &:hover{
        opacity: 1;
    }   
`;