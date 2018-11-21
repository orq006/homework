<template>
  <div class="set-course">
    <div class="term">
      <span>选择课程</span>
      <el-select v-model="courseValue" placeholder="选择课程" class="input">
        <el-option
          v-for="item in course"
          :key="item.value"
          :label="item.label"
          :value="item.value">
        </el-option>
      </el-select>
    </div>
    <div class="term">
      <span>开课学期</span>
      <el-select v-model="termValue" placeholder="开课学期" class="input">
        <el-option
          v-for="item in courseTerms"
          :key="item.value"
          :label="item.label"
          :value="item.value">
        </el-option>
      </el-select>
    </div>
    <div class="term">
      <el-button @click="dialogVisible = true" type="primary">添加课程</el-button>
    </div>
    <div>
      <el-dialog
        title="添加课程"
        :visible.sync="dialogVisible"
        width="400px"
        :before-close="handleClose">
        <div>
          <span>课程名称</span>
          <el-input class="input_small" v-model="studentClass"></el-input>
        </div>
        <div class="padding_top_15">
          <span>开课学期</span>
          <el-select v-model="termValue" placeholder="开课学期" class="input_small">
            <el-option
              v-for="item in courseTerms"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
        </div>
        <div class="describe padding_top_15">
          <span class="describe_lable">课程描述</span>
          <el-input v-model="courseDescribe" type="textarea" placeholder="请输入内容" :autosize="{ minRows: 7, maxRows: 8}" :key="inside"></el-input>
        </div>
        <span slot="footer">
            <el-button @click="dialogVisible = false">取 消</el-button>
            <el-button type="primary" @click="postStudent">确 定</el-button>
         </span>
      </el-dialog>
    </div>
    <div class="describe padding_15">
      <span class="describe_lable">课程描述</span>
      <el-input v-model="courseDescribe" type="textarea" placeholder="请输入内容" :autosize="{ minRows: 7 }" :key="outside"></el-input>
    </div>
    <div class="button_box">
      <el-button @click="postCourseInfo" type="primary">确定</el-button>
      <el-button @click="resetInfo">取消</el-button>
    </div>
  </div>
</template>

<script>
export default {
  props: ['tId'],
  data () {
    return {
      courseName: '',
      courseDescribe: '',
      courseTerms: [{
        value: 'id1',
        label: '春季学期'
      }],
      termValue: '',
      courseValue: '',
      course: [{
        value: 'id1',
        label: '数学'
      }],
      dialogVisible: false
    }
  },
  created () {
    // 获取老师的名字
  },
  methods: {
    postCourseInfo () {
      // 提交老师填写的内容
    },
    resetInfo () {
      this.courseName = ''
      this.courseDescribe = ''
    },
    handleClose () {
      this.dialogVisible = false
    }
  }
}
</script>

<style scoped>
.input {
  width: 50%;
}
.set-course {
  padding: 15px;
}
.name {
  width: 33%;
  display: inline-block;
}
.term {
  width: 32%;
  display: inline-block;
}
.padding_15 {
  padding: 15px 0;
}
.describe_lable {
  padding: 0 0 15px 0;
  display: inline-block;
}
.button_box {
  width: 100%;
  text-align: right;
}
.input_small {
  width: 200px;
  display: inline-block;
}
.padding_top_15 {
  padding: 15px 0 0 0;
}
</style>
