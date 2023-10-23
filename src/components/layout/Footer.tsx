import React from 'react'
import Divider from '@mui/material/Divider';
import { Box } from '@mui/material';
import { footerList } from '@/utils/list/FooterList';
import FooterComponent from '../FooterComponent';


export default function Footer() {
    return (
        <Box sx={{ flexGrow: 1 }} className='mb-10'>
            <Divider className='mb-10' />
            {footerList.map((item, index) => (
                <FooterComponent FooterList={item} key={index}/>
            ))}
            
        </Box>
    )
}
