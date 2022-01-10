import React from 'react'
import styles from './styles';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import TextField from '@mui/material/TextField';
import { Grid } from '@mui/material';
import { STATUSES } from '../../constants';
import TaskList from '../../components/TaskList';
import TaskForm from '../../components/TaskForm';



const listTask = [
   {
      id: 1,
      title: 'read book',
      description: 'read mui books',
      status: 0
   },
   {
      id: 2,
      title: 'listen to music',
      description: 'listen misdf',
      status: 1
   },
   {
      id: 3,
      title: 'game',
      description: 'play games',
      status: 2
   }
];

function TaskBoard(props) {
   const classes = styles();
   console.log(props);

   // for render Form
   const [openForm, setOpenForm] = React.useState(false);

   return (
      <div className={classes.taskBoard}>
         <Button
            variant='contained'
            color='primary'
            className={classes.button}
            onClick={() => handleOpenForm()}
         >
            <AddIcon />Thêm Công Việc
         </Button>
         <br />
         <br />
         <TextField
            className={classes.textField}
            id="standard-basic"
            label="Nhập từ khóa . . ."
            variant="standard"
            style={{ width: '25%' }}
         />
         <br />
         <br />

         {renderBoard()}
         {renderForm()}
      </div>
   )

   function renderBoard() {
      let xhtml = null;
      xhtml = (
         <Grid
            container
            spacing={2}
         >
            {STATUSES.map((status, index) => {
               const taskFiltered = listTask.filter(task => task.status === status.value);
               return <TaskList
                  key={index}
                  tasks={taskFiltered}
                  status={status}
               />;
            })}
         </Grid>
      );
      return xhtml;
   }

   // dialog
   function renderForm() {
      let xhtml = null;
      xhtml = (
         <TaskForm
            openForm={openForm}
            closeForm={() => handleCloseForm()}
         />
      );
      return xhtml;
   }

   // for open and close Form
   function handleOpenForm() {
      setOpenForm(true);
   }

   function handleCloseForm() {
      setOpenForm(false);
   }


}



export default TaskBoard
