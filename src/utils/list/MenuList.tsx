import FlashOnIcon from '@mui/icons-material/FlashOn';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import LocalFireDepartmentIcon from '@mui/icons-material/LocalFireDepartment';
import SelfImprovementIcon from '@mui/icons-material/SelfImprovement';
import { MenuListType } from '../types/type';

export const menuList: MenuListType[] = [
    {
        title: 'Merik',
        icon: <SelfImprovementIcon />,
        path: '/merik',

    },
    {
        title: 'Reservation',
        icon: <CalendarMonthIcon />,
        path: '/booking',
    },
]
