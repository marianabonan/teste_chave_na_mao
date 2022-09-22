import styled from "styled-components";

export const Page = styled.div`
background-color: #393636;
height: 100%;
display: flex;
justify-content: center;
align-items: center;
color:#fff;

@media(min-width: 880px){
    height: 100vh;
}
`

export const Container = styled.div`
    margin: 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border: 2px solid #1E1E1E;
    padding: 5px;
    background-color: #1E1E1E;
    border-radius: 8px;
    
    img{
        max-width: 316px;
    }
    @media(min-width: 880px){
    flex-direction: row;
    }

`
export const Box = styled.div`
    max-width: 500px;
    padding-left: 20px;
    margin-top: 20px;
`

export const BoxInfo = styled.div`
    display: flex;
    flex-direction: row;
    
    span{
        margin-right: 10px;
        color: #936262;
    }

    @media (min-width: 385px){
        padding: 10px 0;
    }
`

export const BoxAbout = styled.div`
    padding: 10px 0;
`

export const BoxGenre = styled.div`
display: flex;

margin-bottom: 15px;
    p{
        border: 1px solid #936262;
        border-radius: 5px;
        padding: 3px;
        margin-right: 10px;
        background-color: #936262;
        color: #393636
    }
`

export const BoxAside = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-left: 20px;
    margin-top:20px
`

export const Ratings = styled.div`
display: flex;
    flex-direction: row;
`

export const AsideInfo = styled.div`
    display: flex;
    flex-direction: column;
    color: #936262;
    margin-top: 15px;
`