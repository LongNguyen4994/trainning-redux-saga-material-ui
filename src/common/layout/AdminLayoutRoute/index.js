import React from 'react'
import PropTypes from 'prop-types'
import styleAdminLayoutRoute from './styleAdminLayoutRoute';
import Dashboard from '../../../components/Dashboard/index';

const AdminLayoutRoute = props => {
   const classes = styleAdminLayoutRoute();
   const route = props;
   return (
      <div>
         ADMIN PAGE
      </div>
   );
}

AdminLayoutRoute.propTypes = {}

export default AdminLayoutRoute;
