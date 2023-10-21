import FlashOnIcon from '@mui/icons-material/FlashOn';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import LocalFireDepartmentIcon from '@mui/icons-material/LocalFireDepartment';
import SelfImprovementIcon from '@mui/icons-material/SelfImprovement';

export const menuList = [
    {
        title: 'Merik',
        icon: <SelfImprovementIcon />,
        path: '/merik',

    },
    {
        title: 'Tattoo Recent',
        icon: <LocalFireDepartmentIcon />,
        path: '/recentTattoo'
    },
    {
        title: 'Flash Disponibles',
        icon: <FlashOnIcon />,
        path: '/flash'
    }, 
    {
        title: 'Reservation',
        icon: <CalendarMonthIcon />,
        path: '/booking',

    }
]