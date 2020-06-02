import React from 'react';

import {
  IoLogoGameControllerB,
  IoIosPeople,
  IoIosCreate,
  IoIosCart,
  IoIosPrint,
  IoMdBuild,
  IoMdWallet,
  IoLogoGameControllerA,
} from 'react-icons/io';
import { Container } from './styles';

export default function SideBar() {
  return (
    <Container>
      <div className="divheader">
        <IoLogoGameControllerB size={20} color="#fff" />
        <h1>Jogos Rapido</h1>
      </div>
      <div className="divBody">
        <section>
          <h4>MENU ADMIN</h4>
          <ul>
            <li>
              <IoLogoGameControllerA size={20} color="#fff" />
              <p>Produtos</p>
            </li>
            <li>
              <IoIosPeople size={20} color="#fff" />

              <p>Clientes</p>
            </li>
            <li>
              <IoIosCreate size={20} color="#fff" />
              <p>Pedidos</p>
            </li>
            <li>
              <IoIosCart size={20} color="#fff" />
              <p>Pre-vendas</p>
            </li>
            <li>
              <IoMdWallet size={20} color="#fff" />
              <p>Compras</p>
            </li>
            <li>
              <IoIosPrint size={20} color="#fff" />
              <p>Relatórios</p>
            </li>
            <li>
              <IoMdBuild size={20} color="#fff" />
              <p>Configurações</p>
            </li>
          </ul>
        </section>
      </div>
    </Container>
  );
}
