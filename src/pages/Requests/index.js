import React from 'react';

import { Link } from 'react-router-dom';
import { Container, SalesTable } from './styles';
import Button from '~/components/Button';

import Select from '~/components/Select';

const pedidos = [
  {
    codigo: '123',
    data: '30/05/2020',
    cliente: 'mrgames',
    valor: '415,00',
    custo: '319,26',
    lucro: '95.74',
    envio: 'sedex',
    status: 'em analise',
  },
  {
    codigo: '123',
    data: '30/05/2020',
    cliente: 'mrgames',
    valor: '415,00',
    custo: '319,26',
    lucro: '95.74',
    envio: 'sedex',
    status: 'em analise',
  },
  {
    codigo: '123',
    data: '30/05/2020',
    cliente: 'mrgames',
    valor: '415,00',
    custo: '319,26',
    lucro: '95.74',
    envio: 'sedex',
    status: 'em analise',
  },
  {
    codigo: '123',
    data: '30/05/2020',
    cliente: 'mrgames',
    valor: '415,00',
    custo: '319,26',
    lucro: '95.74',
    envio: 'sedex',
    status: 'em analise',
  },
  {
    codigo: '123',
    data: '30/05/2020',
    cliente: 'mrgames',
    valor: '415,00',
    custo: '319,26',
    lucro: '95.74',
    envio: 'sedex',
    status: 'em analise',
  },
  {
    codigo: '123',
    data: '30/05/2020',
    cliente: 'mrgames',
    valor: '415,00',
    custo: '319,26',
    lucro: '95.74',
    envio: 'sedex',
    status: 'em analise',
  },
  {
    codigo: '123',
    data: '30/05/2020',
    cliente: 'mrgames',
    valor: '415,00',
    custo: '319,26',
    lucro: '95.74',
    envio: 'sedex',
    status: 'em analise',
  },
  {
    codigo: '123',
    data: '30/05/2020',
    cliente: 'mrgames',
    valor: '415,00',
    custo: '319,26',
    lucro: '95.74',
    envio: 'sedex',
    status: 'em analise',
  },
  {
    codigo: '123',
    data: '30/05/2020',
    cliente: 'mrgames',
    valor: '415,00',
    custo: '319,26',
    lucro: '95.74',
    envio: 'sedex',
    status: 'em analise',
  },
  {
    codigo: '123',
    data: '30/05/2020',
    cliente: 'mrgames',
    valor: '415,00',
    custo: '319,26',
    lucro: '95.74',
    envio: 'sedex',
    status: 'em analise',
  },
  {
    codigo: '123',
    data: '30/05/2020',
    cliente: 'mrgames',
    valor: '415,00',
    custo: '319,26',
    lucro: '95.74',
    envio: 'sedex',
    status: 'em analise',
  },
  {
    codigo: '123',
    data: '30/05/2020',
    cliente: 'mrgames',
    valor: '415,00',
    custo: '319,26',
    lucro: '95.74',
    envio: 'sedex',
    status: 'em analise',
  },
  {
    codigo: '123',
    data: '30/05/2020',
    cliente: 'mrgames',
    valor: '415,00',
    custo: '319,26',
    lucro: '95.74',
    envio: 'sedex',
    status: 'em analise',
  },
];

const value = [
  {
    value: 1,
    label: 1,
  },
  {
    value: 2,
    label: 2,
  },
  {
    value: 3,
    label: 3,
  },
];

export default function Requests() {
  return (
    <>
      <Container>
        <div className="header" />

        <div className="table">
          <p>Pedidos</p>
          <div className="divRight">
            <input placeholder="pesquisar..." />
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
        <SalesTable>
          <thead>
            <tr>
              <th>CODIGO</th>
              <th>DATA</th>
              <th>CLIENTE</th>
              <th>VALOR</th>
              <th>CUSTO</th>
              <th>LUCRO</th>
              <th>ENVIO</th>
              <th>STATUS</th>
              <th>AÇÃO</th>
            </tr>
          </thead>

          {pedidos.map((project) => (
            <tbody>
              <tr key={project.codigo}>
                <td id="codigo">{project.codigo}</td>
                <td id="data">{project.data}</td>
                <td id="cliente">{project.cliente}</td>
                <td id="valor">{project.valor}</td>
                <td id="custo">{project.custo}</td>
                <td id="lucro">{project.lucro}</td>
                <td id="envio">{project.envio}</td>
                <td id="status">{project.status}</td>
                <td id="acao">
                  <div>
                    <Button
                      icon="FaExchangeAlt"
                      onClick={() => {}}
                      className="buttonLeft"
                    />

                    <Link
                      to="route"
                      target="_blank"
                      onClick={(event) => {
                        event.preventDefault();
                        window.open('/pedidos/imprimir');
                      }}
                    >
                      <Button icon="FaPrint" onClick={() => {}} />
                    </Link>
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
        </SalesTable>
      </Container>
    </>
  );
}
