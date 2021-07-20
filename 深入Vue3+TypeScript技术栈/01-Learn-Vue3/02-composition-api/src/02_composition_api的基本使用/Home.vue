<template>
  Home Page {{message}}
</template>

<script>
export default {
  name: "Home",
  props: {
    message: {
      type: String,
      required: true
    }
  },
  /**
   * @param props: 父组件传递过来的属性
   * @param context
   */
  setup(props, context) {
    console.log(props, context)
  }
}
</script>

<style scoped>

</style>