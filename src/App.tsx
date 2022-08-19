import { useState } from 'react';
import './App.css';
import { Button } from '@mui/material';

function App() {
  const [count, setCount]= useState(0)
  return (
    <div className="App">      
      <Button onClick={()=>{setCount(count+1)}} variant="outlined">Test</Button>
      <div>
      Count: {count}
      </div>
    </div>
  );
}

export default App;
