import React from 'react';
import PropTypes from 'prop-types';

// import Header from '~/components/Header';

import { Wrapper } from './styles';
import SideBar from '~/components/SideBar';

export default function DefaultLayout({ children }) {
  return (
    <>
      <SideBar />
      <Wrapper>
        {/* <Header /> */}
        {children}
      </Wrapper>
    </>
  );
}

DefaultLayout.propTypes = {
  children: PropTypes.element.isRequired,
};
