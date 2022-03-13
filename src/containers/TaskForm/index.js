import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import PropTypes from 'prop-types';
import React from 'react';
import styleTaskForm from './styleTaskForm';
import { connect } from 'react-redux';
import * as modalActions from '../../actions/modal';
import * as taskActions from '../../actions/task';
import { bindActionCreators } from 'redux';
import { Field, reduxForm } from 'redux-form'
import renderTextField from '../../components/FormHelper/TextField/index';
import validate from './validate';
import renderSelectField from '../../components/FormHelper/Select';

let TaskForm = (props) => {
   const classes = styleTaskForm();
   const { hideModal } = props.modalActionCreators;
   const { addTask, updateTask } = props.taskActionCreators;
   const { handleSubmit, invalid, submitting, editTask } = props;

   // handle submit form
   const handleSubmitForm = data => {
      if (editTask) {
         updateTask(data);
      } else {
         addTask(data);
      }
   }


   const renderStatus = () => {
      let xhtml = null;
      if (editTask) {
         xhtml = (
            <Grid item md={12}>
               <Field
                  id='status'
                  name='status'
                  label="Trạng Thái"
                  type="text"
                  autoWidth={true}
                  variant="standard"
                  margin="dense"
                  component={renderSelectField}
                  className={classes.textField}
               >
                  <option value={0}>Ready</option>
                  <option value={1}>In Progress</option>
                  <option value={2}>Complete</option>
               </Field>
            </Grid>
         );
      }
      return xhtml;
   }

   return (
      <form onSubmit={handleSubmit(handleSubmitForm)}>
         <Grid container spacing={2}>
            <Grid item md={12}>
               {/* <TextField
                  autoFocus
                  margin="dense"
                  id="name"
                  label="Tiêu Đề"
                  type="text"
                  fullWidth
                  variant="standard"
               /> */}
               <Field
                  autoFocus
                  id='title'
                  label="Tiêu Đề"
                  className={classes.textField}
                  margin="dense"
                  name='title'
                  type="text"
                  variant="standard"
                  fullWidth
                  component={renderTextField}
               // validate={[required, minLength, maxLength]}
               />
            </Grid>
            <Grid item md={12}>
               {/* <TextField
                  margin="dense"
                  id="name"
                  label="Mô Tả"
                  type="text"
                  fullWidth
                  variant="standard"
               /> */}
               <Field
                  id='description'
                  name='description'
                  label="Mô Tả"
                  type="text"
                  multiline
                  fullWidth
                  variant="standard"
                  margin="dense"
                  component={renderTextField}
                  className={classes.textField}
               />
            </Grid>
            {renderStatus()}
            <Grid item md={12} display='flex' justifyContent='flex-end'>
               <Button type='submit' variant="contained" color="primary" sx={{ mr: 1 }} disabled={invalid || submitting}>OK</Button>
               <Button type='button' variant="contained" color="secondary" onClick={hideModal}>Cancel</Button>
            </Grid>
         </Grid>
      </form>
   )
}



// Validate
const required = (value) => {
   let error = 'Vui lòng nhập tiêu đề';
   if (value !== null && typeof value !== 'undefined' && value.trim() !== '') {
      error = null;
   }
   return error;
}

const minLength = value => {
   let error = null;
   if (value.length < 5) {
      error = 'Tiêu đề phải từ 5 kí tự';
   }
   return error;
}

const maxLength = value => {
   let error = null;
   if (value.length > 10) {
      error = 'Tiêu đề phải ít hơn 11 kí tự';
   }
   return error;
}

// reduxForm
TaskForm = reduxForm({
   form: 'task',
   validate
})(TaskForm);



// check prop types
TaskForm.propTypes = {
   modalActionCreators: PropTypes.shape({
      hideModal: PropTypes.func,
   }),
   taskActionCreators: PropTypes.shape({
      addTask: PropTypes.func,
      updateTask: PropTypes.func,
   }),
   handleSubmit: PropTypes.func,
   invalid: PropTypes.bool,
   submitting: PropTypes.bool,
   editTask: PropTypes.object,
}

const mapStateToProps = state => ({
   editTask: state.taskReducer.editTask,
   initialValues: {
      title: state.taskReducer.editTask ? state.taskReducer.editTask.title : '',
      description: state.taskReducer.editTask ? state.taskReducer.editTask.description : '',
      id: state.taskReducer.editTask ? state.taskReducer.editTask.id : '',
      status: state.taskReducer.editTask ? state.taskReducer.editTask.status : '',
   }
});

const mapDispatchToProps = (dispatch) => ({
   modalActionCreators: bindActionCreators(modalActions, dispatch),
   taskActionCreators: bindActionCreators(taskActions, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(TaskForm);


