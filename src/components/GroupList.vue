<template>
  <div class="padding_15">
    <div>
      <el-table
        :data="groupList"
        style="width: auto">
        <el-table-column
          prop="homeworkId"
          label="作业编号">
        </el-table-column>
        <el-table-column
          prop="homeworkName"
          label="作业名称">
        </el-table-column>
        <el-table-column
          prop="groupId"
          label="小组编码">
        </el-table-column>
        <el-table-column
          prop="leader"
          label="组长">
        </el-table-column>
        <el-table-column
          prop="members"
          label="组员">
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      groupList: []
    }
  },
  methods: {
    handleClose () {
      this.dialogVisible = false
    },
    postGroup () {
      // 提交小组设置
    }
  }
}
</script>

<style scoped>
.padding_15 {
  padding: 15px;
}
</style>
