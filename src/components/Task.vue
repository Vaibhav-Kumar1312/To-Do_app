<template>
  <div>
    <div v-for="(td, index) in props.todoTask" :key="td.id">
      {{ index + 1 }} {{ td.todo }}
      <button @click="edtTodo">EDT</button>
      <button @click="dltTodo(index)">DLT</button>
      <!-- {{ todoValue }} -->
    </div>
  </div>
</template>

<script setup lang="ts">
// const props = defineProps(["todoTask", "todoValue"]);
const props = defineProps({
  todoTask: {
    required: true,
    type: Object,
  },
  todoValue: {
    required: true,
    type: String,
  },
});

const dltTodo = function (index: number): null {
  console.log(index);
  props.todoTask.splice(index, 1);
  console.log(props.todoTask);
  return null;
};

function edtTodo() {
  const edt = props.todoTask.pop();
  console.log(edt);
}
</script>

<style></style>
