<template>
  <header class="py-4 sm:py-8 mb-4 relative">
    <h1 class=" mb-6">
      <div class="text-4xl block sm:inline">
        <g-link
          v-if="$route.path !== '/'"
          class="focus:outline-none hover:underline focus:underline"
          to="/"
          >Thomas Kilgour</g-link
        >
        <span v-else>Thomas Kilgour</span>
      </div>
      <span class="text-lg font-mono pl-2 text-color-secondary"
        ><span class="hidden sm:inline">–</span> Web Developer</span
      >
    </h1>
    <NavBar />
    <ThemeToggle />
  </header>
</template>

<script>
import NavBar from '~/components/NavBar';
import ThemeToggle from '~/components/ThemeToggle';

export default {
  components: {
    NavBar,
    ThemeToggle
  }
};
</script>
