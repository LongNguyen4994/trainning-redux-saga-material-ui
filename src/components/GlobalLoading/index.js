import React from 'react';
import styleGlobalLoading from './styleGlobalLoading';
import LoadingIcon from '../../assets/images/loading.gif';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as uiActions from '../../actions/ui';

function GlobalLoading(props) {
   const classes = styleGlobalLoading();
   const { showLoading } = props;

   let xhtml = null;
   if (showLoading) {
      xhtml = (
         <div className={classes.globalLoading}>
            <img src={LoadingIcon} alt='loading icon' className={classes.icon} />
         </div>
      );
   }
   return xhtml;
}

GlobalLoading.propTypes = {
   classes: PropTypes.object,
   showLoading: PropTypes.bool,
}


const mapStateToProps = (state) => {
   return {
      showLoading: state.uiReducer.showLoading,
   }
}

const mapDispatchToProps = (dispatch) => {
   return {
      ui_Actions: bindActionCreators(uiActions, dispatch),
   }
}


export default connect(mapStateToProps, mapDispatchToProps)(GlobalLoading);



