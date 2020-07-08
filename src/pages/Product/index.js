import React from 'react';

import { useHistory } from 'react-router-dom';
import { Container, ProductTable } from './styles';
import Button from '~/components/Button';

import Select from '~/components/Select';

export default function Product() {
  const history = useHistory();

  function handleClick() {
    history.push('/produtos/novo-produto');
  }

  const products = [
    {
      codigo: 123,
      product: 'GOD OF WAR',
      cust: 123,
      sale: 170,
      stor: 10,
      console: 'XBOX',
    },
    {
      codigo: 123,
      product: 'GOD OF WAR',
      cust: 123,
      sale: 170,
      stor: 10,
      console: 'XBOX',
    },
    {
      codigo: 123,
      product: 'GOD OF WAR',
      cust: 123,
      sale: 170,
      stor: 10,
      console: 'XBOX',
    },
    {
      codigo: 123,
      product: 'GOD OF WAR',
      cust: 123,
      sale: 170,
      stor: 10,
      console: 'XBOX',
    },
    {
      codigo: 123,
      product: 'GOD OF WAR',
      cust: 123,
      sale: 170,
      stor: 10,
      console: 'XBOX',
    },
  ];

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
          <p>Produtos</p>
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
        <ProductTable>
          <thead>
            <tr>
              <th>CODIGO</th>
              <th>PRODUTO</th>
              <th>P. CUSTO</th>
              <th>P. VENDA</th>
              <th>P. ESTOQUE</th>
              <th>CONSOLE</th>
              <th>AÇÃO</th>
            </tr>
          </thead>

          {products.map((project) => (
            <tbody>
              <tr key={project.codigo}>
                <td id="codigo">{project.codigo}</td>
                <td id="produto">{project.product}</td>
                <td id="custo">{project.cust}</td>
                <td id="venda">{project.sale}</td>
                <td id="estoque">{project.stor}</td>
                <td id="console">{project.console}</td>
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
        </ProductTable>
      </Container>
    </>
  );
}
