<template>
  <form class="card"  @submit.prevent="submit" @keypress.enter="submit">
    <h1>Создать новую задачу</h1>
    <div class="form-control">
      <label for="title">Название</label>
      <input type="text" id="title" v-model="data.title">
    </div>

    <div class="form-control">
      <label for="date">Дата дэдлайна</label>
      <input type="date" id="date" v-model="data.date">
    </div>

    <div class="form-control">
      <label for="description">Описание</label>
      <textarea id="description" v-model="data.descr"></textarea>
    </div>
    <button class="btn primary" :disabled="!isActiveBtn">Создать</button>
  </form>
</template>


<script>
import {ref, computed} from 'vue'
import {useStore} from 'vuex'
import {useRouter} from 'vue-router'


export default {
  setup() {
    const store = useStore()
    const router = useRouter()
    const data = ref({
      id:'',
      title:'',
      date:'',
      descr:'',
      type:'',
      status:''
    })

    function isActiveBtn() {
      if (data.value.title && data.value.date && data.value.descr)
        return true
    }


    function submit (){
      this.data.id = Date.now()

      if(Date.now() > Date.parse(this.data.date)){
        this.data.type = 'cancelled'
        this.data.status = 'Отменен'
      } else {
        this.data.type = 'active'
        this.data.status = 'Активен'
        store.commit('watchActiveTasks', 'add')
      }
      store.commit('addTask', data.value)
      router.push('/tasks')
      // или можно таким образом
      // router > router.push('/tasks')
      // console.log(store.getters.getTasks.length)
    }

    return {
      isActiveBtn: computed (isActiveBtn),
      submit,
      data
    }
  }

}
</script>