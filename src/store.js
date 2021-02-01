import {createStore} from 'vuex'

export const store = createStore({

    state() {
        return {
            tasks: [],
            currentTask: {},
            activeTasks: 0
        }
    },
    getters: {
        getTasks(state) {
            return state.tasks
        },
        getCurrentTask(state) {
            return state.currentTask
        },
        getActiveTasks(state) {
            return state.activeTasks
        }
    },
    mutations: {
        addTask(state, payload){
            state.tasks.push(payload)
        },
        addCurrentTask(state, payload){
            state.currentTask = payload
            // console.log('state.currentTask', state.currentTask)
        },
        watchActiveTasks(state, payload){
            if(payload === 'add') {
                state.activeTasks++
            }
            else {
                if(state.activeTasks > 0) state.activeTasks --
            }
            // console.log('state.activeTasks', state.activeTasks)
        },
        changeStatus(state, payload){
            let el = state.tasks.find(item => item.id === payload.id)
            el.status = state.currentTask.status = payload.status
            el.type = state.currentTask.type = payload.type
        }

    }
})