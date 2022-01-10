import React from 'react'
import styleTaskItem from './styleTaskItem';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import { Grid, Typography } from '@mui/material';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Fab from '@mui/material/Fab';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

function TaskItem(props) {
   const classes = styleTaskItem();
   let {task, status} = props;
   return (
      <Card className={classes.card}>
         <CardContent>
            <Grid container justify='space-between'>
               <Grid item md={8} component='h2'>
                  <Typography>{task.title}</Typography>
               </Grid>
               <Grid item md={4}>{status.label}</Grid>
            </Grid>
            <p>{task.description}</p>
         </CardContent>
         <CardActions className={classes.cardActions}>
            <Fab size="small" color="primary" aria-label="edit">
               <EditIcon fontSize='small' />
            </Fab>
            <Fab size="small" color="secondary" aria-label="delete">
               <DeleteIcon fontSize='small' />
            </Fab>
         </CardActions>
      </Card>
   )
}

export default TaskItem
