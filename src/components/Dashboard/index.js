import React from 'react'
import PropTypes from 'prop-types'
import styleDashboard from './styleDashboard';
import Header from './Header/index';
import Sidebar from './Sidebar/index';
import TaskBoard from '../../containers/TaskBoard/index';
import { Outlet } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as uiActions from '../../actions/ui';

const Dashboard = props => {
   const classes = styleDashboard();

   const { showSidebar, uiActionCreators } = props;
   const { toggleSidebar } = uiActionCreators;

   return (
      <div>
         <Header toggleSidebar={toggleSidebar} />
         <div className={classes.wrapper} >
            <Sidebar className={classes.drawer} showSidebar={showSidebar} toggleSidebar={toggleSidebar} />
            <Outlet />
         </div>
      </div>
   )
}

Dashboard.propTypes = {
   showSidebar: PropTypes.bool,
   uiActionCreators: PropTypes.shape({
      toggleSidebar: PropTypes.func,
   }),
}

const mapStateToProps = (state) => ({
   showSidebar: state.uiReducer.showSidebar,
});

const mapDispatchToProps = (dispatch) => ({
   uiActionCreators: bindActionCreators(uiActions, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard)
