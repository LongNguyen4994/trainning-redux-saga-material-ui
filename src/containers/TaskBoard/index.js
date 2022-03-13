import React from 'react'
import styles from './styles';
import { STATUSES } from '../../constants';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as taskActions from '../../actions/task';
import * as modalActions from '../../actions/modal';
import PropTypes from 'prop-types';
import Button from '@mui/material/Button'
import AddIcon from '@mui/icons-material/Add';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import TaskList from '../../components/TaskList/index';
import TaskForm from '../TaskForm/index';
import SearchBox from '../../components/SearchBox/index';
import ConfirmForm from '../ConfirmForm/index';
import cn from 'classnames';


function TaskBoard(props) {
   const classes = styles();

   // for render Form
   const [openForm, setOpenForm] = React.useState(false);
   const {showSidebar} = props;
   console.log(showSidebar);

   React.useEffect(() => {
      // call API to take task List
      // props.taskActionCreators.fetchListTaskRequest();
      props.taskActionCreators.fetchListTask();

   }, [])

   return (
      <div className={cn(classes.taskBoard, {[classes.shiftLeft] : showSidebar})}>
         <Button
            variant='contained'
            color='primary'
            className={classes.button}
            onClick={() => handleOpenForm()}
         >
            <AddIcon />Thêm Công Việc
         </Button>
         <Button
            variant='contained'
            color='primary'
            className={classes.button}
            onClick={() => loadData()}
         >
            Load Data

         </Button>
         {renderSearchBox()}
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
         {/* {renderForm()} */}

      </div>
   )

   function renderBoard() {
      const { listTask } = props;
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
                  handleEditTask={handleEditTask}
                  handleDeleteTask={handleDeleteTask}
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
      // setOpenForm(true);
      const { modalActionCreators, taskActionCreators } = props;
      const { showModal, changeModalTitle, changeModalContent } = modalActionCreators;
      const { setEditTask } = taskActionCreators;
      setEditTask(null);
      changeModalTitle("THÊM CÔNG VIỆC");
      changeModalContent(<TaskForm />);
      showModal();
   }

   function handleCloseForm() {
      setOpenForm(false);
   }

   function loadData() {
      props.taskActionCreators.fetchListTask();

   }

   function handleFilter(e) {
      const { value } = e.target;
      props.taskActionCreators.filterTask(value);
   }

   function renderSearchBox() {
      let xhtml = null;
      xhtml = (
         <SearchBox handleChange={(e) => handleFilter(e)} />
      );
      return xhtml;
   }

   // Edit task
   function handleEditTask(task) {
      const { modalActionCreators, taskActionCreators } = props;
      const { setEditTask } = taskActionCreators;
      const { showModal, changeModalTitle, changeModalContent } = modalActionCreators;
      setEditTask(task);
      changeModalTitle("CẬP NHẬT CÔNG VIỆC");
      changeModalContent(<TaskForm />);
      showModal();
   }

   function handleDeleteTask(id) {
      const { modalActionCreators, taskActionCreators } = props;
      const { setDeleteID } = taskActionCreators;
      const { showModal, changeModalContent, changeModalTitle } = modalActionCreators;
      setDeleteID(id);
      changeModalTitle('Xóa Công Việc');
      changeModalContent(<ConfirmForm />);
      showModal();
   }
}



TaskBoard.propTypes = {
   taskActionCreators: PropTypes.shape({
      fetchListTaskRequest: PropTypes.func,
      filterTask: PropTypes.func,
      setEditTask: PropTypes.func,
      setDeleteID: PropTypes.func,
   }),
   modalActionCreators: PropTypes.shape({
      showModal: PropTypes.func,
      hideModal: PropTypes.func,
      changeModalTitle: PropTypes.func,
      changeModalContent: PropTypes.func,
   }),
   listTask: PropTypes.array,
   showSidebar: PropTypes.bool,
}

const mapStateToProps = (state) => {
   return {
      listTask: state.taskReducer.listTask,
      showSidebar: state.uiReducer.showSidebar,
   }
}

const mapDispatchToProps = (dispatch) => {
   return {
      taskActionCreators: bindActionCreators(taskActions, dispatch),
      modalActionCreators: bindActionCreators(modalActions, dispatch),
   }
}

export default connect(mapStateToProps, mapDispatchToProps)(TaskBoard);

