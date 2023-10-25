import React from 'react'
import Divider from '@mui/material/Divider';
import { Box } from '@mui/material';
import { footerList } from '@/utils/list/FooterList';
import { reseauList } from '@/utils/list/ReseauList';

import FooterTop from './footerComponents/FooterTop';

import FooterBottom from './footerComponents/FooterBottom';


export default function Footer() {
    return (
        <Box sx={{ flexGrow: 1 }} className='mt-10 '>
            <Divider className='mb-10' />
            <FooterTop FooterList={footerList} />
            <Divider />
            <FooterBottom reseauList={reseauList} />
        </Box>
    )
}
