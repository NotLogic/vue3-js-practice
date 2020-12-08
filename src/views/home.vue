<template>
  <div class="home_page">
    <el-button type="primary" @click="go">eleemnt组件示例</el-button>
  </div>
</template>

<script>
export default {
  components: {
  },
  data () {
    return {
      msg: '首页'
    }
  },
  methods: {
    go () {
      this.$router.push({
        path: '/element'
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.home_page {
}
</style>