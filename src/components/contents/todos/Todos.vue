<template>
  <div>
    <div v-for="(todo,index) in getDatas" :key="index">
      <TodoItem :todo="todo" @deleteTodo="$emit('handle_delete',todo.id)" />
    </div>
  </div>
</template>>

<script>
  import TodoItem from "./TotoItem";
  import { mapState, mapGetters } from "vuex";
  export default {
    name: "todos",
    props: ["todos"],
    //data: mapState(["todos"]),
    computed: mapGetters(["getDatas"]),
    components: {
      TodoItem
    },
    methods: {}
  };
</script>>