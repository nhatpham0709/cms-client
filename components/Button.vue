<template>
  <button :class="`btn-${type}`" :disabled="loading" @click="click">
    <template v-if="!loading">
      {{ content }}
    </template>
    <template v-else>
      <i class="fa-solid fa-spinner animate-spin"></i>
    </template>
  </button>
</template>

<script>
export default {
  props: {
    content: {
      type: String,
      required: true,
    },
    loading: {
      type: Boolean,
      default: false,
      required: false,
    },
    type: {
      type: String,
      required: false,
      default: 'primary',
    },
  },
  methods: {
    click() {
      this.$emit('click')
    },
  },
}
</script>
