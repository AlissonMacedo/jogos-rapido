import React from 'react';
import { Link } from 'react-router-dom';
import { Input, Form } from '@rocketseat/unform';
import * as Yup from 'yup';
import ImageInput from '~/components/ImageInput';
import { Container } from './styles';

export default function NewProduct() {
  const schema = Yup.object().shape({
    file_id: Yup.number().required(),
    title: Yup.string().required('Insira o título do meetup'),
    description: Yup.string().required('Descreva o seu meetup'),
  });

  function handleSubmit() {}
  return (
    <>
      <Container>
        <div className="header" />
        <section className="titleOptions">
          <div>
            <h3>Cadastro de Cliente</h3>
          </div>
        </section>

        <section className="body">
          <Form schema={schema} onSubmit={handleSubmit}>
            <div className="divMaster">
              <div className="divColumn">
                <div className="input">
                  <Input
                    className="formInput"
                    name="name"
                    label="Name"
                    placeholder="digite o nome do produto"
                  />
                </div>

                <div className="inputRow">
                  <div className="input">
                    <Input
                      className="formInput"
                      name="phone"
                      label="Telefone"
                      placeholder="digite o telefone"
                    />
                  </div>

                  <div className="input">
                    <Input
                      className="formInput"
                      name="sale"
                      label="Telefone"
                      placeholder="digite o preço de venda"
                    />
                  </div>
                </div>

                <div className="inputRow">
                  <div className="input">
                    <Input
                      className="formInput"
                      name="celphone"
                      label="Telefone celular"
                      placeholder="digite o celular"
                    />
                  </div>
                  <div className="input">
                    <Input
                      className="formInput"
                      name="emalil"
                      label="Email"
                      placeholder="digite o email"
                    />
                  </div>
                </div>
              </div>

              <div className="divColumn">
                <ImageInput name="file" />
                <div className="divButtons">
                  <button className="green" type="submit">
                    Salvar
                  </button>
                  <Link to="/produtos">
                    <button
                      className="red"
                      type="button"
                      style={{ width: '100%' }}
                    >
                      Voltar
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </Form>
        </section>
      </Container>
    </>
  );
}
