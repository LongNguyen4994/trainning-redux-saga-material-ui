import * as uiConstants from '../constants/ui';

export const showLoading = () => ({
   type: uiConstants.SHOW_LOADING,
})

export const hideLoading = () => ({
   type: uiConstants.HIDE_LOADING,
})


// FOR SIDEBAR
export const toggleSidebar = () => ({
   type: uiConstants.TOGGLE_SIDEBAR,
});

