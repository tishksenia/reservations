import React, { FunctionComponent } from 'react';
import Button from './Button';
import arrowLeft from '../static/media/icons/arrow-left.svg';
import styled from '@emotion/styled';

const ControlsWrapper = styled.div({
  display: 'flex',
  justifyContent: 'space-between',
});

const Controls: FunctionComponent = () => {
  return (
    <ControlsWrapper>
      <div>
        <Button>Day</Button>
        <Button>Month</Button>
        <Button>Week</Button>
      </div>
      <div>
        <Button>
          <img src={arrowLeft} width="10" />
        </Button>
        <Button>
          <img
            src={arrowLeft}
            width="10"
            style={{
              transform: 'rotate(180deg)',
            }}
          />
        </Button>
      </div>
    </ControlsWrapper>
  );
};

export default Controls;
