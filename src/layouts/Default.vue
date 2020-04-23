<template>
  <div class="max-w-2xl px-4 mx-auto leading-normal text-lg">
    <header class="header py-8">
      <g-link class="heading-link" :to="{ name: 'home' }">
        Thomas Kilgour
      </g-link>
    </header>
    <slot/>
  </div>
</template>

<script>
import config from '~/.temp/config.js';

export default {
  computed: {
    titleTag () {
      return this.$route.name === 'home' ? 'h1' : 'h6'
    },
    config () {
      return config
    }
  }
}
</script>
