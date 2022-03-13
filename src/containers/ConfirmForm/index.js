import React from 'react'
import PropTypes from 'prop-types'
import styleConfirmForm from './styleConfirmForm';
import { Button, Grid } from '@mui/material';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as modalActions from '../../actions/modal';
import * as taskActions from '../../actions/task';

const ConfirmForm = props => {
   const classes = styleConfirmForm();
   const { modalActionCreators, taskActionCreators } = props;
   const { hideModal } = modalActionCreators;
   const { deleteTask } = taskActionCreators;
   return (
      <div>
         <div>Bạn muốn xóa công việc này?</div>
         <hr />
         <Grid display='flex' justifyContent='flex-end'>
            <Button type='button' variant='contained' color='primary' onClick={deleteTask} sx={{ mr: 1 }}>OK</Button>
            <Button type='button' variant='contained' color='secondary' onClick={hideModal}>Cancel</Button>

         </Grid>

      </div>
   )
}

ConfirmForm.propTypes = {
   taskActionCreators: PropTypes.shape({
      hideModal: PropTypes.func,
   }),
   modalActionCreators: PropTypes.shape({
      deleteTask: PropTypes.func,
   }),
}

const mapDispatchToProps = dispatch => ({
   modalActionCreators: bindActionCreators(modalActions, dispatch),
   taskActionCreators: bindActionCreators(taskActions, dispatch),
});

export default connect(null, mapDispatchToProps)(ConfirmForm)
