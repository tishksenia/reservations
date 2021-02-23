import React from 'react';
import styled from '@emotion/styled';

interface Props {
  className?: string;
}

const ArrowSvg = ({ className }: Props) => (
  <svg
    width="15"
    height="18"
    viewBox="0 0 40 40"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}>
    <path
      d="M1.99995 18L35 35"
      strokeWidth="5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M1.99995 18L35 2.00003"
      strokeWidth="5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const ArrowLeft = styled(ArrowSvg)({
  display: 'flex',
  path: {
    stroke: 'var(--light-gray)',
  },
});

export const ArrowRight = styled(ArrowLeft)`
  & {
    transform: rotate(180deg);
  }
`;
