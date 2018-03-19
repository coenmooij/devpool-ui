const state = {
  token: null
};

const getters = {
  isLoggedIn(state) {
    return state.token !== null;
  },
  getToken(state) {
    return state.token;
  }
};

const actions = {
  setToken({ commit }, token) {
    commit("SET_TOKEN", token);
  },
  clearToken({ commit }) {
    commit("CLEAR_TOKEN");
  },
  loadToken({ commit }) {
    const token = localStorage.getItem("token");
    if (token !== null) {
      commit("SET_TOKEN", token);
    }
  }
};

const mutations = {
  SET_TOKEN(state, token) {
    state.token = token;
    localStorage.setItem("token", token);
  },
  CLEAR_TOKEN(state) {
    state.token = null;
    localStorage.removeItem("token");
  }
};

export default {
  state,
  actions,
  getters,
  mutations
};
