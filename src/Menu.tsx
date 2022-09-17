import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import { IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

type Anchor = "top" | "left" | "bottom" | "right";
interface MenuState {
  open: boolean;
}
export default function Menu(open: MenuState) {
  const [showMenu, setShowMenu] = React.useState(open.open);

  const list = (anchor: Anchor) => (
    <Box sx={{ width: 250 }} role="presentation">
      <List>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>{<InboxIcon />}</ListItemIcon>
            <ListItemText primary={"test"} />
          </ListItemButton>
        </ListItem>
      </List>
      <Divider />
      <List>
        {["All mail", "Trash", "Spam"].map((text, index) => (
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
        <IconButton onClick={() => setShowMenu(true)}>
          <MenuIcon></MenuIcon>
        </IconButton>
        <Drawer anchor={"left"} open={showMenu}>
          {" "}
          <Divider></Divider>
          <IconButton
            sx={{ width: 50, height: 50 }}
            size="small"
            onClick={() => setShowMenu(false)}
          >
            <ChevronLeftIcon />
          </IconButton>
          <Divider></Divider>
          {list("left")}
        </Drawer>
      </React.Fragment>
    </div>
  );
}
