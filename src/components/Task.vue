<template>
  <div>
    <div v-for="td in props.todoTask" :key="td.id">
      {{ td.id + 1 }} {{ td.todo }}
      <button>EDT</button>
      <button @click="dltTodo">DLT</button>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps(["todoTask"]);

const dltTodo = function (): null {
  props.todoTask.pop();
  console.log(props.todoTask);
  return null;
};
</script>

<style></style>
