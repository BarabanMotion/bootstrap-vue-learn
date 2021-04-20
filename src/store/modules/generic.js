import { SET_TOASTER } from '../names';

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
         console.log(payload);

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