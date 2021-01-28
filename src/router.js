import {createRouter, createWebHistory} from 'vue-router'
import Tasks from './views/Tasks'
import NewTask from './views/New'
import Task from './views/Task'

export default createRouter({
    history: createWebHistory(),
    routes: [
        {path: '/tasks', component: Tasks, alias: '/'},
        {path: '/new-task', component: NewTask},
        {path: '/task', component: Task},
    ]
})
