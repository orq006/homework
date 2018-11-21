<template>
<div class="page-wrapper">
  <div>
    <div class="menu-box">{{ title }}</div>
  </div>
  <div class="page-container-wrapper">
    <div class="page-sidebar-wrapper">
      <el-tree :data="data" :props="defaultProps" :default-expand-all="true" @node-click="handleNodeClick"></el-tree>
    </div>
    <div class="page-content-wrapper">
      <router-view></router-view>
    </div>
  </div>
</div>
</template>

<script>
export default {
  data () {
    return {
      title: '欢迎登陆作业管理界面',
      data: [{
        label: '课程',
        children: [{
          label: '设置课程信息',
          id: '11'
        }]
      }, {
        label: '作业',
        children: [{
          label: '布置学生作业',
          id: '21'
        }, {
          label: '检查学生作业',
          id: '22'
        }]
      }, {
        label: '学生',
        children: [ {
          label: '查看学生名单',
          id: '31'
        }, {
          label: '查看小组信息',
          id: '32'
        }]
      }
      ],
      defaultProps: {
        children: 'children',
        label: 'label'
      }
    }
  },
  created () {
  },
  methods: {
    handleNodeClick (data) {
      console.log('data.id', data.id)
      switch (data.id) {
        case '11':
          this.$router.push(`/teacher/setcourse`)
          break
        case '21':
          this.$router.push(`/teacher/assignHomework`)
          break
        case '22':
          this.$router.push(`/teacher/CheckHomework`)
          break
        case '31':
          this.$router.push(`/teacher/StudentList`)
          break
        case '32':
          this.$router.push(`/teacher/GroupList`)
          break
      }
    },
    handleSelect (key, keyPath) {
      console.log(key, keyPath)
    }
  }
}
</script>
<style scoped>
.page-wrapper {
  width: 100%;
  height: 100%;
  padding: 0;
  margin: 0;
}
.page-navbar-wrapper {
  position: fixed;
  top: 0;
  width: 100%;
  min-width: 956px;
  height: 54px;
  background-color: #333B49;
  z-index: 1005;
}
.menu-box {
  line-height: 70px;
  text-align: left;
  width: 100%;
  height: 70px;
  color: #ffffff;
  background-color: #545c64;
  padding: 10px 20px;
}
.menu-item {
  width: 20%;
  display: inline-block;
  color: #fff;
}
.page-container-wrapper {
  padding-top: 54px;
  width: 100%;
  height: 100%;
  display: flex;
}
.page-sidebar-wrapper {
  width: 200px;
  border-right: 1px solid #DFE2EE;
  overflow-y: auto;
}
.page-content-wrapper {
  position: relative;
  width: 100%;
  overflow-y: auto;
  flex: 1;
}
</style>
<style>
.el-menu {
  height: 100%;
  line-height: 70px;
}
</style>
