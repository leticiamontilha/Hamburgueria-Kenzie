import styled from "styled-components";

export const MainSite = styled.main`
    width: 100vw;
    max-width: 1200px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;

    @media (min-width: 900px) {
        display: flex;
        flex-direction: row;
        gap: 100px;
    } 
`