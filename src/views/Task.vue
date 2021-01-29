<template>
  <div class="card">
    <h2>{{currentTask.title}}</h2>
    <p><strong>Статус</strong>: <AppStatus :type="currentTask.type" :title="currentTask.status" /></p>
    <p><strong>Дэдлайн</strong>: {{ currentTask.date }}</p>
    <p><strong>Описание</strong>: {{ currentTask.descr }}</p>
    <div>
      <button class="btn">Взять в работу</button>
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
// import {useRouter} from "vue-router";

export default {
  components: {AppStatus},
  setup(){
    const store = useStore()
    // const router = useRouter()

    function getCurrentTask(){
      return store.getters.getCurrentTask
    }

    function cancelTask() {
      store.commit('watchActiveTasks', 'remove')
      store.commit('changeStatus', {
        id: store.state.currentTask.id,
        type: 'danger',
        status: 'Отменен'
      })
      // router.push('/tasks')
    }

    function completeTask(){
      store.commit('watchActiveTasks', 'remove')
      store.commit('changeStatus', {
        id: store.state.currentTask.id,
        type: 'primary',
        status: 'Завершен'
      })
    }

    return {
      currentTask: computed(getCurrentTask),
      cancelTask: computed(cancelTask),
      completeTask: computed(completeTask)

    }
  }

}
</script>

<style scoped>

</style>