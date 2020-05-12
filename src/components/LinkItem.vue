<template>
  <a class="text-blue-600 underline" :href="href">
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
}
</script>