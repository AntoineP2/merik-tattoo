import React from 'react'
import Divider from '@mui/material/Divider';
import { Box } from '@mui/material';
import { ContactList } from '@/utils/list/ContactList';
import FooterBottom from './footerComponents/FooterBottom';


export default function Footer() {
    return (
        <Box sx={{ flexGrow: 1 }} className='mt-10 bg-neutral-900'>
            <Divider />
            <FooterBottom />
        </Box>
    )
}
