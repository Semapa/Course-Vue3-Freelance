import {createStore} from 'vuex'

export const store = createStore({

    state() {
       return {
            tasks: localStorage.getItem('tasks') ? [...JSON.parse(localStorage.getItem('tasks'))] : [],
            activeTasks: localStorage.getItem('activeTasks') || 0
        }
    },
    getters: {
        getTasks(state) {
            return state.tasks
        },
        getCurrentTask: (state) => (id) => {
            let el = state.tasks.find(item => item.id === +id)
            return el ? el : 0
        },
        getActiveTasks(state) {
            return state.activeTasks
        }
    },
    mutations: {
        addTask(state, task){
            state.tasks.push(task)
            localStorage.setItem('tasks', JSON.stringify(state.tasks))
        },
        setActiveTasks(state, payload){
            if(payload === 'add') {
                state.activeTasks++
            }
            else {
                if(state.activeTasks > 0) state.activeTasks --
            }
            localStorage.setItem('activeTasks', state.activeTasks)
        },
        changeStatus(state, payload){
            let el = state.tasks.find(item => item.id === +payload.id)
            el.status = payload.status
            el.type = payload.type
            localStorage.setItem('tasks', JSON.stringify(state.tasks))
        }
    }
})