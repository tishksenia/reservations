import styled from '@emotion/styled';
import React, { FunctionComponent } from 'react';

interface Props {
  children: JSX.Element;
  className?: string;
}

const Wrapper: FunctionComponent<Props> = ({ className, children }: Props) => {
  return <div className={className}>{children}</div>;
};

const AppWrapper = styled(Wrapper)<Props>({
  padding: '10px',
  background: 'white',
  width: '70vw',
  height: 'calc(100vh - 60px)',
  margin: '20px auto',
  boxShadow: '0px -1px 8px 0px rgba(50, 50, 50, 0.17)',
});

export default AppWrapper;
