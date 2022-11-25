import styled from "styled-components";

export const ProductList = styled.ul`
   width: 100vw;
   /* max-width: 500px; */
   display: flex;
   gap: 15px;
   overflow-x: auto;

   @media (min-width: 900px) {
    width: 600px;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    
   }
`


export const CardProduct = styled.li`
    width: 200px;
    height: 300px;
    background-color: #F5F5F5;
    border: 2px solid #E0E0E0;
    border-radius: 5px;
    padding: 10px;

    span {
        width: 100%;
        height: 50%;
    }

    span > img {
        width: 100%;
        height: 100px;
        background-color: #F5F5F5;
    }

    div {
        height: 50%;
        display: flex;
        justify-content: center;
        flex-direction: column;
    }

    div > :nth-child(3) {
        color: #27AE60;
        font-size: 14px;
        font-weight: 600;

    }

    div > :nth-child(4) {
        background: #27AE60;
        border: 2px solid #27AE60;
        border-radius: 8px;
        color: #FFFFFF;
        width: max-content;
        height: 40px;

    }

    @media (min-width: 900px) {
        width: 165px;
        height: 270px
    }
   

`