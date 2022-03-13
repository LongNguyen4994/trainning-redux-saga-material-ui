import { createTheme } from "@mui/material/styles";

const theme = createTheme({
   palette: {
      primary: {
         main: '#FF9800'
      },
      secondary: {
         main: '#9E9E9E'
      },
      error: {
         main: '#F44336'
      },
      text: {
         // secondary: '#FFFFFF',
      }
   },
   typography: {
      fontFamily: 'Roboto',
   },

   // STYLE FOR MUI COMPONENT
   components: {
      // Name of the component
      MuiDrawer: {
         styleOverrides: {
            // Name of the slot
            paperAnchorLeft: {
               // Some CSS
               top: 'auto',
            },
         },
      },
   },
});

export default theme;
