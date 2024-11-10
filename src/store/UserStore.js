import { defineStore } from 'pinia';

export const useUserStore = defineStore('user', {
  state: () => ({
    token: localStorage.getItem('authToken') || null,
    user: JSON.parse(localStorage.getItem('userInfo')) || null,
  }),
  actions: {
    logout() {
      this.token = null;
      this.user = null;
    },
    setLoginInfo(token, user) {
      this.token = token;
      this.user = user;
    },
  },
  getters: {
    isAuthenticated: (state) => !!state.token,
    currentUser: (state) => state.user,
  },
});
