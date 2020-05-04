<template>
  <li class="mr-6 p-1 hover:underline hover:text-blue-600" :class="{ 'border-dashed border-b-2 border-blue-600' : active }">
    <g-link :to="path">
      <slot />
    </g-link>
  </li>
</template>

<script>
export default {
  props: {
    path: {
      type: String,
      required: true
    }
  },

  computed: {
    active() {
      return this.$route.path === this.path
    }
  }
}
</script>