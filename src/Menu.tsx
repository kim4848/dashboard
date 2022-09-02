import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import { IconButton } from '@mui/material';

type Anchor = 'top' | 'left' | 'bottom' | 'right';

export default function Menu(open:boolean) {
const [showMenu, setShowMenu]=React.useState(false)

  const toggleDrawer =
    (anchor: Anchor, open: boolean) =>
    (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event &&
        event.type === 'keydown' &&
        ((event as React.KeyboardEvent).key === 'Tab' ||
          (event as React.KeyboardEvent).key === 'Shift')
      ) {
        return;
      }

      
    };

  const list = (anchor: Anchor) => (
    <Box
      sx={{ width:  250 }}
      role="presentation"     
    >
      <List>
       
          <ListItem  disablePadding>
            <ListItemButton>
              <ListItemIcon>
                { <InboxIcon />}
              </ListItemIcon>
              <ListItemText primary={"test"} />
            </ListItemButton>
          </ListItem>
       
      </List>
      <Divider />
      <List>
        {['All mail', 'Trash', 'Spam'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <div>     
        <React.Fragment>
          <Button onClick={()=>setShowMenu(true)}>Open</Button>
          <Drawer
            anchor={"left"}
            open={open}
          >  <Divider></Divider>
          
               <IconButton onClick={()=>setShowMenu(false)}>
              <ChevronLeftIcon />
            </IconButton>
        <IconButton onClick={()=>setShowMenu(true)}></IconButton>
          <Divider></Divider>
          {list("left")}           
          </Drawer>
        </React.Fragment>    
    </div>
  );
}
