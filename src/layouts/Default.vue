<template>
  <div class="bg-color-primary">
    <div
      class="max-w-4xl px-4 mx-auto leading-normal text-lg min-h-screen relative text-color-primary"
    >
      <header class="py-8 mb-4 h-48 relative">
        <h1 class="text-4xl mb-6">
          <g-link class="outline-none hover:underline focus:underline" to="/"
            >Thomas Kilgour</g-link
          >
          <span class="text-lg font-mono pl-2 text-color-secondary"
            >– Web Developer</span
          >
        </h1>
        <ThemeToggle />
        <NavBar />
      </header>
      <main class="pb-48">
        <slot />
      </main>
      <footer class="absolute bottom-0 h-48 w-full flex items-center">
        <ul class="flex">
          <NavItem path="mailto:thomas@kilgour.co">Email Me</NavItem>
          <NavItem path="https://github.com/tkilgour">Github</NavItem>
          <NavItem path="https://linkedin.com/in/tkilgour">LinkedIn</NavItem>
        </ul>
      </footer>
    </div>
  </div>
</template>

<script>
import NavBar from '~/components/NavBar';
import NavItem from '~/components/NavItem';
import ThemeToggle from '~/components/ThemeToggle';

export default {
  components: {
    NavBar,
    NavItem,
    ThemeToggle
  },

  computed: {
    titleTag() {
      return this.$route.name === 'home' ? 'h1' : 'h6';
    }
  }
};
</script>
