<template>
  <Content title="Archives" />
</template>

<script>
import Content from '~/components/PageLayout.vue'
import Table from '@/mixins/table'
export default {
  components: {
    Content,
  },
  mixins: [Table],
}
</script>
