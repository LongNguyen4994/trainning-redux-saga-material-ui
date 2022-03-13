import { makeStyles } from '@mui/styles'

const styleTaskItem = makeStyles((props) => ({
   card: {
      marginBottom: '10px',
   },
   cardActions: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'flex-end',
   },
}));

export default styleTaskItem;
