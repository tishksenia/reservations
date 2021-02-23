import React, { FunctionComponent } from 'react';
interface Props {
  start?: number;
  end?: number;
  step?: number;
}

const Day: FunctionComponent<Props> = ({ start, end, step }: Props) => {
  return <div>{/* {start || 0}
    {end || 4}
    {step || 15} */}</div>;
};

export default Day;
