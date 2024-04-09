import React from 'react';
import { useTimer } from './useTimer';

const App = () => {
  const time = useTimer();
  return (
    <div>The timer is {time}</div>
  )
}

export default App