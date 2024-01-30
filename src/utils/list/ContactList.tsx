import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import PlaceIcon from '@mui/icons-material/Place';
import EmailIcon from '@mui/icons-material/Email';
import { ContactListType} from '../types/type';

export const ContactList: ContactListType[] = [
    {
        title: 'ADRESSE',
        icon: <PlaceIcon />,
        path: '',
        text: '27 Bd de Strasbourg, 34000 Montpellier'

    },
    {
        title: 'EMAIL',
        icon: <EmailIcon  />,
        path: 'https://www.instagram.com/merikos.mi.corazon/',
        text: 'merikos.tattos@gmail.com'

    },
    {
        title: 'INSTAGRAM',
        icon: <InstagramIcon  />,
        path: 'https://www.instagram.com/merikos.mi.corazon/',
        text: 'merikos.mi.corazon'

    },
    {
        title: 'FACEBOOK',
        icon: <FacebookIcon />,
        path: 'https://www.facebook.com/merikmaldito',
        text: 'Merikos mi corazon tattoo'
    }
]