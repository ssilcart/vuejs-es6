import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    /** @type {Array} */
    connections: [],
  },
  mutations: {
    add(state, newConnection) {
      const {
        sourceId, targetId
      } = newConnection;

      if (!sourceId || !targetId) {
        throw Error('missing param for add');
      }

      state.connections.push(newConnection);
    }
  },
  actions: {
    /**
     * @function
     * @param {Object} state
     * @param {Object} connection
     */
    addConnections(context) {
      try {
        const connection = {
          sourceId: 'email-1',
          targetId: 'sms-1'
        }
        context.commit('add', connection);
      } catch (error) {
        console.error(error);
      }
    }
  },
  getters: {
    getConnections(state) {
      return state.connections;
    }
  }
});

export default store;