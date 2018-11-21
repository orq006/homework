<template>
  <div>
    <el-button @click="toStudent">学生</el-button>
    <el-button @click="toTeacher">老师</el-button>
  </div>
</template>

<script>
export default {
  data () {
    return {
      role: 0
    }
  },
  created () {
    // 判断身份
  },
  methods: {
    toStudent () {
      this.$router.push(`/student`)
    },
    toTeacher () {
      this.$router.push(`/teacher`)
    }
  }
}
</script>

<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
