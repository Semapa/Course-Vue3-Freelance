<template>
  <div class="card">
    <h2>{{currentTask.title}}</h2>
    <p><strong>Статус</strong>: <AppStatus :type="currentTask.type" /></p>
    <p><strong>Дэдлайн</strong>: {{ currentTask.date }}</p>
    <p><strong>Описание</strong>: {{ currentTask.descr }}</p>
    <div>
      <button class="btn" @click="workTask">Взять в работу</button>
      <button class="btn primary" @click="completeTask">Завершить</button>
      <button class="btn danger" @click="cancelTask">Отменить</button>
    </div>
  </div>
  <h3 class="text-white center">
    Задачи с id = <strong>Tут АЙДИ</strong> нет.
  </h3>
</template>

<script>
import {computed} from 'vue'
import AppStatus from '../components/AppStatus'
import {useStore} from "vuex";
import {useRoute} from "vue-router";

export default {
  components: {AppStatus},
  setup(){
    const store = useStore()
    const router = useRoute()

    function getCurrentTask(){
      console.log('router.params.taskId', router.params.taskId)
      return store.getters.getCurrentTask
    }

    function cancelTask() {
      store.commit('watchActiveTasks', 'remove')
      store.commit('changeStatus', {
        id: store.state.currentTaskId,
        type: 'cancelled',
        status: 'Отменен'
      })
      // router.push('/task')
    }

    function completeTask(){
      store.commit('watchActiveTasks', 'remove')
      store.commit('changeStatus', {
        id: store.state.currentTaskId,
        type: 'done',
        status: 'Завершен'
      })
     }
    function workTask(){
      store.commit('watchActiveTasks', 'add')
      store.commit('changeStatus', {
        id: store.state.currentTaskId,
        type: 'work',
        status: 'Взят в работу'
      })
    }

    return {
      currentTask: computed(getCurrentTask),
      cancelTask,
      completeTask,
      workTask,
    }
  }

}
</script>

<style scoped>

</style>