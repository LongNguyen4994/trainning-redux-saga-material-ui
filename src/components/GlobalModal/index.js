import React from 'react';
import PropTypes from 'prop-types';
import styleModal from './styleModal';
import { Modal } from '@mui/material';
import ClearIcon from '@mui/icons-material/Clear';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as modalActions from '../../actions/modal';

function GlobalModal(props) {
   const classes = styleModal();
   const { showModal, title, content, modalActionCreators } = props;
   const { hideModal } = modalActionCreators;
   return (
      <Modal open={showModal} onClose={hideModal}>
         <div className={classes.modal}>
            <div className={classes.header}>
               <span className={classes.title}>{title}</span>
               <ClearIcon className={classes.icon} onClick={hideModal} />
            </div>
            <div className={classes.content}>{content}</div>
         </div>
      </Modal>

   )
}

GlobalModal.propTypes = {
   showModal: PropTypes.bool,
   title: PropTypes.string,
   content: PropTypes.object,
   modalActionCreators: PropTypes.shape({
      showModal: PropTypes.func,
      hideModal: PropTypes.func,
      changeModalTitle: PropTypes.func,
      changeModalContent: PropTypes.func,
   }),
};


const mapStateToProps = (state) => {
   return {
      showModal: state.modalReducer.showModal,
      title: state.modalReducer.title,
      content: state.modalReducer.content,
   }
}

const mapDispatchToProps = (dispatch) => {
   return {
      modalActionCreators: bindActionCreators(modalActions, dispatch),
   }
}

export default connect(mapStateToProps, mapDispatchToProps)(GlobalModal);
