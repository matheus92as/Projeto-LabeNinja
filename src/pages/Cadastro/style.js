import styled from "styled-components";
import Chip from "@material-ui/core/Chip";
import Select from "@material-ui/core/Select";

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 65vh;
  color: #074f8f;
  margin-top: 45px;
  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    input {
      width: 250px;
      margin: 5px;
      border: 2px solid #074f8f;
      border-radius: 5px;
      padding: 10px;
    }
  }
  select {
    border: 2px solid #074f8f;
    border-radius: 5px;
    margin: 5px;
    padding: 10px;
    &:hover {
      cursor: pointer;
    }
  }
  .botoes {
    display: flex;
    flex-direction: row;
    margin-top: 10px;
    button {
      cursor: pointer;
      border-radius: 15px;
      padding: 10px;
      margin: 10px;
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
  }
`;

export const DivSelect = styled(Select)`
  width: 270px;
  border: 2px solid #074f8f;
`;

export const Pagamento = styled(Chip)`
  margin: 2px;
  height: 28px;
`;
