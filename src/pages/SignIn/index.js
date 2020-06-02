import React from 'react';

import JogosRapido from '~/assets/jogosrapido.png';

import { Container, FormCenter } from './styles';
import ButtonComponent from '~/components/Button';

function SignIn() {
  return (
    <Container>
      <FormCenter>
        <div className="divimg">
          <img src={JogosRapido} alt="imagem" />
        </div>
        <div className="form">
          <input placeholder="Nome" />
          <input placeholder="Senha" />
          <div className="divbutton">
            <ButtonComponent text="Entrar" size={30} />
          </div>
        </div>
      </FormCenter>
    </Container>
  );
}

export default SignIn;
