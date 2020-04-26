<template>
  <div class="home">
    <AddTodos @addTodos="addTodos" />
    <Todos :todos="todos" @handle_delete="deleteItem" />
  </div>
</template>

<script>
  // @ is an alias to /src

  import Todos from "@/components/contents/todos/Todos";
  import AddTodos from "@/components/contents/todos/AddTodos";
  export default {
    data() {
      return {
        todos: []
      };
    },
    components: {
      Todos,
      AddTodos
    },
    methods: {
      deleteItem(id) {
        this.todos = this.todos.filter(todo => todo.id != id);
      },
      addTodos(newTodo) {
        console.log("------");
        this.todos = [...this.todos, newTodo];
      }
    }
  };
</script>