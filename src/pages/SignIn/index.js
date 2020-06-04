import React from 'react';

import { useHistory } from 'react-router-dom';
import JogosRapido from '~/assets/jogosrapido.png';

import { Container, FormCenter } from './styles';
import Button from '~/components/Button';

function SignIn() {
  const history = useHistory();

  function handleClick() {
    history.push('/dashboard');
  }

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
            <Button color="#7159c1" icon="FaGamepad" onClick={handleClick}>
              Entrar
            </Button>
          </div>
        </div>
      </FormCenter>
    </Container>
  );
}

export default SignIn;
