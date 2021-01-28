import {createStore} from 'vuex'

export const store = createStore({

    state() {
        return {
            tasks: []
        }
    },
    getters: {
        appTasks(state) {
            return state.tasks
        }
    },
    mutations: {
        addTask(state){
            state.tasks.push('state')
        }

    }
})