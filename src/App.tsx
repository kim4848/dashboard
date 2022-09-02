import { useState } from 'react';
import './App.css';
import { Button, IconButton, Toolbar } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import Menu from './Menu';

function App() {
  const [count, setCount]= useState(0)
  const [showMenu,setShowMenu]=useState(false)
  return (
    <div className="App">     
      <Toolbar>
      <IconButton onClick={()=>setShowMenu(false)}>
              <ChevronLeftIcon />
            </IconButton>
        <IconButton onClick={()=>setShowMenu(true)}>
          
          <MenuIcon></MenuIcon>
        </IconButton>       
        {Menu(showMenu)}
        </Toolbar> 
      <Button onClick={()=>{setCount(count+1)}} variant="outlined">Test</Button>
      <div>
      Count: {count}
      </div>
    </div>
  );
}

export default App;
