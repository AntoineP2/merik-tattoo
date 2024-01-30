import React from 'react'
import Divider from '@mui/material/Divider';
import { Link, ListItemIcon } from '@mui/material';
import { menuList } from '@/utils/list/MenuList';
import { ContactListType } from '@/utils/types/type';
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import List from "@mui/material/List";
import Image from 'next/image'
import { ContactList } from '@/utils/list/ContactList';




export default function FooterBottom() {
  return (
    <div>
        <div className='flex md:justify-around md:flex-row flex-col pt-4 pb-4 '>
                <Image src='/image-merikos.jpg' alt='Le logo de Merik' width={200} height={200} />
                <div>
                <div className="flex justify-center items-center">
                        <p className='font-extrabold text-lg md:mt-0 mt-8'>Navigation</p>
                    </div>
                <List className="flex justify-center items-center flex-col">
                    {menuList.map((item, index) => (
                        <Link href={item.path} key={index} color="inherit" underline="hover">
                            <ListItem disablePadding>
                                <ListItemText primary={item.title} />
                            </ListItem>
                        </Link>
                    ))}
                </List>
                </div>
                <div>
                    <div className="flex justify-center items-center">
                        <p className='font-extrabold text-lg md:mt-0 mt-8'>CONTACT</p>
                    </div>
                    <List>
                    {ContactList.map((item, index) => (
                        <Link href={item.path} key={index} color="inherit" underline="hover">
                            <ListItem disablePadding>
                                <ListItemIcon>{item.icon}</ListItemIcon>
                                <ListItemText primary={item.text} />
                            </ListItem>
                        </Link>
                    ))}
                </List>
                </div>
            </div>
    </div>
  )
}
