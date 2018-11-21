<template>
  <div>
    <el-table
      :data="courseList"
      style="width: auto">
      <el-table-column
        prop="courseName"
        label="课程名称">
      </el-table-column>
      <el-table-column
        prop="createDate"
        label="创建时间">
      </el-table-column>
      <el-table-column
        prop="teacherName"
        label="授课老师">
      </el-table-column>
      <el-table-column
        prop="courseTerms"
        label="开课学期">
      </el-table-column>
      <el-table-column
        type="expand"
        label="课程描述"
        width="80">
        <template slot-scope="props">
          <el-form label-position="left" inline class="demo-table-expand">
            <el-form-item>
              <span>{{ props.row.describe }}</span>
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
      courseList: [{
        courseName: '计算机',
        createDate: '2018-10-10',
        teacherName: '黄老师',
        courseTerms: '春季学期',
        describe: '这是一段常常的描述'
      }]
    }
  },
  created () {
    // 请求课程信息
  }
  // methods: {
  //
  // }
}
</script>

<style scoped>

</style>
