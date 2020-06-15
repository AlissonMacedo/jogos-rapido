import React from 'react';
import { Link } from 'react-router-dom';
import { Input, Select, Form } from '@rocketseat/unform';
import * as Yup from 'yup';
import ImageInput from '~/components/ImageInput';
import DatePicker from '~/components/DatePicker';
import { Container } from './styles';

export default function NewCliente() {
  const options = [
    { id: 'React JS', title: 'React JS' },
    { id: 'React Native', title: 'React Native' },
    { id: 'Node JS', title: 'Node JS' },
  ];
  const options2 = [
    { id: 1, title: 'Sim' },
    { id: 2, title: 'Não' },
  ];

  const schema = Yup.object().shape({
    file_id: Yup.number().required(),
    title: Yup.string().required('Insira o título do meetup'),
    description: Yup.string().required('Descreva o seu meetup'),
    date: Yup.date().required('Insira uma data'),
    location: Yup.string().required('Insira o local'),
  });

  function handleSubmit() {}
  return (
    <>
      <Container>
        <div className="header" />
        <section className="titleOptions">
          <div>
            <h3>Cadastro de Produto</h3>
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
                      name="cust"
                      label="Preço de custo"
                      placeholder="digite o preço de custo"
                    />
                  </div>

                  <div className="input">
                    <Input
                      className="formInput"
                      name="sale"
                      label="Preço de venda"
                      placeholder="digite o preço de venda"
                    />
                  </div>
                </div>

                <div className="inputRow">
                  <div className="input">
                    <Input
                      className="formInput"
                      name="name"
                      label="Qte. Estoque"
                      placeholder="digite a quantidade"
                    />
                  </div>
                  <div className="input">
                    <Select
                      className="formSelect"
                      name="console"
                      label="Console"
                      placeholder="..."
                      options={options}
                    />
                  </div>
                </div>
                <div className="inputRow">
                  <div className="input">
                    <Input
                      className="formInput"
                      name="sale"
                      label="Peso"
                      placeholder="digite o peso"
                    />
                  </div>

                  <div className="input">
                    <Select
                      className="formSelect"
                      name="lauch"
                      label="Lançamento"
                      placeholder="..."
                      options={options2}
                    />
                  </div>
                  <div className="inputDate">
                    <p> Data do Lançamento</p>
                    <DatePicker
                      showPopperArrow={false}
                      className="formInput"
                      name="date"
                      placeholder="Data do Lançamento"
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
                  <Link to="/produto">
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
