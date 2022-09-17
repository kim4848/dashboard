import { useState } from "react";
import "./App.css";
import { Button, Toolbar } from "@mui/material";
import Menu from "./Menu";

function App() {
  const [count, setCount] = useState(0);
  const [showMenu, setShowMenu] = useState(false);

  const hide = () => {
    console.log("click");
    setShowMenu(false);
  };
  return (
    <div className="App">
      <Toolbar>
        <Menu open={showMenu}></Menu>
      </Toolbar>
      <Button
        onClick={() => {
          setCount(count + 1);
        }}
        variant="outlined"
      >
        Test
      </Button>
      <div>Count: {count}</div>
    </div>
  );
}

export default App;
