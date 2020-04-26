<template>
  <form @submit.prevent="addTodos">
    <input v-model="title" type="text" placeholder="请输入添加事项..." />
    <input type="submit" value="添加" />
  </form>
</template>>
<script>
import uuid from "uuid";
import axios from "axios";
import { mapActions } from "vuex";
export default {
  name: "AddTodo",
  data() {
    return {
      title: ""
    };
  },
  methods: {
    addTodos() {
      const newTodo = {
        id: uuid.v4(),
        title: this.title,
        completed: false
      };
      console.log(newTodo);
      this.$store.dispatch("addTodos", newTodo);
      // this.$emit("addTodos", newTodo);
      // axios
      //   .get("https://jsonplaceholder.typicode.com/todos")
      //   .then(res => {
      //     console.log(res.data);
      //   })
      //   .catch(err => {});
    }
  }
};
</script>>