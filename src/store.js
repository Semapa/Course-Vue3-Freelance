import {createStore} from 'vuex'

export const store = createStore({

    state() {
        return {
            tasks: [],
            activeTasks: 0,
            currentTaskId: 0
        }
    },
    getters: {
        getTasks(state) {
            return state.tasks
        },
        getCurrentTask(state) {
            let el = state.tasks.find(item => item.id === state.currentTaskId)
            return el
        },
        getActiveTasks(state) {
            return state.activeTasks
        }
    },
    mutations: {
        loadTask() {
            let tasks = JSON.parse(localStorage.getItem('tasks'))
            console.log('loadTask()',tasks)
            // tasks.forEach((task) => {
            //     console.log('loadTask()',task)
            //     state.tasks.push(task)
            // })
        },
        addTask(state, task){
            state.tasks.push(task)
            localStorage.setItem('tasks', JSON.stringify(state.tasks))
        },
        addCurrentTask(state, taskId){
            state.currentTaskId = taskId.id
        },
        watchActiveTasks(state, payload){
            if(payload === 'add') {
                state.activeTasks++
            }
            else {
                if(state.activeTasks > 0) state.activeTasks --
            }
        },
        changeStatus(state, payload){
            let el = state.tasks.find(item => item.id === payload.id)
            el.status = payload.status
            el.type = payload.type
            localStorage.setItem('tasks', JSON.stringify(state.tasks))
        }

    }
})