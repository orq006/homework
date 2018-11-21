<template>
    <div class="page-wrapper">
      <div>
        <div class="menu-box">欢迎登陆作业管理系统</div>
      </div>
      <div class="page-container-wrapper">
        <div class="page-sidebar-wrapper">
          <el-tree :data="nemu" :props="defaultProps" :default-expand-all="true" @node-click="handleNodeClick"></el-tree>
        </div>
        <div class="page-content-wrapper">
          <router-view></router-view>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  props: ['studentId'],
  data () {
    return {
      nemu: [{
        label: '我的主页',
        id: '1'
      }, {
        label: '查看课程信息',
        id: '2'
      }, {
        label: '查看作业信息',
        id: '3'
      }, {
        label: '查看作业成绩',
        id: '4'
      }],
      defaultProps: {
        children: 'children',
        label: 'label'
      }
    }
  },
  methods: {
    handleNodeClick (data) {
      switch (data.id) {
        case '1':
          this.$router.push(`/student/studentDetail/${1}`)
          break
        case '2':
          this.$router.push(`/student/courseList`)
          break
        case '3':
          this.$router.push(`/student/homeworkList`)
          break
        case '4':
          this.$router.push(`/student/gradeList`)
      }
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
