<template>
  <div class="padding_15">
    <div>
      <div>
        <div class="inline padding_top_15">
          <span>作业名称</span>
          <el-input v-model="homeworkName" class="input_small"></el-input>
        </div>
        <div class="inline padding_top_15">
          <span>小组名称</span>
          <el-select v-model="groupValue" placeholder="选择小组编号" class="input_small">
            <el-option
              v-for="item in groups"
              :key="item.value"
              :label="item.label"
              :value="item.id">
            </el-option>
          </el-select>
        </div>
      </div>
      <div>
        <div class="inline padding_top_15">
          <span>发布时间</span>
          <el-date-picker
            v-model="startTime"
            type="date"
            placeholder="选择日期">
          </el-date-picker>
        </div>
        <div class="inline padding_top_15">
          <span>截止时间</span>
          <el-date-picker
            v-model="deadline"
            type="date"
            placeholder="选择日期">
          </el-date-picker>
        </div>
      </div>
    </div>
    <div class="padding_top_15">
      <el-table
        :data="tableData"
        style="width: 100%">
        <el-table-column
          prop="homeworkName"
          label="作业名称">
        </el-table-column>
        <el-table-column
          prop="startTime"
          label="发布时间">
        </el-table-column>
        <el-table-column
          prop="deadline"
          label="截止日期">
        </el-table-column>
        <el-table-column
          prop="groupId"
          label="小组编号">
        </el-table-column>
        <el-table-column
          prop="groupName"
          label="小组名称">
        </el-table-column>
        <el-table-column
          prop="studentName"
          label="学生姓名">
        </el-table-column>
        <el-table-column
          prop="sumGrade"
          label="总成绩">
        </el-table-column>
        <el-table-column
          label="操作">
          <template slot-scope="scope">
            <el-button @click="modifyInfo(scope.row)" type="text" size="small">修改</el-button>
          </template>
        </el-table-column>
        <el-table-column
          label="更多信息"
          type="expand"
          width="100">
          <template slot-scope="props">
            <el-form label-position="left" inline class="demo-table-expand">
              <el-form-item label="批改说明">
                <span>{{ props.row.describe }}</span>
              </el-form-item>
              <el-form-item label="学生观点">
                <span>{{ props.row.viewpoint}}</span>
              </el-form-item>
            </el-form>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <div>
      <el-dialog
        :title="dialogTitle"
        :visible.sync="dialogVisible"
        width="400px"
        :before-close="handleDialogClose">
        <div>
          <span>本次作业成绩</span>
          <el-input class="input_small" v-model="studentClass"></el-input>
        </div>
        <div class="describe padding_top_15">
          <span class="describe_lable">评语</span>
          <el-input v-model="courseDescribe" type="textarea" placeholder="请输入内容" :autosize="{ minRows: 7, maxRows: 8}" :key="inside"></el-input>
        </div>
        <span slot="footer">
            <el-button @click="dialogVisible = false">取 消</el-button>
            <el-button type="primary" @click="modifyGradeInfo">确 定</el-button>
         </span>
      </el-dialog>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      dialogTitle: '',
      dialogVisible: false,
      studentId: '',
      homeworkName: '',
      startTime: '',
      deadline: '',
      groups: [{
        label: '软工小组',
        id: '2015211335'
      }, {
        label: '测试小组',
        id: '2015211336'
      }, {
        label: '选择全部',
        id: ''
      }],
      groupValue: '',
      homeworkList: [{
        studentId: '2015211220',
        homeworkName: '第一次名称',
        startTime: '2018-11-15',
        deadline: '2018-11-17',
        groupName: '软工小组',
        groupId: '2015211335',
        studentName: '小红',
        sumGrade: '未评分',
        describe: '这是一段老师的评语,这是一段老师的评语,这是一段老师的评语,这是一段老师的评语,这是一段老师的评语,这是一段老师的评语',
        viewpoint: '这是学生的留言'
      }]
    }
  },
  computed: {
    tableData: function () {
      let array = this.homeworkList
      if (this.homeworkName) {
        array = array.filter(db => db.homeworkName.toLocaleLowerCase().indexOf(this.homeworkName.toLocaleLowerCase()) > -1)
      }
      if (this.groupValue) {
        array = array.filter(db => db.groupId === this.groupValue)
      }
      return array
    }
  },
  created () {
    this.getHomeworkList()
  },
  methods: {
    getHomeworkList () {
      // 获取作业信息表
    },
    modifyInfo (info) {
      this.studentId = info.studentId
      this.dialogVisible = true
      this.dialogTitle = '修改' + info.studentName + '的成绩'
    },
    handleDialogClose () {
      this.dialogVisible = false
    },
    modifyGradeInfo () {
      // 批改学生作业
    }
  }
}
</script>

<style scoped>
.inline {
  display: inline-block;
}
.input_small {
  width: 220px;
}
.padding_15 {
  padding: 15px;
}
.padding_top_15 {
  padding: 15px 0 0 0;
}
</style>
