import { AlertType } from '@/types/alertTypes';

export enum AlertActions {
  addAlert = 'addAlert',
  removeAlert = 'removeAlert',
}

export enum AlertMutations {
  addAlert = 'addAlert',
  removeAlert = 'removeAlert',
}

export default {
  namespaced: true,
  state: {
    activeMessages: [],
  },
  mutations: {
    [AlertMutations.addAlert](state, message: AlertType) {
      console.log(`adding message '${message.message}' to message queue`);
      state.activeMessages.push(message);
    },
    [AlertMutations.removeAlert](state) {
      state.activeMessages.shift();
    },
  },
  actions: {
    [AlertActions.addAlert]({ commit }, message: AlertType) {
      commit(AlertMutations.addAlert, message);
    },
    [AlertActions.removeAlert]({ commit }) {
      commit(AlertMutations.removeAlert);
    },
  },
};

export function showAlert(dispatch, message: string, severity = '') {
  dispatch(`alerts/${AlertActions.addAlert}`, { message, severity }, { root: true });
}
