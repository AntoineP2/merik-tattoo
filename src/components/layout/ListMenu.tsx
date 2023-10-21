import React from "react";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Box from "@mui/material/Box";
import Link from "next/link";
import {menuList} from "../../utils/MenuList"


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
        {menuList.map((item, index) => (
          <Link href={item.path} key={index}>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  {item.icon}
                </ListItemIcon>
                <ListItemText primary={item.title} />
              </ListItemButton>
            </ListItem>
          </Link>
        ))}

      </List>
    </Box>
  );
}
