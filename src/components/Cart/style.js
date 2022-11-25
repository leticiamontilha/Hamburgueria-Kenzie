import styled from "styled-components";

export const SectionCart = styled.section`
    width: 350px;
    height: 400px;
    display: flex;
    flex-direction: column;

`

export const HeaderCart = styled.div`
    background-color: #27AE60;
    text-align: center;
    border-radius: 5px 5px 0px 0px;

    h5{
        font-weight: 500;
        font-size: 18px;
        color: #FFFFFF;
    } 
`

export const BodyCart = styled.div`
    height: 100%;
    overflow-y: auto;
    background: #F5F5F5;
    border-radius: 0px 0px 5px 5px;

    p {
        color: #828282;
        font-weight: 400;
        font-size: 14px;
    } 

`

export const LiCard = styled.li`
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: #F5F5F5;

    img {
        width: 50px;
    }

    button {
        background-color: transparent;
        border: none;
    }

`