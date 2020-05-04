<template>
  <div class="max-w-2xl px-4 mx-auto leading-normal text-lg min-h-screen relative">
    <header class="py-8 mb-4 h-48">
      <g-link class="heading-link" to="/">
        <h1 class="text-4xl mb-6">
          Thomas Kilgour <span class="text-lg font-mono pl-2 text-blue-600">– Web Developer</span>
        </h1>
      </g-link>
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
