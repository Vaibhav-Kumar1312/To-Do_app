<template>
  <nav>
    <router-link to="/">Sign Up</router-link> |
    <router-link :to="{ name: 'sgnin' }">Sign In</router-link>
    <!--this is how we use named routes--:to='{name:"name of the route"}' -->
    <input
      type="text"
      label="Add task"
      placeholder="Add To-Do"
      v-model="todo"
    />
    <button @click="pushTodo">ADD</button>
  </nav>
  {{ todo }}
  <router-view />
</template>

<script lang="ts" setup>
// import { defineComponent } from "@vue/composition-api";
import { ref, reactive } from "vue";

interface todo {
  id: number;
  todo: string;
}
let id = ref(0);
let naam = ref<string>("vaibhav");
let todo = ref("");
let todoArr = reactive<todo[]>([]);
const pushTodo = function () {
  // console.log(id.value++, todo.value);
  todoArr.push({ id: id.value++, todo: todo.value });
  console.log(todoArr);
};
// export default defineComponent({});
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
