<template>
  <div>{{title}} - {{message}}</div>
  <button @click="foo">test</button>
</template>

<script>
import { demoMixin } from "@/01_mixin和extends/mixins/demoMixin";

export default {
  name: "App",
  mixins: [demoMixin],
  data() {
    return {
      title: 'hello world',
      message: 'local message'
    }
  },
  methods: {

  },
  created() {
    console.log('App created')
  }
}
</script>

<style scoped>

</style>