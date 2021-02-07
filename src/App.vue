<template>
  <div class="app">
  <div class="container">
    <AddTodoVue />
    <FilterrTodoVue />
    <TodoVue />
    
  </div>
  </div>
</template>

<script>
import AddTodoVue from './components/AddTodo.vue'
import FilterrTodoVue from './components/FilterrTodo.vue'
import TodoVue from './components/Todo.vue'

export default {
  name: 'App',
  components: {
    TodoVue,
    AddTodoVue,
    FilterrTodoVue
  }
}
</script>

<style>
body {
  background-color: #d3d3d3;
  font-family: 'Times New Roman', Times, serif;
  line-height: 1.6px;
}
.container {
  width: 1100px;
  margin: 25px auto;
  font-weight: normal;
  overflow: auto;
  padding: 0.2rem;
}
</style>
