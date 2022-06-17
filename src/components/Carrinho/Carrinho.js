import axios from "axios";
import React from "react";
import { url, header } from "../../constants/authorization";
import { MainContainer, Produto } from "./CarrinhoEstilo";

export default class Carrinho extends React.Component {
  render() {
    const mapCarrinho = this.props.listaCarrinho.map((servicos) => {
      return (
        <Produto>
          <table>
            <p>Serviço: {servicos.title}</p>
            <div>
              <p>Preço unitário: R$ {servicos.price},00</p>
            </div>
          </table>
          <div>
            <button className="BotãoExcluir" onClick={() => this.props.removeServico(servicos.id)}>
              Excluir Serviço
            </button>
          </div>
        </Produto>
      );
    });

    const Total = this.props.listaCarrinho.reduce(
      (anterior, item) => item.price + anterior,
      0
    );

    return (
      <MainContainer>
        <div className="conteudo">
          <div>
            <h1>Carrinho</h1>
          </div>
          <div>{mapCarrinho}</div>
          <h4> Total da Compra: R$ {Total},00</h4>
          <div>
            <button onClick={() => this.props.removeTodosOsServicos()}>
              Remover todos os serviços
            </button>
            <button onClick={() => this.props.finalizarCompra()}>
              Finalizar contratação
            </button>
            <button onClick={this.props.voltaCarrinho}>
              Continuar comprando
            </button>
          </div>
        </div>
      </MainContainer>
    );
  }
}