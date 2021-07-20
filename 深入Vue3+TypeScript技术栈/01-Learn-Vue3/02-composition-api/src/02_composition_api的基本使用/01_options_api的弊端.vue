<template>
  <div>
    <h2>{{counter}}</h2>
    <button @click="increment">+1</button>
    <button @click="decrement">-1</button>
    <p>{{doubleCounter}}</p>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      counter: 0
    }
  },
  methods: {
    increment() {
      this.counter++;
    },
    decrement() {
      this.counter--;
    }
  },
  computed: {
    doubleCounter() {
      return this.counter * this.counter;
    }
  }
}
</script>

<style scoped>

</style>