import styled from '@emotion/styled';
import React from 'react';

const Button = styled.button({
  marginRight: '6px',
  padding: '6px 20px',
  outline: 0,
  border: '1px solid var(--light-gray)',

  background: 'transparent',
  borderRadius: '5px',

  cursor: 'pointer',
  color: 'var(--light-gray)',
  fontWeight: 'bold',

  transition: 'all 0.3s',
  ':last-of-type': {
    marginRight: 0,
  },
  ':hover': {
    border: '1px solid var(--dark-gray)',

    background: 'var(--dark-gray)',
    color: '#FFFFFF',

    transition: 'all 0.9s',
  },
  ':active': {
    border: '1px solid var(--dark-gray)',

    background: 'var(--dark-gray)',
    color: '#FFFFFF',
  },
  ':focus': {
    color: '#FFFFFF',
    
    background: 'var(--dark-gray)',
    border: '1px solid var(--dark-gray)',
  },
});

export default Button;
