import React from 'react'
import Divider from '@mui/material/Divider';
import { Link } from '@mui/material';
import { menuList } from '@/utils/list/MenuList';
import { MenuListType } from '@/utils/types/type';
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import List from "@mui/material/List";
import Image from 'next/image'


interface FooterBottomProps {
    reseauList: MenuListType[];
}

export default function FooterBottom(props: FooterBottomProps) {
  return (
    <div>
        <div className='flex md:justify-around md:flex-row flex-col pt-4 pb-4 bg-neutral-900 '>
                <Image src='/image-merikos.jpg' alt='Le logo de Merik' width={200} height={200} />
                <div>
                <p className='font-extrabold text-lg md:mt-0 mt-8'> NAVIGATION </p>
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
                <div>
                    <p className='font-extrabold text-lg md:mt-0 mt-8'>CERTIFICATION</p>
                </div>
            </div>
            <Divider />
            <div className="pt-4 pb-4 bg-neutral-950 md:flex md:justify-center">
                    {props.reseauList.map((item, index) => (
                        <Link href={item.path} key={index} color="inherit" className='pr-3'>
                            {item.icon}
                        </Link>
                    ))}
            </div>
    </div>
  )
}
