<template>
  <div class="todo-item" :class="{is_completed:todo.completed}">
    <p>
      <input type="checkbox" @change="changeClick()" />
      {{todo.title}}
      <button class="del" @click="deleteTodo(todo.id)">X</button>
    </p>
  </div>
</template>>
<script>
import { mapMutations } from "vuex";
export default {
  name: "todo",
  props: ["todo"],
  methods: {
    changeClick() {
      this.todo.completed = !this.todo.completed;
    },
    deleteTodo(id) {
      this.$store.commit("deleteTodo", id);
    }
  }
};
</script>>
<style scoped>
.todo-item {
  background-color: #f4f4f4;
  padding: 10px;
  border-bottom: 1px #ccc dotted;
}
.is_completed {
  text-decoration: line-through;
}
.del {
  /* width: 20px;
  height: 20px; */
  background: #ff0000;
  color: #fff;
  border: none;
  padding: 5px 9px;
  border-radius: 50%;
  float: right;
  cursor: pointer;
}
</style>