import styled from "styled-components";

export const ValorTotal = styled.div`
    background-color: #F5F5F5;
    display: flex;
    flex-direction: column;
    padding: 10px;
    border-top: 1px solid  #828282;

    div {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    div > p {
        font-weight: 600;
        font-size: 14px;
        color: #333333;
    }

    div > span {
        font-weight: 600;
        font-size: 14px;
        color: #828282;
    }

    button {
        background: #E0E0E0;
        border: 2px solid #E0E0E0;
        border-radius: 8px;
        width: 100%;
        height: 50px;
        color: #828282;
        font-size: 14px;
      
    }


`