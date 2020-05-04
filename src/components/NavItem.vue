<template>
  <li class="mr-6 p-1 border-blue-600 ">
    <g-link
      v-if="!active"
      :to="path"
      class="outline-none border-blue-600 hover:text-blue-600 hover:border-b-2 focus:text-blue-600 focus:border-b-2"
      :class="{ 'border-dashed border-b-2' : active }"
    >
      <slot />
    </g-link>
    <div v-else>
      <span class="border-blue-600 border-dashed border-b-2">
        <slot />
      </span>
    </div>
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