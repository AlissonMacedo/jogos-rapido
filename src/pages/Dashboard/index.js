import React from 'react';

import { Form } from '@rocketseat/unform';
import DatePicker from '~/components/DatePicker';

import {
  Container,
  SalesTable,
  ResumesTable,
  ResumesTableTotal,
} from './styles';

const projects = [
  {
    codigo: '001',
    name: 'GOD OF WAR',
    status: 'Separado - Aguardando',
    valor: '240,00',
  },
  {
    codigo: '123',
    name: 'Fifa 2020',
    status: 'Separado - Aguardando',
    valor: '120,00',
  },
  {
    codigo: '321',
    name: 'Zumba',
    status: 'Separado - Aguardando',
    valor: '240,00',
  },
  {
    codigo: '001',
    name: 'GOD OF WAR',
    status: 'Separado - Aguardando',
    valor: '240,00',
  },
  {
    codigo: '123',
    name: 'Fifa 2020',
    status: 'Separado - Aguardando',
    valor: '120,00',
  },
  {
    codigo: '321',
    name: 'Zumba',
    status: 'Separado - Aguardando',
    valor: '240,00',
  },
  {
    codigo: '001',
    name: 'GOD OF WAR',
    status: 'Separado - Aguardando',
    valor: '240,00',
  },
  {
    codigo: '123',
    name: 'Fifa 2020',
    status: 'Separado - Aguardando',
    valor: '120,00',
  },
  {
    codigo: '321',
    name: 'Zumba',
    status: 'Separado - Aguardando',
    valor: '240,00',
  },
  {
    codigo: '001',
    name: 'GOD OF WAR',
    status: 'Separado - Aguardando',
    valor: '240,00',
  },
  {
    codigo: '123',
    name: 'Fifa 2020',
    status: 'Separado - Aguardando',
    valor: '120,00',
  },
  {
    codigo: '321',
    name: 'Zumba',
    status: 'Separado - Aguardando',
    valor: '240,00',
  },
  {
    codigo: '001',
    name: 'GOD OF WAR',
    status: 'Separado - Aguardando',
    valor: '240,00',
  },
  {
    codigo: '123',
    name: 'Fifa 2020',
    status: 'Separado - Aguardando',
    valor: '120,00',
  },
  {
    codigo: '321',
    name: 'Zumba',
    status: 'Separado - Aguardando',
    valor: '240,00',
  },
  {
    codigo: '001',
    name: 'GOD OF WAR',
    status: 'Separado - Aguardando',
    valor: '240,00',
  },
];

const resumos = [
  {
    title: 'Pedidos',
    valor: '123',
  },
  {
    title: 'Valor Total',
    valor: '77.326.82',
  },
  {
    title: 'Custo Total',
    valor: '69.012.90',
  },
  {
    title: 'Lucro Total',
    valor: '8.313.92',
  },
];

const resumos2 = [
  {
    title: 'Produtos em Estoque:',
    valor: '1985',
  },
  {
    title: 'Custo Total do Estoque:',
    valor: '207.215.33',
  },
  {
    title: 'Valor de Venda Total do Estoque:',
    valor: '1213.697.40',
  },
  {
    title: 'Lucro Total do Estoque:',
    valor: '6482.07',
  },
];

function Dashboard() {
  return (
    <>
      <Container>
        <div className="header" />

        <div className="body">
          <section className="lastsale">
            <div>
              <header>
                <p>Últimas vendas</p>
                <p>P</p>
              </header>
              <SalesTable>
                <thead>
                  <tr>
                    <th>CODIGO</th>
                    <th>PRODUTO</th>
                    <th>STATUS</th>
                    <th>V. VENDA</th>
                  </tr>
                </thead>

                {projects.map((project) => (
                  <tbody>
                    <tr key={project.codigo}>
                      <td id="codigo">{project.codigo}</td>
                      <td id="produto">{project.name}</td>
                      <td id="status">
                        <div>{project.status}</div>
                      </td>
                      <td id="venda">{project.valor}</td>
                    </tr>
                  </tbody>
                ))}
              </SalesTable>
            </div>
          </section>
          <section className="resume">
            <div className="table">
              <header>
                <p>Resumo</p>
              </header>
              <div>
                <Form className="filter">
                  <div className="inputDate">
                    <p>Filtro:</p>
                    <DatePicker
                      showPopperArrow={false}
                      className="formInput"
                      name="filterInitial"
                      placeholder="Início"
                    />
                  </div>
                  <div className="inputDate">
                    <DatePicker
                      showPopperArrow
                      className="formInput"
                      name="filterFim"
                      placeholder="Fim"
                    />
                  </div>
                  <button className="search" type="submit">
                    Pesquisar
                  </button>
                </Form>
              </div>
              <ResumesTable>
                {resumos.map((project) => (
                  <tbody>
                    <tr key={project.title}>
                      <td id="title">{project.title}</td>

                      <td id="venda">{project.valor}</td>
                    </tr>
                  </tbody>
                ))}
              </ResumesTable>
            </div>

            <div className="table">
              <header>
                <p>Resumo Total</p>
              </header>
              <ResumesTableTotal>
                {resumos2.map((project) => (
                  <tbody>
                    <tr key={project.title}>
                      <td id="title">{project.title}</td>
                      <td id="produto">{project.valor}</td>
                    </tr>
                  </tbody>
                ))}
              </ResumesTableTotal>
            </div>
          </section>
        </div>
      </Container>
    </>
  );
}

export default Dashboard;
