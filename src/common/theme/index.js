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
      }
   },
   typography: {
      fontFamily: 'Roboto',
   },
   // shape: {
   //    // borderRadius: 10,
   //    backgroundColor: '#00BCD4',
   //    color: 'white',
   // }
});

export default theme;