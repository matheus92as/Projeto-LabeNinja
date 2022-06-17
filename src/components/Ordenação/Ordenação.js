import React from 'react';
import styled from 'styled-components'

const MainContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  color:#074f8f;
  font-size: 21px;
  label{
    margin-right:5px;
    margin-left:5px;
  }
  select{
    padding: 7px;
    margin:5px;
    border-radius: 15px;
    border:2px solid #074f8f;
  }
`

class Ordenação extends React.Component {

    render() {

        return (
            <MainContainer>
                <label for="sort">Ordenação: </label>
                <select
                    name="sort"
                    value={this.props.valorDeSorteio}
                    onChange={this.props.onChangeSorteio}
                >
                    <option value="titulo">Título</option>
                    <option value="preço">Preço</option>
                    <option value="data">Prazo</option>
                </select>
                <select
                    name="ordem"
                    value={this.props.ordem}
                    onChange={this.props.onChangeOrdem}
                >
                    <option value={1}>Crescente</option>
                    <option value={-1}>Decrescente</option>
                </select>
            </MainContainer>
        )
    }
}

export default Ordenação