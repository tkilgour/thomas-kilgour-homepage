<template>
  <footer class="py-8">
    <ul class="flex justify-end">
      <GetInTouch v-if="showCTA" />
      <NavItem class="z-10" path="mailto:thomas@kilgour.co">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <title>Email Me</title>
          <path
            d="M4 4h16a2 2 0 012 2v12a2 2 0 01-2 2H4a2 2 0 01-2-2V6c0-1.1.9-2 2-2z"
          />
          <path d="M22 6l-10 7L2 6" />
        </svg>
      </NavItem>
      <NavItem class="z-10" path="https://github.com/tkilgour">
        <svg height="24" viewBox="0 0 16 16" width="24" aria-hidden="true">
          <title>Github</title>
          <path
            fill="currentColor"
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M8 0a8 8 0 00-2.53 15.59c.4.07.55-.17.55-.38l-.01-1.49c-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82a7.42 7.42 0 014 0c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48l-.01 2.2c0 .21.15.46.55.38A8.01 8.01 0 008 0z"
          />
        </svg>
      </NavItem>
      <NavItem class="z-10" path="https://twitter.com/tkilgour">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="feather feather-twitter"
        >
          <title>Twitter</title>
          <path
            d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"
          />
        </svg>
      </NavItem>
      <NavItem class="z-10" path="https://linkedin.com/in/tkilgour">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <title>LinkedIn</title>
          <path
            d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
          />
          <circle cx="4" cy="4" r="2" />
        </svg>
      </NavItem>
    </ul>
  </footer>
</template>

<script>
import NavItem from '~/components/NavItem';
import GetInTouch from '~/components/GetInTouch';

export default {
  components: {
    NavItem,
    GetInTouch
  },

  data() {
    return {
      showCTA: false
    };
  },

  methods: {
    checkShowCTA() {
      if (process.isClient) {
        this.showCTA = this.$route.name === 'home' && window.innerWidth > 500;
      }
    }
  },

  mounted() {
    this.checkShowCTA();
  }
};
</script>
