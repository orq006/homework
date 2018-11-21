<template>
  <div>
    <div>
      <span>姓名：</span>
      <span>{{studentName}}</span>
    </div>
    <div>
      <span>学号：</span>
      <span>{{studentId}}</span>
    </div>
    <div>
      <span>班级：</span>
      <span>{{studentClass}}</span>
    </div>
    <div>
      <span>专业：</span>
      <span>{{studentMajor}}</span>
    </div>
    <div>
      <span>性别：</span>
      <span>{{studentSex}}</span>
    </div>
    <div>
      <span>年龄：</span>
      <span>{{studentAge}}</span>
    </div>
    <el-table
      :data="studentInfo"
      stripe
      style="width: 100%">
      <el-table-column
        prop="courseId"
        label="课程号">
      </el-table-column>
      <el-table-column
        prop="courseName"
        label="课程名">
      </el-table-column>
      <el-table-column
        prop="teacher"
        label="授课教师">
      </el-table-column>
      <el-table-column
        prop="dailyGrade"
        label="平时成绩">
      </el-table-column>
      <el-table-column
        prop="midTermGrade"
        label="期中成绩">
      </el-table-column>
      <el-table-column
        prop="sumGrade"
        label="总成绩">
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  props: ['name'],
  data () {
    return {
      studentInfo: [{
        courseId: '2015211339',
        courseName: '计算机',
        teacher: '黄老师',
        dailyGrade: '90',
        midTermGrade: '90',
        sumGrade: '88'
      }],
      test: 'test',
      studentName: '小红',
      studentId: '20010',
      studentClass: '309班',
      studentMajor: '计算机',
      studentSex: '女',
      studentAge: '20'
    }
  }
}
</script>

<style scoped>

</style>
