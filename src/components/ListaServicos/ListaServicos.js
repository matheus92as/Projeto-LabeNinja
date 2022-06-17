import axios from 'axios';
import React from 'react'
import { header, url } from "../../constants/authorization";
import Filtro from '../FiltrosDeBusca/FiltrosDeBusca'
import Ordenação from '../Ordenação/Ordenação';
import carrinho from '../../assets/img/carrinho.png'
import { MainContainer, CardBox, ListaServico } from './styled'
import Detalhe from '../../pages/Detalhes/Detalhes';

class ListaServicos extends React.Component {
  conversorData = (data) => {
    //a data originalmente vem muito extensa
    const dia = data.substring(8, 10); //então pegamos esse valor e
    const mes = data.substring(5, 7); //cortamos oque vem antes e depois
    const ano = data.substring(0, 4); //dos valores que precisamos
    return `${dia}/${mes}/${ano}`; //e retornamos eles com as barras de datas
  };
    state ={
        detalhe: {},
        formaPagamento: [],
        mostraDetalhe: false,
    }
    conversorData = (data) => { //a data originalmente vem muito extensa
        const dia = data.substring(8, 10) //então pegamos esse valor e 
        const mes = data.substring(5, 7) //cortamos oque vem antes e depois 
        const ano = data.substring(0, 4) //dos valores que precisamos
        return `${dia}/${mes}/${ano}`//e retornamos eles com as barras de datas
    }
    pegaServicoID = (id) => {
        axios.get(`${url}/jobs/${id}`, header).then((resp) => {
            this.setState({ detalhe: resp.data })
            this.setState({ formaPagamento: resp.data.paymentMethods })
            this.setState({mostraDetalhe: true})
        }).catch((erro) => {
            console.log(erro)
        })
    }
    voltaLista = () => {
        this.setState({mostraDetalhe: false})
    }
    adicionaEmDetalhes = (id) => {
        this.setState({mostraDetalhe: false})
        this.props.adicionaCarrinho(id)
    }
    render() {
        // console.log(this.state.detalhe)
        const listaDeServicos = this.props.servicos.filter((servico) => {
            return this.props.min === "" || servico.price >= this.props.min;
        }).filter((servico) => {
            return this.props.max === "" || servico.price <= this.props.max;
        }).filter((servico) => {
            return servico.title
            .toLowerCase()
            .includes(this.props.nome.toLowerCase());
        }).sort((a, b) => {
            switch (this.props.valorDeSorteio) {
                case "titulo":
                    return this.props.ordem * a.title.localeCompare(b.title)
                    case "data":
                    return this.props.ordem * (new Date(a.dueDate).getTime() - new Date(b.dueDate).getTime())
                    default:
                    return this.props.ordem * (a.price - b.price)
            }
            }).map((servico) => {
                return (
                    <CardBox>
                        <h2>{servico.title.toUpperCase()}</h2>
                        <p>Disponivel até {this.conversorData(servico.dueDate)}</p>
                        <p>Por apenas R$ {servico.price.toFixed(2)}</p> {/*toFixed(2) faz aparecer até duas casas decimais após o valor, sendo util até para valores em centavos*/}
                        <div>
                            <button
                                onClick={() => this.pegaServicoID(servico.id)}
                            >Mais Detalhes</button>
                            <img onClick={() => this.props.adicionaCarrinho(servico.id)} src={carrinho} />
                        </div>
                    </CardBox>
                )
            })
        return (
            <MainContainer>
                <div className='filtros'>
                    <Filtro
                        servicos={this.props.servicos}
                        min={this.props.min}
                        max={this.props.max}
                        nome={this.props.nome}
                        onChangeMin={this.props.onChangeMin}
                        onChangeMax={this.props.onChangeMax}
                        onChangeNome={this.props.onChangeNome}
                        filtros={this.props.filtros}
                    />
                    <Ordenação
                        ordem={this.props.ordem}
                        valorDeSorteio={this.props.valorDeSorteio}
                        onChangeOrdem={this.props.onChangeOrdem}
                        onChangeSorteio={this.props.onChangeSorteio}
                    />
                </div>
                <ListaServico>
                    {listaDeServicos}
                </ListaServico>
                { (this.state.mostraDetalhe) ? 
                    <Detalhe
                    conversorData={this.conversorData}
                    mostraDetalhe={this.state.mostraDetalhe}
                    voltaLista={this.voltaLista}
                    detalhe={this.state.detalhe}
                    formaPagamento={this.state.formaPagamento}
                    adicionaEmDetalhes={this.adicionaEmDetalhes}
                    />
                : null }
             
            </MainContainer>
        )
    }
}

export default ListaServicos;
