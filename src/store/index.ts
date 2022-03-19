import Vue from 'vue';
import Vuex from 'vuex';
import { createStore } from 'vuex'

import { getCurrentTheme, getTheme, storeCurrentTheme } from '@/shared/themes';
import axios from 'axios';
import { UserService } from '@/shared/userService';
import { UiVersion } from '@/types';
import StoreModules from '@/store/storeSubModules';
import createBotStore, { MultiBotStoreGetters } from './modules/botStoreWrapper';
import alertsModule from './modules/alerts';
import layoutModule from './modules/layout';
import settingsModule from './modules/settings';
import router from '@/router'
import { auth } from '@/firebase'
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut
} from 'firebase/auth'

Vue.use(Vuex);
const initCurrentTheme = getCurrentTheme();

const store = new Vuex.Store({
  modules: {
    [StoreModules.alerts]: alertsModule,
    [StoreModules.layout]: layoutModule,
    [StoreModules.uiSettings]: settingsModule,
  },
  state: {
    user: null,
    currentTheme: initCurrentTheme,
    uiVersion: 'dev',
  },
  getters: {
    isDarkTheme(state) {
      const theme = getTheme(state.currentTheme);
      if (theme) {
        return theme.dark;
      }
      return true;
    },
    getChartTheme(state, getters) {
      return getters.isDarkTheme ? 'dark' : 'light';
    },
    getUiVersion(state) {
      return state.uiVersion;
    },
    loggedIn(state, getters) {
      return getters[`${StoreModules.ftbot}/${MultiBotStoreGetters.hasBots}`];
    },
  },
  mutations: {
    SET_USER (state, user) {
      state.user = user
    },
    CLEAR_USER (state) {
      state.user = null
    },
    mutateCurrentTheme(state, newTheme: string) {
      storeCurrentTheme(newTheme);
      state.currentTheme = newTheme;
    },
    setUIVersion(state, uiVersion: string) {
      state.uiVersion = uiVersion;
    },
  },
  actions: {
    async login ({ commit}, details) {
      const { email, password } = details

      try {
        await signInWithEmailAndPassword(auth, email, password)


      } catch (error) {
        switch(error.code) {
          case 'auth/user-not-found':
            alert("user not found")
            break
          case 'auth/wrong-password':
            alert("wrong password")
            break
          default:
            alert("something go wrong")
        }

        return
      }
      commit('SET_USER', auth.currentUser)

      router.push('/')
    },
    async register ({ commit}, details) {
      const { email, password } = details

      try {
        await createUserWithEmailAndPassword(auth, email, password)


      } catch (error) {
        switch(error.code) {
          case 'auth/email-already-in-use':
            alert("email-already-in-use'")
            break
          case 'auth/invalid-email':
            alert("invalid-email")
            break
          case 'auth/operation-not-allowed':
            alert("Operation not allowd")
            break
          case 'auth/weak-password':
            alert("week password")
            break
          default:
            alert("something go wron")
        }

        return
      }
      commit('SET_USER', auth.currentUser)

      router.push('/')
    },
    async logout ({commit}) {
      await signOut(auth)

      commit('CLEAR_USER')

      router.push('/login')
    },

    fetchUser ({ commit }) {
      auth.onAuthStateChanged(async user => {
        if (user === null) {
          commit('CLEAR_USER')

        } else {
          commit('SET_USER', user)

          if (router.isReady() && router.currentRoute.value.path === '/login2') {
            router.push('/')
          }
        }
      })
    },

    setCurrentTheme({ commit }, newTheme: string) {
      commit('mutateCurrentTheme', newTheme);
    },

    setLoggedIn({ commit }, loggedin: boolean) {
      commit('setLoggedIn', loggedin);
    },
    async loadUIVersion({ commit }) {
      if (import.meta.env.PROD) {
        try {
          const result = await axios.get<UiVersion>('/ui_version');
          const { version } = result.data;

          commit('setUIVersion', version);
        } catch (error) {
          //
        }
      }
    },
  },
});

UserService.migrateLogin();

store.registerModule(StoreModules.ftbot, createBotStore(store));
Object.entries(UserService.getAvailableBots()).forEach(([, v]) => {
  store.dispatch(`${StoreModules.ftbot}/addBot`, v);
});
store.dispatch(`${StoreModules.ftbot}/selectFirstBot`);
store.dispatch(`${StoreModules.ftbot}/startRefresh`);
export default store;
