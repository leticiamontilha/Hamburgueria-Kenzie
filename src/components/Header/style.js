import styled from "styled-components";


export const Container = styled.div`
background-color: #F5F5F5;
width: 100vw;
`

export const Header = styled.header`
    width: 100vw;
    height: 139px;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    flex-direction: column;
    gap: 10px;
    background-color: #F5F5F5;

    img {
        cursor: pointer;
    }

    @media (min-width: 900px) {
        width: 1200px;
        height: 100px;
        padding: 15px;
        margin: 0 auto;
        padding-left: 1rem;   
        padding-right: 1rem;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
    }
`