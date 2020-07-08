import React from 'react';
import Select from 'react-select';
import PropTypes from 'prop-types';

import { Container } from './styles';

export default function SelectComponent({
  label,
  placeholder,
  name,
  options,
  onChange,
  defaultValue,
  widthT,
}) {
  const width = widthT || '200px';
  const customStyles = {
    control: () => ({
      display: 'flex',
      border: '1px solid #ccc',
      borderRadius: 4,
      height: 40,
      width,
      padding: '0 7px',
      color: '#999',
      marginLeft: '20px',
    }),
    option: (provided, state) => ({
      ...provided,
      color: state.isSelected ? '#fff' : '#999',
      padding: 10,
    }),
    singleValue: (provided) => {
      const color = '#999';
      return { ...provided, color };
    },
  };

  return (
    <Container>
      <strong>{label}</strong>
      <Select
        name={name}
        styles={customStyles}
        isSearchable={false}
        options={options}
        onChange={onChange}
        defaultValue={defaultValue}
        placeholder={placeholder}
      />
    </Container>
  );
}

SelectComponent.propTypes = {
  name: PropTypes.string.isRequired,
  widthT: PropTypes.number,
  options: PropTypes.oneOfType([PropTypes.array, PropTypes.object]).isRequired,
  onChange: PropTypes.func.isRequired,
  defaultValue: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
  label: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
};
