<template>
  <div></div>
</template>

<script>
export default {
  middleware: 'guest',
  head() {
    return {
      title: this.$t('pagination.password.forget.title'),
    }
  },
}
</script>
