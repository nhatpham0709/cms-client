<template>
  <div></div>
</template>

<script>
export default {
  middleware: 'guest',
  head() {
    return {
      title: this.$t('password.reset.title'),
    }
  },
}
</script>
