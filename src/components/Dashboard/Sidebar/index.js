import React from 'react'
import PropTypes from 'prop-types'
import styleSidebar from './styleSidebar'
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import { NavLink } from 'react-router-dom';


const Sidebar = props => {
   const classes = styleSidebar();


   const drawerWidth = 250;


   const { showSidebar, toggleSidebar } = props;


   // CONTENT
   const list = () => (
      <Box
         sx={{
            width: drawerWidth,
            flexShrink: 0,
            [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box' },
         }}
         role="presentation"
         onClick={toggleSidebar}
         onKeyDown={toggleSidebar}
      >
         <List>
            <NavLink to={`/`}>
               <ListItem button >
                  <ListItemIcon>
                     <InboxIcon />
                  </ListItemIcon>
                  <ListItemText primary='TaskBoard' />
               </ListItem>
            </NavLink>
            <NavLink to={`/admin`}>
               <ListItem button >
                  <ListItemIcon>
                     <MailIcon />
                  </ListItemIcon>
                  <ListItemText primary='Admin' />
               </ListItem>
            </NavLink>
         </List>
      </Box>
   );

   return (
      <Drawer
         anchor='left'
         hideBackdrop={false}
         variant='temporary'
         sx={{ display: 'flex' }}
         open={showSidebar}
         onClose={toggleSidebar}
      >
         {list()}
      </Drawer>
   )
}

Sidebar.propTypes = {

}



export default Sidebar
