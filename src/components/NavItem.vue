<template>
  <li class="mr-6 p-1">
    <g-link
      v-if="!active && !download"
      :to="path"
      class="pb-1 focus:outline-none hover:border-b-2 focus:border-b-2 hover-color-secondary"
      :class="{ 'border-dashed border-b-2': active }"
    >
      <slot />
    </g-link>
    <div v-else-if="active">
      <span class="border-dashed pb-1 border-b-2 border-color-secondary">
        <slot />
      </span>
    </div>
    <a
      v-if="download"
      :href="path"
      download
      class="pb-1 focus:outline-none hover:border-b-2 focus:border-b-2 hover-color-secondary"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="1"
        stroke-linecap="round"
        stroke-linejoin="round"
        class="mr-1 mb-1 inline"
      >
        <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" />
        <path d="M14 2v6h6M16 13H8M16 17H8M10 9H8" />
      </svg>
      <span>
        <slot />
      </span>
    </a>
  </li>
</template>

<script>
export default {
  props: {
    path: {
      type: String,
      required: true
    },

    download: {
      type: Boolean,
      default: false
    }
  },

  computed: {
    active() {
      return this.$route.path === this.path;
    }
  }
};
</script>
