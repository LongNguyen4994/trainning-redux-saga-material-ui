import { makeStyles } from "@mui/styles";

const styleModal = makeStyles((theme) => ({
   modal: {
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      width: 400,
      backgroundColor: '#fff',
      // padding: '10px',
      boxShadow: 24,
   },
   header: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      backgroundColor: theme.palette.success.light,
      padding: '10px',
   },
   title: {
      color: theme.palette.text.primary,
   },
   icon:{
      cursor: 'pointer',
      // width: '15px',
   },
   content: {
      padding: '10px',

   }
}));

export default styleModal;
