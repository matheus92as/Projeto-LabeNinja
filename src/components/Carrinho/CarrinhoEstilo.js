import styled from "styled-components";

export const MainContainer = styled.div`
  display: flex;
  position: fixed;
  z-index: 1;
  overflow: auto;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  background-color: rgb(0, 0, 0);
  background-color: rgba(0, 0, 0, 0.4);
  .conteudo {
    background-color: #fefefe;
    margin: auto;
    padding: 20px;
    border: 1px solid #888;
    border-radius: 15px;
    width: 80%;
    color: #074f8f;

    h1 {
      margin: 40px;
      margin-top: 10px;
    }
    p {
      margin-left: 25px;
    }
    h4 {
      margin-left: 25px;
    }
  }
  .BotãoExcluir {
    cursor: pointer;
    border-radius: 15px;
    padding: 10px;
    margin: 25px;
    border: 2px solid #074f8f;
    color: #074f8f;
    font-size: 10px;
    background-color: inherit;
    transition: 0.2s;
    font-weight: bold;
    :hover {
      background-color: #dff0ff;
      transition: 0.2s;
    }
  }

  button {
    cursor: pointer;
    border-radius: 15px;
    padding: 10px;
    margin: 20px;
    border: 2px solid #074f8f;
    color: #074f8f;
    font-size: 18px;
    background-color: inherit;
    transition: 0.2s;
    :hover {
      background-color: #dff0ff;
      transition: 0.2s;
    }
  }
`;

export const Produto = styled.div`
  border: 2px solid #074f8f;
  margin: 10px;
  width: 30rem;
`;