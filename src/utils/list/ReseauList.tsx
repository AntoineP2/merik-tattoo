import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import { MenuListType } from '../types/type';

export const reseauList: MenuListType[] = [
    {
        title: 'INSTAGRAM',
        icon: <InstagramIcon fontSize="large" />,
        path: 'https://www.instagram.com/merikos.mi.corazon/',

    },
    {
        title: 'FACEBOOK',
        icon: <FacebookIcon fontSize="large"/>,
        path: 'https://www.facebook.com/merikmaldito'
    }
]