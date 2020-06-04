import React from 'react';
import PropTypes from 'prop-types';

import * as FontAwesome from 'react-icons/fa';
import { Container } from './styles';

function ButtonComponent({
  type,
  color,
  icon,
  iconSize,
  children,
  onClick,
  borderColor,
  ...rest
}) {
  const Icon = FontAwesome[icon];

  return (
    <Container
      type={type}
      color={color}
      onClick={onClick}
      {...rest}
      icon={icon}
      borderColor={borderColor}
    >
      {children && <span>{children}</span>}
      {icon && <Icon size={iconSize} />}
    </Container>
  );
}

ButtonComponent.propTypes = {
  type: PropTypes.string,
  color: PropTypes.string,
  icon: PropTypes.string,
  iconSize: PropTypes.number,
  children: PropTypes.string,
  onClick: PropTypes.func,
  borderColor: PropTypes.string,
};

ButtonComponent.defaultProps = {
  type: 'buttom',
  color: '#ddd',
  icon: '',
  iconSize: 18,
  children: '',
  onClick: () => {},
  borderColor: '#ddd',
};

export default ButtonComponent;
