<template>
  <Content title="Archives" />
</template>

<script>
import Content from '@/components/Content.vue'
import DataTable from "@/mixins/table";

export default {
  components: {
    Content,
  },
  mixins: [DataTable],
  data() {
    return {
      model: 'users'
    }
  }
}
</script>
