<template>
  <div>
    <div v-for="td in dat" :key="td.id">
      {{ td.id }} {{ td.todo }}
      <button>EDIT</button>
      <button @click="dat.pop()">DLT</button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
// import todoTs from "./types/todoTs.ts";

export default defineComponent({
  name: "Task",
  props: ["dat"],
  data() {
    return {};
  },
  methods: {
    // dltTodo(id: number): void {
    //   this.newData = this.data.slice();
    //   console.log(this.newData);
    //   this.newData.splice(id, 1);
    // },
  },
  watch: {
    dat(nw, pv) {
      console.log(this.dat);
    },
  },
});
</script>

<style></style>
