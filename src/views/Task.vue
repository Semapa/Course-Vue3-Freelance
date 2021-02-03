<template>
  <h3 class="text-white center" v-if="!currentTask">
    Задачи с id = <strong>{{currentId}}</strong> нет.
  </h3>
  <div class="card" v-else>
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

    const currentId = router.params.taskId

    function getCurrentTask(){
      return store.getters.getCurrentTask(router.params.taskId)
    }

    function cancelTask() {
      store.commit('setActiveTasks', 'remove')
      store.commit('changeStatus', {
        id: router.params.taskId,
        type: 'cancelled',
        status: 'Отменен'
      })
      // router.push('/task')
    }

    function completeTask(){
      store.commit('setActiveTasks', 'remove')
      store.commit('changeStatus', {
        id: router.params.taskId,
        type: 'done',
        status: 'Завершен'
      })
     }
    function workTask(){
      store.commit('setActiveTasks', 'add')
      store.commit('changeStatus', {
        id: router.params.taskId,
        type: 'work',
        status: 'Взят в работу'
      })
    }

    return {
      currentTask: computed(getCurrentTask),
      cancelTask,
      completeTask,
      workTask,
      currentId
    }
  }

}
</script>

<style scoped>

</style>