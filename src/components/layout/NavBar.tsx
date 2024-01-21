"use client";
import { useEffect, useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Drawer } from "@mui/material";
import ListMenu from './ListMenu';
import { menuList } from "../../utils/list/MenuList"
import Link from "next/link";
import InstagramIcon from '@mui/icons-material/Instagram';
import Cookies from 'js-cookie';
import { decodeToken } from '@/utils/decodeToken';
import LogoutIcon from '@mui/icons-material/Logout';
import LoginIcon from '@mui/icons-material/Login';
import { useDispatch, useSelector } from 'react-redux';
import { login, logout } from '@/tools/store/auth.slice';


export default function NavBar() {

  //--------------------Variable--------------------
  const dispatch = useDispatch()
  const { isLogin } = useSelector((state: any) => state.auth)
  const [drawerState, setDrawerState] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);

  //--------------------Function--------------------

  const drawerHandleClick = () => {
    setDrawerState(!drawerState);
  };

  const handleLogout = () => {
    Cookies.remove("token")
    dispatch(logout())
    setIsAdmin(false)
  }

  const verifyToken = async () => { // ON VERIFIE SI C'EST UTILE DE FAIRE CETTE FONCTION
    const token = Cookies.get("token")
    if (token) {
      const tokenDecoded: any = await decodeToken(token)
      if (tokenDecoded) {
        dispatch(login())
        if (tokenDecoded.userInfo.userRole === "admin") {
          setIsAdmin(true)
        }
      }
    } else {
      dispatch(logout())
      setIsAdmin(false)
    }
  }

  useEffect(() => {
    verifyToken()
  }, [])

  return (
    <Box sx={{ flexGrow: 1 }} className='mb-10'>
      {/* ------------APP BAR MOBILE------------------ */}
      <AppBar position="static" sx={{ display: { xl: 'none', lg: 'none', md: 'none' } }} >
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 1 }}
            onClick={drawerHandleClick}
          >
            <MenuIcon />
          </IconButton>
          <Drawer anchor="left" open={drawerState} onClose={drawerHandleClick}>
            <ListMenu drawerHandleClick={drawerHandleClick} menuList={menuList} />
          </Drawer>
          <Typography variant="h6" component="div" sx={{ flexGrow: 2 }}>
            <Link href="/">
              <p className="flex items-center justify-center">Merik Tattos</p>
            </Link>
          </Typography>
          <Link href="https://www.instagram.com/merikos.mi.corazon/">
            <Button color="inherit">
              <InstagramIcon fontSize='large' />
            </Button>
          </Link>
        </Toolbar>
      </AppBar>

      {/* ------------APP BAR DESKTOP------------------ */}
      <AppBar position="static" sx={{ display: { xs: 'none', sm: 'none', md: 'block', lg: 'block', xl: 'block' } }}>
        <Toolbar className="p-0">
          <div className='grid grid-cols-3 gap-2 w-full '>
            <div className='flex items-center justify-center overflow-x-hidden'>
              {menuList.map((item, index) => (
                <Link href={item.path} key={index} className="pr-1 pl-1">
                  <Button color='inherit' className='font-bold text-xs hover:-translate-y-1 transition duration-300 ease-in-out' >{item.title}</Button>
                </Link>
              ))}
            </div>
            <Typography variant="h4" component="div" sx={{ flexGrow: 2 }} >
              <Link href="/">
                <p className="flex items-center justify-center">Merikos Tattoo</p>
              </Link>
            </Typography>
            <div className='flex items-center justify-end pr-[10%]'>
            <Link href="https://www.instagram.com/merikos.mi.corazon/">
                  <Button color="inherit">
                    <InstagramIcon fontSize='large' />
                  </Button>
                </Link>
              {!isLogin &&
                <Link href="/login">
                <Button color="inherit">
                  <LoginIcon fontSize='large' />
                </Button>
              </Link>
                }
              {isLogin && 
              <Button color="inherit" onClick={handleLogout}>
              <LogoutIcon fontSize='large' />
            </Button>
              }
            </div>
          </div>

        </Toolbar>
      </AppBar>
    </Box>
  );
}

