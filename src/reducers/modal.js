import * as modalConstants from '../constants/modal';

let initialState = {
   showModal: false,
   title: '',
   content: null,
}

const modalReducer = (state = initialState, action) => {
   switch (action.type) {
      case modalConstants.SHOW_MODAL: {
         return {
            ...state,
            showModal: true
         }
      }
      case modalConstants.HIDE_MODAL: {
         return {
            ...state,
            showModal: false,
            title: '',
            content: null
         }
      }
      case modalConstants.CHANGE_MODAL_TITLE: {
         const { title } = action.payload;
         return {
            ...state,
            title
         }
      }
      case modalConstants.CHANGE_MODAL_CONTENT: {
         const { content } = action.payload;
         return {
            ...state,
            content
         }
      }
      default: return state;
   }
}

export default modalReducer;
