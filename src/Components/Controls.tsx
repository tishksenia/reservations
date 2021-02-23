import React, { FunctionComponent } from 'react';
import styled from '@emotion/styled';

import Button from './Button';
import { ArrowLeft, ArrowRight } from './Arrows';

import { useAppDispatch, useAppSelector } from '../store/hooks';
import { setTimeRangeType, TimeRangeType } from '../store/slices/timeSlice';

const ControlsWrapper = styled.div({
  display: 'flex',
  justifyContent: 'space-between',
});

const Controls: FunctionComponent = () => {
  const timeRangeType = useAppSelector((state) => state.time.timeRangeType);
  const dispatch = useAppDispatch();

  const setType = (type: TimeRangeType) => {
    dispatch(setTimeRangeType(type));
  };

  return (
    <ControlsWrapper>
      <div>
        {/* TODO: add active prop, which value is depending on timeRangeType */}
        <Button onClick={() => setType('day')}>Day</Button>
        <Button onClick={() => setType('month')}>Month</Button>
        <Button onClick={() => setType('week')}>Week</Button>
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
