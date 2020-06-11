import React from 'react';
import { Switch } from 'react-router-dom';
import Route from './Route';

import SignIn from '~/pages/SignIn';

import Dashboard from '~/pages/Dashboard';

import Product from '~/pages/Product';
import RegisterProduct from '~/pages/Product/RegisterProduct';

import Request from '~/pages/Requests';
import PrintResquest from '~/pages/Requests/printREquest';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={SignIn} />

      <Route path="/dashboard" component={Dashboard} />
      <Route path="/produto" component={Product} />
      <Route path="/registrar-produto" component={RegisterProduct} />

      <Route path="/pedidos" exact component={Request} />
      <Route path="/pedidos/imprimir" component={PrintResquest} />
    </Switch>
  );
}
