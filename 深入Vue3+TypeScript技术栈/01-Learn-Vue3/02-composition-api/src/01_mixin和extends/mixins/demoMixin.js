export const demoMixin = {
  data() {
    return {
      message: "hello demo mixin"
    }
  },
  methods: {
    foo() {
      console.log('foo')
    }
  },
  created() {
    console.log('执行了demo mixin created')
  }
}