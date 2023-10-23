import PlaceIcon from '@mui/icons-material/Place';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import EmailIcon from '@mui/icons-material/Email';
import { FooterListType } from '../types/type';

export const footerList: FooterListType[] = [
    {
        title: 'ADRESSE',
        icon: <PlaceIcon fontSize='large'/>,
        text: '27 Bd de Strasbourg, 34000 Montpellier',

    },
    {
        title: 'TELEPHONE',
        icon: <LocalPhoneIcon fontSize='large'/>,
        text: '06 11 68 15 30',

    },
    {
        title: 'ADRESSE',
        icon: <EmailIcon fontSize='large'/>,
        text: 'merikos.tattos@gmail.com',

    }
]