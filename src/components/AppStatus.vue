<template>
  <span :class="['badge', className]">{{ title }}</span>
</template>

<script>
import {ref, watch} from 'vue'
export default {
  props: {
    type: {
      type: String,
      required: true,
      validator(value) {
        return ['active', 'cancelled', 'done', 'work'].includes(value)
      }
    }
  },
  setup(props) {
    const classesMap = {
      active: 'primary',
      cancelled: 'danger',
      done: 'primary',
      work: 'warning'
    }

    const titleMap = {
      active: 'Активен',
      cancelled: 'Отменен',
      done: 'Завершен',
      work: 'Выполняется'
    }

    watch(props, val => {
      className.value = classesMap[val.type]
      title.value = titleMap[val.type]
    })

    const className = ref(classesMap[props.type])
    const title = ref(titleMap[props.type])

    return {
      className,
      title
    }
  }
}
</script>