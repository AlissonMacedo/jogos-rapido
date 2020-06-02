import React from 'react';
import PropTypes from 'prop-types';

import { MdArrowForward } from 'react-icons/md';
import { Button } from './styles';

function ButtonComponent({ text, size }) {
  return (
    <Button>
      <MdArrowForward color="#FFF" size={size} />
      <di className="divname">{text}</di>
    </Button>
  );
}

ButtonComponent.propTypes = {
  text: PropTypes.isRequired,
  size: PropTypes.isRequired,
};

export default ButtonComponent;
