<template>
  <button :class="`btn-${type}`" :disabled="loading">
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
}
</script>
