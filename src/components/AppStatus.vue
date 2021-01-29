<template>
  <span :class="['badge', type]">{{ title }}</span>
</template>

<script>
export default {
  props: ['title', 'type']
}
</script>