import styled from "styled-components";

export const Container = styled.div`
    border: 4px solid #936262;
    border-radius: 27px;
    padding: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 250px;
    transition: 0.3s;
    input{
        background-color: transparent;
        border: none;
        caret-color: #936262;
        color:#936262;
    }

    @media(min-width: 850px){
        justify-content: space-between;
         width: 650px;
        
    }
` 