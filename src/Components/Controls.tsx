import React, { FunctionComponent } from 'react';
import styled from '@emotion/styled';

import Button from './Button';
import { ArrowLeft, ArrowRight } from './Arrows';

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
          <ArrowLeft />
        </Button>
        <Button>
          <ArrowRight />
        </Button>
      </div>
    </ControlsWrapper>
  );
};

export default Controls;
