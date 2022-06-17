import React from "react";
import { header, url } from "../../constants/authorization";
import axios from "axios";
import { MainContainer, Pagamento, DivSelect } from "./style";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";

const inputPagamento = ["Dinheiro", "Cartão", "Pix", "Boleto"];

class Cadastro extends React.Component {
  state = {
    inputTitulo: "",
    inputDescricao: "",
    inputValor: 0,
    inputPagamento: [],
    inputData: "",
  };

  onChangeTitulo = (event) => {
    this.setState({ inputTitulo: event.target.value });
  };

  onChangeDescricao = (event) => {
    this.setState({ inputDescricao: event.target.value });
  };

  onChangeValor = (event) => {
    this.setState({ inputValor: event.target.value });
  };

  onChangePagamento = (event) => {
    this.setState({ inputPagamento: event.target.value });
  };

  onChangeData = (event) => {
    this.setState({ inputData: event.target.value });
  };

  createJob = () => {
    const body = {
      title: this.state.inputTitulo,
      description: this.state.inputDescricao,
      price: Number(this.state.inputValor),
      paymentMethods: this.state.inputPagamento,
      dueDate: this.state.inputData,
    };
    axios
      .post(`${url}/jobs`, body, header)
      .then((res) => {
        alert("Serviço inserido com sucesso!");
        this.setState({
          inputTitulo: "",
          inputDescricao: "",
          inputValor: 0,
          inputPagamento: [],
          inputData: "",
        });
      })
      .catch((err) => {
        alert("Houve algum erro, tente novamente!");
      });
  };

  render() {
    return (
      <MainContainer>
        <h1>Cadastre seu serviço</h1>
        <div>
          <input
            placeholder="Título"
            value={this.state.inputTitulo}
            onChange={this.onChangeTitulo}
          />

          <input
            placeholder="Descrição"
            value={this.state.inputDescricao}
            onChange={this.onChangeDescricao}
          />
          <input
            type="number"
            placeholder="Valor"
            value={this.state.inputValor}
            onChange={this.onChangeValor}
          />

          <FormControl margin="normal" variant="outlined" size="small">
            {/* habilitar o input abaixo ao clicar sobre o select ele fica por cima do linha */}
            {/* <InputLabel>Formas de Pagamento</InputLabel> */}

            <DivSelect
              multiple
              value={this.state.inputPagamento}
              onChange={this.onChangePagamento}

              // ao habilitar o código abaixo a função 'cadastrar serviço' para de funcionar'

              // renderValue={(selected) => (
              //   <div>
              //     {selected.map((value) => {
              //       return (
              //         <Pagamento color="primary" key={value} label={value} />
              //       );
              //     })}
              //   </div>
              // )}
            >
              {inputPagamento.map((name) => {
                return (
                  <MenuItem key={name} value={name}>
                    {name}
                  </MenuItem>
                );
              })}
            </DivSelect>
          </FormControl>

          <input
            type="date"
            value={this.state.inputData}
            onChange={this.onChangeData}
          />
          <div className="botoes">
            <button onClick={this.createJob}>Cadastrar Serviço</button>
            <button onClick={this.props.trocarPagina}>Voltar</button>
          </div>
        </div>
      </MainContainer>
    );
  }
}

export default Cadastro;
