import React from 'react'
import { Grid } from '@mui/material';
import Box from '@mui/material/Box';
import styleTaskList from './styleTaskList';
import TaskItem from '../TaskItem/index';
import PropTypes from 'prop-types';

function TaskList(props) {
   const classes = styleTaskList();
   let { tasks, status, handleEditTask, handleDeleteTask } = props
   return (
      <Grid item xs={12} md={4}>
         <Box mt={2} mb={2}>
            <div className={classes.status}>{status.label}</div>
         </Box>
         <div className={classes.wrapperListTask}>
            {
               tasks.map(task => {
                  return <TaskItem
                     key={task.id}
                     task={task}
                     status={status}
                     handleEditTask={() => handleEditTask(task)}
                     handleDeleteTask={() => handleDeleteTask(task.id)}
                  />
               })
            }
         </div>
      </Grid>
   )
}

TaskList.propTypes = {
   tasks: PropTypes.array,
   status: PropTypes.object,
   handleEditTask: PropTypes.func,
   handleDeleteTask: PropTypes.func,
}

export default TaskList

