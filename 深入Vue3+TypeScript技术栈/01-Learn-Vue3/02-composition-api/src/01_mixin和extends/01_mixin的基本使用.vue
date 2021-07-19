<template>
  <div>{{title}} - {{message}}</div>
  <button @click="foo">test</button>
</template>

<script>
import { demoMixin } from "@/01_mixin和extends/mixins/demoMixin";

export default {
  mixins: [demoMixin],
  data() {
    return {
      title: 'hello world'
    }
  },
  methods: {

  }
}
</script>

<style scoped>

</style>