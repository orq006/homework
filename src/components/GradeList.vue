<template>
  <div>
    <el-table
      :data="homeworkList"
      stripe
      style="width: 100%">
      <el-table-column
        prop="homeworkId"
        label="作业号">
      </el-table-column>
      <el-table-column
        prop="class"
        label="课程">
      </el-table-column>
      <el-table-column
        prop="teacher"
        label="授课老师">
      </el-table-column>
      <el-table-column
        prop="homeworkName"
        label="作业名">
      </el-table-column>
      <el-table-column
        prop="grade"
        label="成绩">
      </el-table-column>
      <el-table-column
        label="操作">
        <template slot-scope="scope">
          <el-button @click="handleClick(scope.row)" type="text" size="small">查看</el-button>
        </template>
      </el-table-column>
      <el-table-column
        label="更多信息"
        type="expand"
        width="100">
        <template slot-scope="props">
          <el-form label-position="left" inline class="demo-table-expand">
            <el-form-item label="评语">
              <div>{{ props.row.describe }}</div>
            </el-form-item>
          </el-form>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  props: ['studentId'],
  data () {
    return {
      homeworkList: [{
        homeworkId: '2011211339',
        class: '计算机',
        teacher: '黄老师',
        homeworkName: '第一次作业',
        grade: '95',
        describe: '这是一段评语'
      }]
    }
  },
  created () {
    // 请求函数
  },
  methods: {
    handleClick (data) {
      // 跳转函数
    }
  }
}
</script>

<style scoped>

</style>
