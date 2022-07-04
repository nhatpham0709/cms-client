<template>
  <Content title="Archives" />
</template>

<script>
import Content from '@/components/Content.vue'
import Table from '@/mixins/table'
export default {
  components: {
    Content,
  },
  mixins: [Table],
}
</script>
