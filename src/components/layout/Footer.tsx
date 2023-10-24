import React from 'react'
import Divider from '@mui/material/Divider';
import { Box, Link } from '@mui/material';
import { footerList } from '@/utils/list/FooterList';
import { menuList } from '@/utils/list/MenuList';
import FooterComponent from '../FooterComponent';
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemButton from "@mui/material/ListItemButton";
import List from "@mui/material/List";
import  FooterTop  from './footerComponents/FooterTop';

export default function Footer() {
    return (
        <Box sx={{ flexGrow: 1 }} className='mt-10'>
            <Divider className='mb-10' />
            <FooterTop FooterList={footerList} />
            <div>
                <List>
                    {menuList.map((item, index) => (
                        <Link href={item.path} key={index} color="inherit" underline="hover">
                            <ListItem disablePadding>
                                <ListItemText primary={item.title} />
                            </ListItem>
                        </Link>
                    ))}
                </List>
            </div>
        </Box>
    )
}
