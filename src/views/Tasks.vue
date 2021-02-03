<template>
  <h1 class="text-white center" v-if="!tasks">Задач пока нет</h1>
  <template  v-else-if="tasks" >
    <h3 class="text-white">Всего активных задач: {{getActiveTasks}}</h3>
    <div class="card" v-for="(task) in tasks" :key="task.id">
      <h2 class="card-title">
        {{task.title}}
        <AppStatus :type="task.type" />
      </h2>
      <p>
        <strong>
          <small>
            {{task.date}}
          </small>
        </strong>
      </p>
      <router-link :to="'/task/' + task.id">
        <button class="btn primary">Посмотреть</button>
      </router-link>
    </div>
  </template>
</template>

<script>
import {computed} from 'vue'
import AppStatus from '../components/AppStatus'
import {useStore} from 'vuex'

export default {
  components: {AppStatus},
  setup(){
    const store = useStore()

    function getActiveTasks(){
      return store.getters.getActiveTasks
    }

    return {
      getActiveTasks: computed(getActiveTasks),
      tasks: (store.getters.getTasks)
    }
  },
}
</script>
