import React from 'react'
import Cadastro from './pages/Cadastro/Cadastro'
import Inicial from './pages/Inicial/Inicial'
import Headers from './components/Headers/Headers'
import {Footers} from './components/Footer/Footers'
import {MainContainer, Header, Main, Footer} from './App_Styled'

class App extends React.Component {
  state = {
    trocarPagina: true,
  };
  trocarPagina = () => {
    this.setState({ trocarPagina: !this.state.trocarPagina})
  }
  home =() => {
    this.setState({ trocarPagina: true})
  }
    
  render() {
    const paginaAtual = this.state.trocarPagina ? <Inicial /> : <Cadastro trocarPagina={this.trocarPagina}/>

    return (
      <MainContainer>
        <Header>
					<Headers trocarPagina={this.trocarPagina} home={this.home}/>
				</Header>
        <Main>
			  {paginaAtual}
        </Main>
        <Footer>
					<Footers/>
				</Footer>
      </MainContainer>
    );
  }
}

export default App;