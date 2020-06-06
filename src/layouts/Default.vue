<template>
  <div class="dark-mode:bg-blue-900 dark-mode:text-white">
    <div class="max-w-4xl px-4 mx-auto leading-normal text-lg min-h-screen relative">
      <header class="py-8 mb-4 h-48">
        <h1 class="text-4xl mb-6">
          <g-link to="/">Thomas Kilgour</g-link> <span class="text-lg font-mono pl-2 text-blue-600 dark-mode:text-red-300">– Web Developer</span>
        </h1>
        <NavBar />
      </header>
      <main class="pb-48">
        <slot/>
      </main>
      <footer class="absolute bottom-0 h-48 w-full flex items-center">
        <ul class="flex">
          <li class="mr-8">
            <a href="mailto:thomas@kilgour.co">Email Me</a>
          </li>
          <li class="mr-8">
            <a href="https://github.com/tkilgour">Github</a>
          </li>
          <li class="mr-8">
            <a href="https://linkedin.com/in/tkilgour">LinkedIn</a>
          </li>
        </ul>
      </footer>
    </div>
  </div>
</template>

<script>
import NavBar from '~/components/NavBar'

export default {
  components: {
    NavBar
  },
  
  computed: {
    titleTag () {
      return this.$route.name === 'home' ? 'h1' : 'h6'
    }
  }
}
</script>
