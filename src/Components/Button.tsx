import styled from '@emotion/styled';
import React from 'react';

const Button = styled.button({
  background: 'transparent',
  border: '1px solid var(--light-gray)',
  outline: 0,
  padding: '6px 20px',
  cursor: 'pointer',
  color: 'var(--light-gray)',
  fontWeight: 'bold',
  borderRadius: '5px',
  marginRight: '6px',
  ':last-of-type': {
    marginRight: 0,
  },
  ':hover': {
    background: 'var(--dark-gray)',
    border: '1px solid var(--dark-gray)',
    color: '#FFFFFF',
    transition: 'all 0.9s',
  },
  ':active': {
    background: 'var(--dark-gray)',
    border: '1px solid var(--dark-gray)',
    color: '#FFFFFF',
  },
  ':focus': {
    background: 'var(--dark-gray)',
    border: '1px solid var(--dark-gray)',
    color: '#FFFFFF',
  },
});

export default Button;
