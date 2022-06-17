import React from "react";
import { SocialIcon } from 'react-social-icons';
import lee from '../../assets/img/lee.png'
import { Footer, Titulo, ListaIcones, ImagemLee } from "./styled";

export class Footers extends React.Component {
  render() {
      
    return (
      <Footer>
        <ImagemLee><img src={lee}></img></ImagemLee>
        <Titulo>
          <div className="chamada">
            <h3>Siga-nos nas nossas redes sociais</h3>
            <ListaIcones>
              <SocialIcon target="_blank" url="https://facebook.com" />
                <SocialIcon target="_blank" url="https://linkedin.com" />
                <SocialIcon target="_blank" url="https://instagram.com" />
                <SocialIcon target="_blank" url="https://twitter.com" />
            </ListaIcones>
          </div>         
        </Titulo>
      </Footer>
    );
  }
}
