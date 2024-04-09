import React, { useState } from 'react';
import { useDebounce } from './useDebounce';

const App = () => {
  const[inputValue,setInputValue]= useState('');
  const debouncingValue = useDebounce(inputValue,2);
  return (
    <>

    <input
      type="text"
      value={inputValue}
      onChange={(e) => setInputValue(e.target.value)}
      placeholder="Search..."
    />
    <div>The value of debouncing - {debouncingValue}</div>
    </>
  );
}

export default App