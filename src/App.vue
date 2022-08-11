<template>
  <nav>
    <router-link to="/">HOME</router-link> |
    <router-link :to="{ name: 'logIn' }">LOG-IN</router-link><br />
    <!--this is how we use named routes--:to='{name:"name of the route"}' -->
  </nav>
  <router-view />
</template>

<script lang="ts" setup>
// // import { defineComponent } from "@vue/composition-api";
// import { ref, reactive } from "vue";
// import Task from "@/components/Task.vue";

// interface todoType {
//   id: number;
//   todo: string;
// }
// let id = ref(0);
// let todo = ref("");
// let todoArr = reactive<todoType[]>([]);

// const pushTodo = function (): void {
//   // console.log(id.value++, todo.value);
//   todoArr.push({ id: id.value++, todo: todo.value });
//   console.log(todoArr);
// };
// // export default defineComponent({});
//
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
