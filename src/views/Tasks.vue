<template>
  <h1 class="text-white center" v-if="!getTasks">Задач пока нет</h1>
  <template  v-else-if="getTasks" >
    <h3 class="text-white">Всего активных задач: 0</h3>
    <div class="card" v-for="(task, index) in tasks" :key="index">
      <h2 class="card-title">
        Название задачи - {{task}}
        <AppStatus :type="'done'" />
      </h2>
      <p>
        <strong>
          <small>
            {{new Date().toLocaleDateString()}}
          </small>
        </strong>
      </p>
      <button class="btn primary">Посмотреть</button>
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

    function getListTasks(){
      return store.getters.appTasks.length > 0 ? true : false
    }
    return {
      getTasks: computed(getListTasks),
      tasks: store.getters.appTasks

    }

  },


}
</script>
