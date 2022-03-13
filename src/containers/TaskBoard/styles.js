import { makeStyles } from "@mui/styles";
// import theme from '../../common/theme';

const styles = makeStyles(theme => ({
   taskBoard: {
      // display: 'flex',
      // alignItems: 'center',
      padding: '20px',
      transition: theme.transitions.easing.easeIn,
      transitionDuration: theme.transitions.duration.short,
   },
   button: {
      marginRight: '10px !important',
   },
   shiftLeft: {
      marginLeft: '250px !important',
      transition: theme.transitions.easing.easeOut,
      transitionDuration : theme.transitions.duration.short,
   },
   shape: {
      // backgroundColor: 'red',
      // color: 'white',
      padding: 20,
      margin: 10,
      backgroundColor: theme.shape.backgroundColor,
      color: theme.shape.color,
      borderRadius: theme.shape.borderRadius,
   }
}));

export default styles;
