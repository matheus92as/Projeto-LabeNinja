import styled from "styled-components";

export const Footer = styled.div`
  display: flex;
  width: 100%;
  color:#074f8f;
  font-size: 21px;
`;
export const Titulo = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 145px;
  align-items: center;
  position:relative;
  top: 100px;
  border-top: 3px solid yellow;
  .chamada{
      width:60%;
      display: flex;
      flex-flow:row wrap;
      align-items: center;
      justify-content: end;
      h3{
          margin:5px;
      }
  }
`;
export const ListaIcones = styled.ul`
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  margin-right: 15px;
`;
export const ImagemLee = styled.div`
  display: flex;
  flex-wrap: wrap;
  img{
    position: absolute;
    z-index: 1;
    width:200px;
    height:250px;
    margin-left: 30px;
  }
`