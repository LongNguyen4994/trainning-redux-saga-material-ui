import * as uiConstants from '../constants/ui';

const initialState = {
   showLoading: false,
   showSidebar: false,
}

const uiReducer = (state = initialState, action) => {
   switch (action.type) {
      case uiConstants.SHOW_LOADING:
         return { ...state, showLoading: true }

      case uiConstants.HIDE_LOADING:
         return { ...state, showLoading: false }

      // FOR SIDEBAR
      case uiConstants.TOGGLE_SIDEBAR: {
         let tempState = { ...state };
         return { ...state, showSidebar: !tempState.showSidebar };
      }

      default: return state;
   }
}

export default uiReducer;
