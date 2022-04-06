import Dns from '@mui/icons-material/Dns';
import KeyboardArrowDown from '@mui/icons-material/KeyboardArrowDown';
import PermMedia from '@mui/icons-material/PermMedia';
import Public from '@mui/icons-material/Public';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Paper from '@mui/material/Paper';
import { createTheme, styled, ThemeProvider } from '@mui/material/styles';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import AddProductForm from '../AddProductform/AddProductForm';
import Modal from '../Modal/Modal';

const data = [
  { icon: <Dns />, label: 'Products', link: '/admin/' },
  { icon: <PermMedia />, label: 'Add Product' },
  { icon: <Public />, label: 'Order', link: '/admin/orders' }
];

const FireNav = styled(List)({
  '& .MuiListItemButton-root': {
    paddingLeft: 24,
    paddingRight: 24
  },
  '& .MuiListItemIcon-root': {
    minWidth: 0,
    marginRight: 16
  },
  '& .MuiSvgIcon-root': {
    fontSize: 20
  }
});

export default function ListItemAdmin({ setProductSelected }) {
  const [open, setOpen] = useState(true);
  const [modalOpen, setModalOpen] = useState(false);
  return (
    <Box sx={{ display: 'flex', height: '100vh' }}>
      <ThemeProvider
        theme={createTheme({
          components: {
            MuiListItemButton: {
              defaultProps: {
                disableTouchRipple: true
              }
            }
          },
          palette: {
            mode: 'dark',
            primary: { main: 'rgb(102, 157, 246)' },
            background: { paper: 'rgb(5, 30, 52)' }
          }
        })}
      >
        <Paper elevation={0} sx={{ maxWidth: 256 }}>
          <FireNav component="nav" disablePadding>
            <ListItemButton component="a" href="/admin">
              <ListItemIcon sx={{ fontSize: 20 }}>🔥</ListItemIcon>
              <ListItemText
                sx={{ my: 0 }}
                primary="Craft Beer"
                primaryTypographyProps={{
                  fontSize: 20,
                  fontWeight: 'medium',
                  letterSpacing: 0
                }}
              />
            </ListItemButton>
            <Divider />

            <Divider />
            <Box
              sx={{
                bgcolor: open ? 'rgba(71, 98, 130, 0.2)' : null,
                pb: open ? 2 : 0
              }}
            >
              <ListItemButton
                alignItems="flex-start"
                onClick={() => setOpen(!open)}
                sx={{
                  px: 3,
                  pt: 2.5,
                  pb: open ? 0 : 2.5,
                  '&:hover, &:focus': { '& svg': { opacity: open ? 1 : 0 } }
                }}
              >
                <ListItemText
                  primary="Admin"
                  primaryTypographyProps={{
                    fontSize: 15,
                    fontWeight: 'medium',
                    lineHeight: '20px',
                    mb: '2px'
                  }}
                  secondary="Add product, edit product, delete product, check order"
                  secondaryTypographyProps={{
                    noWrap: true,
                    fontSize: 12,
                    lineHeight: '16px',
                    color: open ? 'rgba(0,0,0,0)' : 'rgba(255,255,255,0.5)'
                  }}
                  sx={{ my: 0 }}
                />
                <KeyboardArrowDown
                  sx={{
                    mr: -1,
                    opacity: 0,
                    transform: open ? 'rotate(-180deg)' : 'rotate(0)',
                    transition: '0.2s'
                  }}
                />
              </ListItemButton>
              {open &&
                data.map((item) => {
                  if (item.label === 'Add Product') {
                    return (
                      <ListItemButton
                        onClick={() => {
                          setModalOpen(true);
                        }}
                        key={item.label}
                        sx={{ py: 0, minHeight: 32, color: 'rgba(255,255,255,.8)' }}
                      >
                        <ListItemIcon sx={{ color: 'inherit' }}>{item.icon}</ListItemIcon>
                        <ListItemText
                          primary={item.label}
                          primaryTypographyProps={{ fontSize: 14, fontWeight: 'medium' }}
                        />
                      </ListItemButton>
                    );
                  } else {
                    return (
                      <Link to={item?.link}>
                        <ListItemButton
                          key={item.label}
                          sx={{ py: 0, minHeight: 32, color: 'rgba(255,255,255,.8)' }}
                        >
                          <ListItemIcon sx={{ color: 'inherit' }}>{item.icon}</ListItemIcon>
                          <ListItemText
                            primary={item.label}
                            primaryTypographyProps={{ fontSize: 14, fontWeight: 'medium' }}
                          />
                        </ListItemButton>
                      </Link>
                    );
                  }
                })}
            </Box>
          </FireNav>
        </Paper>
      </ThemeProvider>
      {modalOpen && <Modal children={<AddProductForm setModalOpen={setModalOpen} />} />}
    </Box>
  );
}
