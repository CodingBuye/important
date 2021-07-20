<template>
  <div>
    <h2>当前计数：{{counter}}</h2>
    <button @click="increment">+1</button>
  </div>
</template>

<script>
import { ref } from 'vue'

export default {
  name: "App",
  setup() {

    let counter = ref(100);

    const increment = () => {
      counter.value++;
      console.log(counter.value)
    }

    return {
      counter,
      increment
    }
  }
}
</script>

<style scoped>

</style>