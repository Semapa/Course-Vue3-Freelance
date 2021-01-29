<template>
  <h1 class="text-white center" v-if="!getTasks">Задач пока нет</h1>
  <template  v-else-if="getTasks" >
    <h3 class="text-white">Всего активных задач: {{getActiveTasks}}</h3>
    <div class="card" v-for="(task, index) in tasks" :key="task.id">
      <h2 class="card-title">
        {{task.title}}
        <AppStatus :type="task.type" :title="task.status"/>
      </h2>
      <p>
        <strong>
          <small>
            {{task.date}}
          </small>
        </strong>
      </p>
      <button class="btn primary" @click="watchTask(index)">Посмотреть</button>
    </div>
  </template>
</template>

<script>
import {computed} from 'vue'
import AppStatus from '../components/AppStatus'
import {useStore} from 'vuex'
import {useRouter} from "vue-router";

export default {
  components: {AppStatus},
  setup(){
    const store = useStore()
    const router = useRouter()

    function isTasks(){
      return store.getters.getTasks.length > 0 ? true : false
    }

    function watchTask(index) {
      store.commit('addCurrentTask', store.getters.getTasks[index])
      router.push('/task')
    }

    function getActiveTasks(){
      return store.getters.getActiveTasks
    }

    return {
      getTasks: computed(isTasks),
      getActiveTasks: computed(getActiveTasks),
      tasks: store.getters.getTasks,
      watchTask

    }

  },


}
</script>
