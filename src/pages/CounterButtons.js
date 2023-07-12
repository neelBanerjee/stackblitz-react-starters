import React from 'react';
import { useCounterContext } from './CounterProvider';
//import { handleCalculation } from './counterUtils';

const CounterButtons = () => {
  const { dispatch, handleCalculation } = useCounterContext();

  return (
    <div>
      <button onClick={() => handleCalculation(dispatch, 'INCREMENT')}>
        Increment
      </button>
      &nbsp;
      <button onClick={() => handleCalculation(dispatch, 'DECREMENT')}>
        Decrement
      </button>
    </div>
  );
};

export default CounterButtons;
