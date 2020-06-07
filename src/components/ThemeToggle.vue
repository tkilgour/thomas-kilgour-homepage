<template>
  <button
    class="absolute top-0 right-0 mt-8 focus:outline-none"
    @click="toggleTheme"
  >
    <svg
      v-if="darkMode"
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      <circle cx="12" cy="12" r="5" />
      <path
        d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"
      />
    </svg>
    <svg
      v-else
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" />
    </svg>
  </button>
</template>

<script>
export default {
  data() {
    return {
      darkMode: null
    };
  },

  methods: {
    checkTheme() {
      if (process.isClient) {
        this.darkMode =
          document.getElementById('app').getAttribute('data-theme') === 'dark';
      }
    },

    toggleTheme() {
      if (process.isClient) {
        const theme =
          localStorage.getItem('theme') === 'dark' ? 'light' : 'dark';
        localStorage.setItem('theme', theme);
        document.getElementById('app').setAttribute('data-theme', theme);
        this.checkTheme();
      }
    }
  },

  created() {
    this.checkTheme();
  }
};
</script>
