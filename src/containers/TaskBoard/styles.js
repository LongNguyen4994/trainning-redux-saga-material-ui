import { makeStyles } from "@mui/styles";
// import theme from '../../common/theme';

const styles = makeStyles(theme => ({
   taskboard: {
      display: 'flex',
      alignItems: 'center',
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