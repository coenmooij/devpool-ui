const state = {
  token: null,
  type: null
};

const getters = {
  isLoggedIn(state) {
    return state.token !== null;
  },
  getToken(state) {
    return state.token;
  },
  isDeveloper(state) {
    return state.type === "developer";
  },
  isAdmin(state) {
    return state.type === "admin";
  },
  isBackofficeUser(state) {
    return state.type === "backoffice";
  },
  isClient(state) {
    return state.type === "client";
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
  },
  setType({ commit }, type) {
    commit("SET_TYPE", type);
  },
  clearType({ commit }) {
    commit("CLEAR_TYPE");
  },
  loadType({ commit }) {
    const type = localStorage.getItem("type");
    if (type !== null) {
      commit("SET_TYPE", type);
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
  },
  SET_TYPE(state, type) {
    state.type = type;
    localStorage.setItem("type", type);
  },
  CLEAR_TYPE(state) {
    state.type = null;
    localStorage.removeItem("type");
  }
};

export default {
  state,
  actions,
  getters,
  mutations
};
