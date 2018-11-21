<template>
    <div class="padding-15">
      <div>
        <div class="inline">
          <span class="label">课程</span>
          <span class="info-box">{{course}}</span>
        </div>
        <div class="inline">
          <span class="label">授课老师</span>
          <span class="info-box">{{teacher}}</span>
        </div>
      </div>
      <div>
        <div class="inline">
          <span class="label">作业名</span>
          <span class="info-box">{{homework}}</span>
        </div>
        <div class="inline">
          <span class="label">小组人数</span>
          <span class="info-box">{{count}}</span>
        </div>
      </div>
      <div>
        <div class="inline">
          <span class="label">布置时间</span>
          <span class="info-box">{{createTime}}</span>
        </div>
        <div class="inline">
          <span class="label">截止时间</span>
          <span class="info-box">{{deadline}}</span>
        </div>
      </div>
      <div class="padding-top-15">
        <span>详细信息</span>
        <el-input v-model="courseDescribe"
                  type="textarea"
                  placeholder="无详细信息"
                  :autosize="{ minRows: 7, maxRows: 8}"
                  :disabled="true">
        </el-input>
      </div>
      <div class="footer padding-top-15">
        <el-button type="primary" @click="dialogVisible = true">创建分组</el-button>
        <el-button type="primary" @click="postHomework">提交作业</el-button>
      </div>
      <el-dialog
        title="创建分组"
        :visible.sync="dialogVisible"
         width="400px"
        :before-close="handleClose">
        <div class="content">
          <div>
            <span>小组名称</span>
            <el-input class="input_small" v-model="groupName"></el-input>
          </div>
          <div class="padding_top_15">
            <span>选择成员</span>
            <el-select v-model="groupMember" placeholder="选择成员" class="input_small" @change="handlMmeberChange">
              <el-option
                v-for="item in studentList"
                :key="item.id"
                :label="item.name"
                :value="item.id">
              </el-option>
            </el-select>
          </div>
          <div class="lable-box">
            <span>已选择</span>
            <el-tag
              v-for="tag in groupMembers"
              :key="tag.id"
              closable
              @close="handleTabClose(tag)">
              {{tag.name}}
            </el-tag>
          </div>
        </div>
        <span slot="footer" class="footer">
            <el-button @click="dialogVisible = false">取 消</el-button>
            <el-button type="primary" @click="createGroup">确 定</el-button>
         </span>
      </el-dialog>
    </div>
</template>

<script>
export default {
  props: ['studentId', 'homeworkId'],
  data () {
    return {
      course: '',
      teacher: '',
      homework: '',
      count: '',
      groupName: '',
      courseDescribe: '',
      createTime: '',
      deadline: '',
      dialogVisible: false,
      groupMember: {},
      members: [{
        name: '小红',
        id: '2015211309'
      }, {
        name: '小白',
        id: '2015211211'
      }, {
        name: '小黑',
        id: '201521121'
      }, {
        name: '小套',
        id: '201521122'
      }, {
        name: '小周',
        id: '201521123'
      }, {
        name: '小鱼',
        id: '201521124'
      }],
      groupMembers: [{
        name: '小周',
        id: '201521123'
      }, {
        name: '小鱼',
        id: '201521124'
      }]
    }
  },
  computed: {
    studentList: function () {
      return this.members.filter(db => this.findIndex(db.id) === -1)
    }
  },
  created () {
    // 请求数据
  },
  watch: {
    groupMember () {
      // 拿到的是id
    }
  },
  methods: {
    createGroup () {
      // 创建分组
    },
    postHomework () {
      // 提交作业
    },
    handleClose () {
      this.dialogVisible = false
      this.groupMember = ''
    },
    handlMmeberChange (data) {
      let lenght = this.members.length
      for (let i = 0; i < lenght; i++) {
        if (this.members[i].id === data) {
          if (this.findIndex(data) === -1) {
            this.groupMembers.push(this.members[i])
          }
          break
        }
      }
    },
    findIndex (id) {
      let lenght = this.groupMembers.length
      for (let i = 0; i < lenght; i++) {
        if (this.groupMembers[i].id === id) {
          return i
        }
      }
      return -1
    },
    handleTabClose (data) {
      let index = this.findIndex(data.id)
      this.groupMembers.splice(index, 1)
    }
  }
}
</script>

<style scoped>
.inline {
  display: inline-block;
  width: 40%;
}
.padding-15 {
  padding: 15px;
}
.footer {
  text-align: right;
}
.padding-top-15 {
  padding-top: 15px;
}
.info-box {
  min-width: 120px;
  display: inline-block;
  border-bottom: 1px solid lightsteelblue;
}
.label {
  width: 80px;
  display: inline-block;
}
.input_small {
  padding-bottom: 15px;
  width: 200px;
}
.content {
  text-align: center;
}
.lable-box {
  text-align: left;
  width: 300px;
  padding-left: 50px;
}
</style>
