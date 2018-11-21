<template>
  <div>
    <div>
      <el-table
        :data="courseList"
        stripe
        style="width: 100%">
        <el-table-column
          prop="homeworkId"
          label="作业名">
        </el-table-column>
        <el-table-column
          prop="homeworkName"
          label="作业名">
        </el-table-column>
        <el-table-column
          prop="class"
          label="课程">
        </el-table-column>
        <el-table-column
          prop="teacherName"
          label="授课老师">
        </el-table-column>
        <el-table-column
          prop="startTime"
          label="布置时间">
        </el-table-column>
        <el-table-column
          prop="deadline"
          label="截止时间">
        </el-table-column>
        <el-table-column
          fixed="right"
          label="操作">
          <template slot-scope="scope">
            <el-button @click="handleClick(scope.row)" type="text" size="small">查看</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>
export default {
  props: [],
  data () {
    return {
      courseList: [{
        homeworkId: '20181152',
        class: '计算机',
        teacherName: '黄老师',
        homeworkName: '第一次作业',
        startTime: '2018-12-11',
        deadline: '2018-12-15'
      }]
    }
  },
  created () {
    // 请求作业信息
  },
  methods: {
    handleClick (data) {
      // 跳转到相应的页面
    }
  }
}
</script>

<style scoped>

</style>
