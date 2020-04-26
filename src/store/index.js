import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    todos: [
      {
        id: 1,
        title: "待办事项1",
        completed: false
      },
      {
        id: 2,
        title: "待办事项2",
        completed: false
      },
      {
        id: 3,
        title: "待办事项3",
        completed: false
      },
      {
        id: 4,
        title: "待办事项4",
        completed: false
      },
      {
        id: 5,
        title: "待办事项5",
        completed: false
      }
    ]
  },
  getters: {
    getDatas: state => {
      return state.todos;
    }
  },
  mutations: {
    deleteTodo(state, id) {
      state.todos = state.todos.filter(todo => todo.id != id);
    },
    addNewTodo(state, todo) {
      state.todos = [...state.todos, todo];
    }
  },
  actions: {
    addTodos({ commit }, newTodo) {
      commit("addNewTodo", newTodo);
    }
  },
  modules: {
  }
})
