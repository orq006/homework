<template>
  <div class="padding_15">
    <div class="name">
      <span>作业名称</span>
      <el-input v-model="homeworkName" class="input"></el-input>
    </div>
    <div class="proportion">
      <span>作业成绩比例</span>
      <el-input v-model="proportion" class="input"></el-input>
    </div>
    <div class="deadline">
      <span>截止日期</span>
      <el-date-picker
        v-model="deadline"
        type="datetime"
        placeholder="选择时间">
      </el-date-picker>
    </div>
    <div class="padding_top_15 add_button">
      <el-button type="primary" @click="dialogVisible = true">设置小组信息</el-button>
    </div>
    <div>
      <el-dialog
        title="设置小组信息"
        :visible.sync="dialogVisible"
        width="400px"
        :before-close="handleClose">
        <div class="padding_top_15">
          <div class="inline">
            <span>人数范围</span>
          </div>
          <div class="inline input_box">
            <el-input class="input_min" v-model="minMembers"></el-input>
            <span>--</span>
            <el-input class="input_min" v-model="maxMembers"></el-input>
          </div>
        </div>
        <div class="padding_top_15">
          <span>小组编号前缀</span>
          <el-input class="input_small" v-model="preGroupId"></el-input>
        </div>
        <span slot="footer" class="padding_top_15">
            <el-button @click="dialogVisible = false">取 消</el-button>
            <el-button type="primary" @click="dialogVisible = postGroup">确定</el-button>
         </span>
      </el-dialog>
    </div>
    <div class="describe">
      <span class="describe_lable">输入作业描述</span>
      <el-input v-model="homeworkDescribe" type="textarea" placeholder="请输入内容" :autosize="{ minRows: 7}"></el-input>
    </div>
    <div class="padding_top_15 add_button">
      <el-button type="primary" @click="postHomework">确定</el-button>
    </div>
  </div>
</template>

<script>
export default {
  props: ['tId'],
  data () {
    return {
      homeworkName: '',
      deadline: '',
      proportion: '',
      homeworkDescribe: '',
      dialogVisible: false,
      minMembers: 0,
      maxMembers: 0,
      preGroupId: ''
    }
  },
  methods: {
    postHomework () {
      // 提交作业信息
    }
  }
}
</script>

<style scoped>
.input {
  width: 130px;
}
.name {
  display: inline-block;
}
.describe {
  padding: 15px 0;
}
.proportion {
  display: inline-block;
}
.deadline {
  display: inline-block;
}
.padding_15 {
  padding: 15px;
}
.padding_top_15 {
  padding: 15px 0 0 0;
}
.input_min {
  width: 90px;
}
.input_small {
  width: 200px;
}
.inline {
  display: inline-block;
}
.input_box {
  padding: 0 0 0 31px;
}
.add_button {
  display: inline-block;
  padding-left: 15px;
}
</style>
<style>
.deadline .el-date-editor.el-input, .el-date-editor.el-input__inner {
  width: 195px;
}
</style>
