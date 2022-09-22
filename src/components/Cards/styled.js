import styled from "styled-components";

export const Container = styled.div`

  ul {
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    padding-top: 25px;
  }
  li {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 237px;
    height: 309px;
    margin: 10px;
    border-radius: 18px;
    border-bottom: #936262 solid 2px;
    box-shadow: 0px 0px 10px 2px #936262;
    text-align: center;
  }
  img {
    width: 180px;
    height: 250px;
  }
  p{
      padding: 3px;
      color: #fff;
  }
  div {
    display: flex;
    justify-content: space-between;
  }
  button{
      background-color: transparent;
      border: 1px solid #936262;
      border-radius: 13px;
      padding: 3px 5px 3px 5px;
      color: #fff;
      font-size: 12px;
  }
`;

export const Box = styled.div`
    padding-top: 40px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    p{
        padding: 10px;
        margin-bottom: 20px;
    }
    img{
        width: 250px;
        height: auto;
    }
    @media (min-width: 600px) {
        img{
            width: 400px;
            height: auto;
        }  
    }
`
