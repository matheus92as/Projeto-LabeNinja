import React from 'react'
import { MainContainer } from './styled'

class Detalhe extends React.Component {
            
    render() {
        return(
            <MainContainer>  
                <div className='conteudo'>
                    <button 
                        className='X'
                        onClick={this.props.voltaLista}
                    > X </button>
                    <h1>{this.props.detalhe.title.toUpperCase()}</h1>
                    <h3>Seviço disponivel até:</h3>
                    {this.props.mostraDetalhe === !false ? (
                        <div>  
                            <p>
                                {this.props.conversorData(this.props.detalhe.dueDate)}
                            </p>                                     
                        </div>
                    ):(<></>)}
                    <p>Por apenas R$ {this.props.detalhe.price.toFixed(2)}</p>
                    <h3>Aceita pagamentos em:</h3>
                    {this.props.mostraDetalhe === !false ? (
                        <div>                                     
                            {this.props.detalhe.paymentMethods.map((pagar) => {
                            return <p>{pagar}</p> })}               
                        </div>
                    ):(<></>)}
                    <h3>Descrição:</h3>
                    <p>{this.props.detalhe.description}</p>
                    <button onClick={() => this.props.adicionaEmDetalhes(this.props.detalhe.id)}>Adicionar ao Carrinho</button>
                </div>       
            </MainContainer>
        )
    }
}
export default Detalhe