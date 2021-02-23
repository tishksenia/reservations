import styled from '@emotion/styled';

const hoverStateCss = {
  border: '1px solid var(--dark-gray)',

  background: 'var(--dark-gray)',
  color: '#FFFFFF',

  transition: 'all 0.9s',
  svg: {
    path: {
      stroke: 'white',
    },
  },
};

const Button = styled.button({
  marginRight: '6px',
  padding: '6px 15px',
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
  ':hover,:active,:focus': hoverStateCss,
});

export default Button;
