import React from 'react';
import { Switch } from 'react-router-dom';
import Route from './Route';

import SignIn from '~/pages/SignIn';

import Dashboard from '~/pages/Dashboard';

import Product from '~/pages/Product';
import NewProduct from '~/pages/Product/NewProduct';

import Request from '~/pages/Requests';
import PrintResquest from '~/pages/Requests/printREquest';

import Client from '~/pages/Client';
import NewClient from '~/pages/Client/NewCliente';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={SignIn} />

      <Route path="/dashboard" component={Dashboard} />
      <Route path="/produtos" component={Product} />
      <Route path="/novo-produto" component={NewProduct} />

      <Route path="/pedidos" exact component={Request} />
      <Route path="/pedidos/imprimir" component={PrintResquest} />

      <Route path="/clientes" exact component={Client} />
      <Route path="/clientes/novo-cliente" component={NewClient} />
    </Switch>
  );
}
