import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login'
import Layout from '@/components/Layout'
import SetCourse from '@/components/SetCourse'
import AssignHomework from '@/components/AssignHomework'
import CheckHomework from '@/components/CheckHomework'
import StudentList from '@/components/StudentList'
import GroupList from '@/components/GroupList'
import CourseList from '@/components/CourseList'
import LayoutStudent from '@/components/LayoutStudents'
import HomeworkList from '@/components/HomeworkList'
import HomeworkDetail from '@/components/HomeworkDetail'
import GradeList from '@/components/GradeList'
import StudentDetail from '@/components/studentDetail'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    {
      path: '/teacher',
      name: 'Layout',
      component: Layout,
      redirect: '/teacher/setcourse',
      children: [{
        path: '/teacher/setcourse',
        component: SetCourse
      }, {
        path: '/teacher/assignHomework',
        component: AssignHomework
      }, {
        path: '/teacher/CheckHomework',
        component: CheckHomework
      }, {
        path: '/teacher/StudentList',
        component: StudentList
      }, {
        path: '/teacher/GroupList',
        component: GroupList
      }]
    },
    {
      path: '/student',
      name: 'Layout',
      component: LayoutStudent,
      redirect: '/student/courseList',
      children: [{
        path: '/student/courseList',
        component: CourseList
      }, {
        path: '/student/homeworkList',
        component: HomeworkList
      }, {
        path: '/student/gradeList',
        component: GradeList
      }, {
        path: '/student/homeworkDetail/:homeworkId',
        component: HomeworkDetail
      }, {
        path: '/student/studentDetail/:studentId',
        component: StudentDetail
      }]
    }
  ]
})
