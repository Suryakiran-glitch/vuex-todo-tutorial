<template lang="">
 <div>
  
  <p>Filter :</p><select @change="filterTodo(e)">
   <option value="200">200</option>
   <option value="100">100</option>
   <option value="50">50</option>
   <option value="20">20</option>
   <option value="10">10</option>
   <option value="5">5</option>
  </select>
 </div>
</template>
<script>
import {mapActions} from 'vuex'
export default {
 name : "FilterTodo",
 methods : {
  ...mapActions['filterTodo']
 }
}
</script>
<style scoped>
 select {
  margin-top: 15px;
  border: 2px solid teal;
  padding: 6px;
  background: #d3d3d3;
 }
 p {
  font-size: 16px;
  color: teal;
  font-weight: 500;
 }
</style>