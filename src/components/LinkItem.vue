<template>
  <a
    class="underline outline-none focus-color-tertiary text-color-secondary"
    :href="href"
  >
    <slot />
  </a>
</template>

<script>
export default {
  props: {
    href: {
      type: String,
      required: true
    }
  }
};
</script>
