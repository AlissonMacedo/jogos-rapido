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

import { Link } from 'react-router-dom';

import { Container } from './styles';

export default function SideBar() {
  return (
    <Container>
      <Link to="/dashboard">
        <div className="divheader">
          <IoLogoGameControllerB size={20} color="#fff" />
          <h1>Jogos Rapido</h1>
        </div>
      </Link>
      <div className="divBody">
        <section>
          <h4>MENU ADMIN</h4>
          <ul>
            <Link to="/produtos">
              <li>
                <IoLogoGameControllerA size={20} color="#fff" />
                <p>Produtos</p>
              </li>
            </Link>
            <Link to="/clientes">
              <li>
                <IoIosPeople size={20} color="#fff" />

                <p>Clientes</p>
              </li>
            </Link>
            <Link to="/pedidos">
              <li>
                <IoIosCreate size={20} color="#fff" />
                <p>Pedidos</p>
              </li>
            </Link>
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
