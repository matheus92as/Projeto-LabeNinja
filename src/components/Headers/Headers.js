import React from "react";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import styled from "styled-components";

const Header = styled.div`
  width: 100%;
  height: 100px;
  /* background-color: lightgray; */
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const Titulo = styled.div`
  margin: 40px;
  h1{
    cursor:pointer;
    font-size:41px;
  }
`;
const Ninja = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 20%;
  margin-right: 40px;
  h3{
    cursor:pointer;
    font-size:26px;
    color:#074f8f;
    transition: 0.2s;
    :hover{
      transition: 0.2s;
      color:#72bcff;
    }
  }
`;

class Headers extends React.Component {
  
  render() {    
    return (
      <Header>
        <Titulo>
          <h1 onClick={this.props.home}>LabeNinjas</h1>
        </Titulo>
        <Ninja>
          <h3 onClick={this.props.trocarPagina}>Seja um Ninja</h3>
          {/* <ShoppingCartIcon fontSize="large" /> */}
        </Ninja>
      </Header>
    );
  }
}

export default Headers;
