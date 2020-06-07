<template>
  <li class="mr-6 p-1">
    <g-link
      v-if="!active"
      :to="path"
      class="pb-1 focus:outline-none hover:border-b-2 focus:border-b-2 hover-color-secondary"
      :class="{ 'border-dashed border-b-2': active }"
    >
      <slot />
    </g-link>
    <div v-else>
      <span class="border-dashed pb-1 border-b-2 border-color-secondary">
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
      return this.$route.path === this.path;
    }
  }
};
</script>
