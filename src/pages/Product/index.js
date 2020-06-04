import React from 'react';
import { useHistory } from 'react-router-dom';
import Button from '~/components/Button';

import { Container, ProjectTable } from './styles';

const projects = [
  {
    title: 'DEv',
    description: 'teste',
    name: 'Alisson',
    tag: 'Dev',
  },
  {
    title: 'DEv',
    description: 'teste',
    name: 'Alisson',
    tag: 'Dev',
  },
  {
    title: 'DEv',
    description: 'teste',
    name: 'Alisson',
    tag: 'Dev',
  },
];

export default function Product() {
  const history = useHistory();

  function handleClick() {
    history.push('/registrar-produto');
  }
  return (
    <>
      <Container>
        <div className="header" />
        <section className="titleOptions">
          <div>
            <h3>Lista de Produtos</h3>
          </div>
          <div className="divOptionsRight">
            <Button icon="FaLaptopCode" onClick={handleClick}>
              Novo Produto
            </Button>

            <Button color="#eee" icon="FaListUl" onClick={() => {}}>
              Lista de Preços
            </Button>

            <input placeholder="Pesquisar..." />
          </div>
        </section>

        <section className="body">
          <div>
            <ProjectTable>
              <thead>
                <tr>
                  <th>CODIGO</th>
                  <th>PRODUTO</th>
                  <th>P. CUSTO</th>
                  <th>P. VENDA</th>
                  <th>P. ESTOQUE</th>
                  <th>CONSOLE</th>
                  <th id="acoes">AÇÕES</th>
                </tr>
              </thead>

              {projects.map((project) => (
                <tbody>
                  <tr key={project.id}>
                    <td id="codigo">{project.title}</td>
                    <td id="title">{project.description}</td>
                    <td id="custo">{project.description}</td>
                    <td id="venda">{project.description}</td>
                    <td id="estoque">{project.description}</td>
                    <td id="cosnole">{project.description}</td>

                    <td id="acaoBT">
                      <button
                        type="button"
                        id="buttonEditar"
                        onClick={() => {}}
                      >
                        editar
                      </button>

                      <button
                        type="button"
                        id="buttonApagar"
                        onClick={() => {}}
                      >
                        apagar
                      </button>
                    </td>
                  </tr>
                </tbody>
              ))}
            </ProjectTable>
          </div>
        </section>
      </Container>
    </>
  );
}
