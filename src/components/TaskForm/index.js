import React from 'react'
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import styleTaskForm from './styleTaskForm';


function TaskForm(props) {
   const openForm = props.openForm;
   const classes = styleTaskForm();

   return (
      <Dialog open={openForm} onClose={() => handleCloseForm()}>
         <DialogTitle>Thêm mới công việc</DialogTitle>
         <DialogContent>
            <DialogContentText>
               To subscribe to this website, please enter your email address here. We
               will send updates occasionally.
            </DialogContentText>
            <TextField
               autoFocus
               margin="dense"
               id="name"
               label="Email Address"
               type="email"
               fullWidth
               variant="standard"
            />
            <br />
            <br />
            <TextField
               className={classes.textField}
               id="outlined-multiline-flexible"
               label="Multiline"
               multiline
               maxRows={4}
               fullWidth
            />
         </DialogContent>
         <DialogActions>
            <Button onClick={() => handleCloseForm()}>Cancel</Button>
            <Button onClick={() => handleCloseForm()}>OK</Button>
         </DialogActions>
      </Dialog>
   )

   function handleCloseForm() {
      props.closeForm();
   }
}

export default TaskForm
