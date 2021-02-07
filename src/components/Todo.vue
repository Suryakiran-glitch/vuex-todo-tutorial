<template lang="">
 <div>
  <h1>Todo Application</h1>
  <div class="todos">
   <div class="todo" v-for="todo in allTodos" :key=todo.id>
    <h4>{{todo.title}}</h4>
    <i class="fas fa-trash-alt" @click="deleteTodo(todo.id)"></i>
   </div>
  </div>
 </div>
</template>
<script>
import {mapGetters, mapActions} from 'vuex'
export default {
 name : "Todos",
 computed : mapGetters(['allTodos']),
 methods : {
  ...mapActions(['fetchTodos' , 'deleteTodo'])
 },
 created() {
  this.fetchTodos()
 }
}
</script>
<style scoped>
.todos {
 display: grid;
 grid-template-columns: repeat(3,1fr);
 grid-gap: 1rem;
}

h1 {
 color: teal;
 font-size: 32px;
 margin-top: 60px;
 padding: 30px;
 text-align: center;
}

.todo {
 border-radius: 1px solid #d3d3d3;
 color: white;
 background-color: teal;
 padding: 1rem;
 position: relative;
 cursor: pointer;
 border-radius: 6px;
 overflow: hidden;
 text-align: center;
}

i {
 position: relative;
 bottom: 10px;
 right: 10px;
 color: wheat;
 cursor: pointer;
 float: right;
}
 
</style>