import React from 'react'
import { Grid } from '@mui/material';
import Box from '@mui/material/Box';
import styleTaskList from './styleTaskList';
import TaskItem from '../TaskItem/index';

function TaskList(props) {
   const classes = styleTaskList();
   let { tasks, status } = props
   return (
      <Grid item xs={12} md={4}>
         <Box mt={2} mb={2}>
            <div className={classes.status}>{status.label}</div>
         </Box>
         <div className={classes.wrapperListTask}>
            {
               tasks.map(task => {
                  return <TaskItem key={task.id} task={task} status={status} />
               })
            }
         </div>
      </Grid>
   )
}

export default TaskList

