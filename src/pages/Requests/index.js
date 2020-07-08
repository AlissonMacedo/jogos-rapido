import React, { useState } from 'react';

import { Link } from 'react-router-dom';
import { Form, Input } from '@rocketseat/unform';
import Swal from 'sweetalert2';
import NumberFormat from 'react-number-format';
import pt from 'date-fns/locale/pt';
import { format, parseISO } from 'date-fns';
import withReactContent from 'sweetalert2-react-content';
import { Container, SalesTable } from './styles';
import Button from '~/components/Button';

import Select from '~/components/Select';

import { Modal } from '~/components/Modal';

const pedidos = [
  {
    codigo: '123',
    data: '2020-06-14 21:27:47+00',
    cliente: 'mrgames',
    valor: '415,00',
    custo: '319,26',
    lucro: '95.74',
    envio: 'sedex',
    status: 'em analise',
  },
  {
    codigo: '123',
    data: '2020-06-14 21:27:47+00',
    cliente: 'mrgames',
    valor: '415,00',
    custo: '319,26',
    lucro: '95.74',
    envio: 'sedex',
    status: 'em analise',
  },
  {
    codigo: '123',
    data: '2020-06-14 21:27:47+00',
    cliente: 'mrgames',
    valor: '415,00',
    custo: '319,26',
    lucro: '95.74',
    envio: 'sedex',
    status: 'em analise',
  },
  {
    codigo: '123',
    data: '2020-06-14 21:27:47+00',
    cliente: 'mrgames',
    valor: '415,00',
    custo: '319,26',
    lucro: '95.74',
    envio: 'sedex',
    status: 'em analise',
  },
  {
    codigo: '123',
    data: '2020-06-14 21:27:47+00',
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
  const [showModal, setShowModal] = useState(false);
  const [requireObject, setRequireObject] = useState(null);
  const MySwal = withReactContent(Swal);
  const [loading, setLoading] = useState(false);

  function handleModalOpen(require) {
    setRequireObject(require);

    setShowModal(true);
  }

  function handleModalClose() {
    setRequireObject('');
    setShowModal(false);
  }

  function handleModal2() {
    setShowModal(false);
  }

  function handleSubmit() {
    setLoading(true);

    handleModal2();
  }

  const status = [
    {
      value: 'em analise',
      label: 'em analise',
    },
    {
      value: 'pago',
      label: 'pago',
    },
    {
      value: 'entregue',
      label: 'entregue',
    },
    {
      value: 'recusado',
      label: 'recusado',
    },
  ];

  const envio = [
    {
      value: 'SEDEX',
      label: 'SEDEX',
    },
    {
      value: 'TRANSP',
      label: 'TRANSP',
    },
    {
      value: 'EM MAOS',
      label: 'EM MAOS',
    },
  ];

  async function handleDeleteSubmit() {
    MySwal.fire({
      title: 'Tem certeza?',
      text: 'Você não poderá reverter isso!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      cancelButtonText: 'Cancelar',
      confirmButtonText: 'Sim, excluir!',
    }).then((result) => {
      if (result.value) {
        MySwal.fire('Exclusão!', 'Seu pedido foi excluido.', 'success');
        // api.delete(`matriculations/${id}`);
      }
    });
  }

  return (
    <Container>
      {showModal ? (
        <Modal show handleClose={handleModal2}>
          <Form initialData={requireObject} onSubmit={handleSubmit}>
            <div className="divider">
              <p className="title">Editar pedido</p>
            </div>

            <div className="body">
              <div className="row">
                <div>
                  <p className="label">Pedido:</p>
                  <Input
                    name="Numero do pedido"
                    type="text"
                    placeholder="Dê um nome ao projeto"
                    autoComplete="off"
                    className="input"
                    value="123123"
                    disabled
                  />
                </div>
                <div>
                  <p className="label">Data:</p>
                  <Input
                    name="Numero do pedido"
                    type="text"
                    placeholder="Dê um nome ao projeto"
                    autoComplete="off"
                    className="input"
                    value={format(
                      parseISO('2020-06-14 21:27:47+00'),
                      "dd'/'MM'/'yy",
                      { locale: pt }
                    )}
                    disabled
                  />
                </div>
                <div className="divselect">
                  <Select
                    label="Status:"
                    name="value"
                    placeholder="Status"
                    options={status}
                    styles={{ width: '200px' }}
                    defaultValue={() => {}}
                    onChange={() => {}}
                  />
                </div>
              </div>

              <div className="row">
                <div className="clientename">
                  <p className="label">Cliente:</p>
                  <Input
                    name="client"
                    type="text"
                    placeholder="Dê um nome ao cliente"
                    autoComplete="off"
                    className="input"
                    value="123123"
                    disabled
                  />
                </div>
              </div>

              <div className="row">
                <div className="divNumberFormat">
                  <p className="label">Valor:</p>
                  <NumberFormat
                    name="pricetotal"
                    displayType="input"
                    thousandSeparator
                    prefix="R$"
                    placeholder="321.321"
                    disabled
                    value="123.123"
                  />
                </div>
                <div className="divNumberFormat">
                  <p className="label">Custo:</p>
                  <NumberFormat
                    name="pricetotal"
                    displayType="input"
                    thousandSeparator
                    prefix="R$"
                    placeholder="321.321"
                    disabled
                    value="123.123"
                  />
                </div>
                <div className="divNumberFormat">
                  <p className="label">Lucro:</p>
                  <NumberFormat
                    name="pricetotal"
                    displayType="input"
                    thousandSeparator
                    prefix="R$"
                    placeholder="321.321"
                    disabled
                    value="123.123"
                  />
                </div>
                <div className="divselect" styles={{ width: '120px' }}>
                  <Select
                    label="Envio:"
                    name="value"
                    placeholder="Envio"
                    options={envio}
                    widthT={150}
                    defaultValue={() => {}}
                    onChange={() => {}}
                  />
                </div>
              </div>
            </div>

            <div className="footer">
              <Button type="submit" className="confirm">
                {loading ? 'Carregando...' : 'SALVAR'}
              </Button>
              <Button
                onClick={() => handleModalClose()}
                text="CANCELAR"
                className="cancel"
              >
                Cancelar
              </Button>
            </div>
          </Form>
        </Modal>
      ) : null}
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
            disable
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

        {pedidos.map((require) => (
          <tbody>
            <tr key={require.codigo}>
              <td id="codigo">{require.codigo}</td>
              <td id="data">
                {format(parseISO(require.data), "dd'/'MM'/'yy", { locale: pt })}
              </td>
              <td id="cliente">{require.cliente}</td>
              <td id="valor">{require.valor}</td>
              <td id="custo">{require.custo}</td>
              <td id="lucro">{require.lucro}</td>
              <td id="envio">{require.envio}</td>
              <td id="status">{require.status}</td>
              <td id="acao">
                <div>
                  <Button
                    icon="FaExchangeAlt"
                    className="buttonLeft"
                    onClick={() => handleModalOpen(require)}
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
                    onClick={() => handleDeleteSubmit()}
                    className="buttonRight"
                  />
                </div>
              </td>
            </tr>
          </tbody>
        ))}
      </SalesTable>
    </Container>
  );
}
