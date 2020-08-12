const state = {
  tasks: {
    ID1: {
      name: "Go to shop",
      completed: false,
      dueDate: "2019/05/13",
      dueTime: "14:00"
    },
    ID2: {
      name: "Get bananas",
      completed: false,
      dueDate: "2019/05/14",
      dueTime: "14:00"
    },
    ID3: {
      name: "Get apples",
      completed: false,
      dueDate: "2019/05/15",
      dueTime: "14:00"
    }
  }
};

const mutations = {
  updateTask(state, payload) {
    Object.assign(state.tasks[payload.id], payload.updates);
  }
};

const getters = {
  tasks: state => {
    return state.tasks;
  }
};

const actions = {
  updateTask({ commit }, payload) {
    commit("updateTask", payload);
  }
};

export default {
  namespaced: true,
  state,
  mutations,
  getters,
  actions
};
