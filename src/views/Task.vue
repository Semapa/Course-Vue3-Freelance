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
  <h3 class="text-white center" v-if="!isRealId">
    Задачи с id = <strong>Tут АЙДИ</strong> нет.
  </h3>
</template>

<script>
import {computed, ref} from 'vue'
import AppStatus from '../components/AppStatus'
import {useStore} from "vuex";
import {useRoute} from "vue-router";

export default {
  components: {AppStatus},
  setup(){
    const store = useStore()
    const router = useRoute()

    const isRealId = ref(true)

    function getCurrentTask(){
      console.log('router.params.taskId', router.params.taskId)
      console.log('isRealId', isRealId.value)
      return store.getters.getCurrentTask
    }

    function cancelTask() {
      store.commit('setActiveTasks', 'remove')
      store.commit('changeStatus', {
        id: store.state.currentTaskId,
        type: 'cancelled',
        status: 'Отменен'
      })
      // router.push('/task')
    }

    function completeTask(){
      store.commit('setActiveTasks', 'remove')
      store.commit('changeStatus', {
        id: store.state.currentTaskId,
        type: 'done',
        status: 'Завершен'
      })
     }
    function workTask(){
      store.commit('setActiveTasks', 'add')
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
      isRealId
    }
  }

}
</script>

<style scoped>

</style>