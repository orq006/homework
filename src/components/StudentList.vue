<template>
  <div class="padding_15">
   <div>
     <el-table
       :data="studentList"
       stripe
       style="width: 80%">
       <el-table-column
         prop="class"
         label="班级">
       </el-table-column>
       <el-table-column
         prop="name"
         label="姓名">
       </el-table-column>
       <el-table-column
         prop="studentId"
         label="学号">
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
   <div class="padding_top_15">
     <el-button @click="addStudent" type="primary">添加学生</el-button>
   </div>
   <div>
     <el-dialog
         title="添加学生"
         :visible.sync="dialogVisible"
         width="400px"
         :before-close="handleClose">
         <div class="padding_top_15">
           <span>班级</span>
           <el-input class="input_small" v-model="studentClass"></el-input>
         </div>
         <div class="padding_top_15">
           <span>姓名</span>
           <el-input class="input_small" v-model="stdentName"></el-input>
         </div>
         <div class="padding_top_15">
           <span>学号</span>
           <el-input class="input_small" v-model="studentId"></el-input>
         </div>
         <div class="padding_top_15 add_button">
           <el-button type="primary" @click="postStudent">导入学生信息</el-button>
         </div>
         <span slot="footer" class="padding_top_15">
            <el-button @click="dialogVisible = false">取 消</el-button>
            <el-button type="primary" @click="dialogVisible = postStudent">确 定</el-button>
         </span>
     </el-dialog>
   </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      studentList: [],
      dialogVisible: false,
      studentClass: '',
      stdentName: '',
      studentId: ''
    }
  },
  created () {
    this.getStudentList()
  },
  methods: {
    getStudentList () {
      // 获取学生列表
    },
    handleClick (data) {
      // 跳转到相应的页面
    },
    addStudent () {
      this.dialogVisible = true
    },
    postStudent () {
      // 将信息发给后台
    },
    handleClose () {
      this.dialogVisible = false
    }
  }
}
</script>

<style scoped>
.padding_15 {
  padding: 15px;
}
.padding_top_15 {
  padding: 15px 0 0 0;
}
.input_small {
  width: 250px;
}
.add_button {
  padding: 15px 0 0 30px;
}
</style>
