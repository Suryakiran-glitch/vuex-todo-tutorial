import { createStore } from 'vuex'
import axios from 'axios'

export default createStore({
  state: {
    todos : [],
  },
  mutations: {
    setTodos : (state,payload) => (state.todos = payload),
    addTodo : (state,payload) => state.todos.unshift(payload),
    deleteTodo : (state,payload) => state.todos = state.todos.filter(todo => todo.id != payload)
  },
  actions: {
    async fetchTodos({commit}) {
      const response = await axios.get("https://jsonplaceholder.typicode.com/todos")
      commit('setTodos' , response.data)
    console.log(response.data)
    },
    async addTodo({commit},title) {
      const reponse = await axios.post("https://jsonplaceholder.typicode.com/todos" , {title , isCompleted : false})
      commit('addTodo' , reponse.data)
    },
    async deleteTodo({commit},id) {
      await axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
      commit ('deleteTodo' , id)
    },
    async filterTodo({commit},e) {
      const limit = parseInt(e.target.options[e.target.options.selectedIndex].innerText)
      const result = await axios.get(`https://jsonplaceholder.typicode.com/todos?_limit=${limit}`)
      commit('setTodos' , result.data)
    }
  },
  getters : {
    allTodos : (state) => state.todos
  }
})
