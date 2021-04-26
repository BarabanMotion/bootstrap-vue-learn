import { SET_TOASTER } from './mutations';

export default {
   state: {
      tooltip: {
         message: '',
         title: '',
         type: '',
         show: false
      }
   },
   mutations: {
      [SET_TOASTER](state, payload) {
         state.tooltip = {
            ...state.tooltip,
            ...payload
         }
      }
   },
   getters: {
      Tooltip(state) {
         return state.tooltip;
      }
   }
}