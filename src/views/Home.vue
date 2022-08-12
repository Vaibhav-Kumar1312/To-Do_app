<template>
  <div class="home">Add a To-Do</div>
  <input type="text" label="Add task" placeholder="Add To-Do" v-model="todo" />
  <button @click="pushTodo">ADD</button>
  <Task :todoTask="todoArr" :todoValue="todo" />
</template>

<script lang="ts" setup>
// import { defineComponent } from "@vue/composition-api";
import { ref, reactive } from "vue";
import Task from "@/components/Task.vue";
// import todoTs from "../types/todoTs";

interface todoType {
  id: number;
  todo: string;
}
let id = ref(0);
let todo = ref("");
let todoArr = reactive<todoType[]>([]);

const pushTodo = function (): void {
  // console.log(id.value++, todo.value);
  todoArr.push({ id: id.value++, todo: todo.value });
  // console.log(todoArr);
  todo.value = "";
};
// export default defineComponent({});
</script>
