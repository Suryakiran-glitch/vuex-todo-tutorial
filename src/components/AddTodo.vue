<template lang="">
 <div>
  <h2>Add-Todo</h2>
  <form @submit="onSubmit">
   <input type="text" placeholder="Add Todo..." v-model="todo" />
   <input type="submit" value="ADD" />
  </form>
 </div>
</template>
<script>
import {mapActions} from 'vuex'
export default {
 data(){
  return {
   todo : ''
  }
 },
methods : {
 ...mapActions(['addTodo']),
 onSubmit(e) {
  e.preventDefault()
  this.addTodo(this.todo)
 }
},

}
</script>
<style>

 form {
  margin-top: 40px;
  display: flex;
 }

 input[type="text"] {
  flex: 10;
  border: 1px solid teal;
  border-radius: 4px;
  padding: 10px;
  outline: none;
 }

 input[type="submit"] {
  flex: 2;
  border: none;
  outline: none;
  background: teal;
  color: #fff;
  padding: 4px;
  transition: background ease-in;
 }

 input[type="submit"]:hover {
  background : tomato;
 }

 h2 {
  text-align: center;
  font-size: 32px;
  color: teal;
 }
</style>