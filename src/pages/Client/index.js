import React from 'react';

import { useHistory } from 'react-router-dom';
import { Container, ClientTable } from './styles';
import Button from '~/components/Button';

import Select from '~/components/Select';

const clientes = [
  {
    login: 123321,
    name: 'Adriano',
    phone: '11 3235-1020',
    celphone: '11 99715-3010',
    email: 'alissontecnico@gmail.com',
  },
  {
    login: 123321,
    name: 'Adriano',
    phone: '11 3235-1020',
    celphone: '11 99715-3010',
    email: 'alissontecnico@gmail.com',
  },
  {
    login: 123321,
    name: 'Adriano',
    phone: '11 3235-1020',
    celphone: '11 99715-3010',
    email: 'alissontecnico@gmail.com',
  },
  {
    login: 123321,
    name: 'Adriano',
    phone: '11 3235-1020',
    celphone: '11 99715-3010',
    email: 'alissontecnico@gmail.com',
  },
  {
    login: 123321,
    name: 'Adriano',
    phone: '11 3235-1020',
    celphone: '11 99715-3010',
    email: 'alissontecnico@gmail.com',
  },
  {
    login: 123321,
    name: 'Adriano',
    phone: '11 3235-1020',
    celphone: '11 99715-3010',
    email: 'alissontecnico@gmail.com',
  },
];

export default function Client() {
  const history = useHistory();

  function handleClick() {
    history.push('/clientes/novo-cliente');
  }

  const value = [
    {
      value: 10,
      label: 10,
    },
    {
      value: 20,
      label: 20,
    },
  ];

  return (
    <>
      <Container>
        <div className="header" />

        <div className="table">
          <p>Clientes</p>
          <div className="divRight">
            <Button
              icon="FaLaptopCode"
              onClick={handleClick}
              className="buttonNewClient"
            >
              Novo Produto
            </Button>
            <input placeholder="pesquisar..." />
            <div>
              <Select
                name="value"
                placeholder="filtro"
                options={value}
                styles={{ width: '40px' }}
                // defaultValue={
                // }
                onChange={() => {}}
              />
            </div>
          </div>
        </div>
        <ClientTable>
          <thead>
            <tr>
              <th>LOGIN</th>
              <th>NOME</th>
              <th>TELEFONE</th>
              <th>CELULAR</th>
              <th>EMAIL</th>
              <th>AÇÃO</th>
            </tr>
          </thead>

          {clientes.map((project) => (
            <tbody>
              <tr key={project.codigo}>
                <td id="login">{project.login}</td>
                <td id="name">{project.name}</td>
                <td id="phone">{project.phone}</td>
                <td id="celphone">{project.celphone}</td>
                <td id="email">{project.email}</td>
                <td id="acao">
                  <div>
                    <Button
                      icon="FaExchangeAlt"
                      onClick={() => {}}
                      className="buttonLeft"
                    />

                    <Button
                      icon="FaRegTrashAlt"
                      onClick={() => {}}
                      className="buttonRight"
                    />
                  </div>
                </td>
              </tr>
            </tbody>
          ))}
        </ClientTable>
      </Container>
    </>
  );
}
