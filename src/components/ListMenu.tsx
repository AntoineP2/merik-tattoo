import React from "react";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import Box from "@mui/material/Box";
import Link from "next/link";

interface ChildComponentProps {
  drawerHandleClick: () => void;
}

export default function ListMenu(props: ChildComponentProps) {
  return (
    <Box
      sx={{ width: 250 }}
      role="presentation"
      onClick={props.drawerHandleClick}
    >
      <List>
        <Link href={"/"}>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <InboxIcon />
              </ListItemIcon>
              <ListItemText primary="Présentation" />
            </ListItemButton>
          </ListItem>
        </Link>
        <Link href={"/"}>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <MailIcon />
              </ListItemIcon>
              <ListItemText primary="Projet Disponible" />
            </ListItemButton>
          </ListItem>
        </Link>
        <Link href={"/"}>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <MailIcon />
              </ListItemIcon>
              <ListItemText primary="Booking" />
            </ListItemButton>
          </ListItem>
        </Link>
        <Link href={"/arenaback"}>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <MailIcon />
              </ListItemIcon>
              <ListItemText primary="Arena Back" />
            </ListItemButton>
          </ListItem>
        </Link>
      </List>
    </Box>
  );
}
