import React from "react";
import styled from 'styled-components'

const MainContainer = styled.div`
  display: flex;
  flex-flow: row;
  input{
    padding: 10px;
    margin:5px;
    border-radius: 15px;
    border:2px solid #074f8f;
  }
`

export default class Filtro extends React.Component {

  render() {     
    return(
      <MainContainer>
        <div>
          <input
            placeholder={"Valor mínimo"}
            type="number"
            value={this.props.min}
            onChange={this.props.onChangeMin}
          />
        </div>
        <div>
          <input
            placeholder={"Valor máximo"}
            type="number"
            value={this.props.max}
            onChange={this.props.onChangeMax}
          />
        </div>
      </MainContainer>
    );
  }
}
