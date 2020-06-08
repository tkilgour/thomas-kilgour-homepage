<template>
  <div class="bg-color-primary">
    <div
      class="flex flex-col max-w-4xl px-4 mx-auto leading-normal text-lg min-h-screen relative text-color-primary"
    >
      <Header />
      <main class="flex-grow">
        <slot />
      </main>
      <Footer />
    </div>
  </div>
</template>

<script>
import Header from '~/components/Header';
import Footer from '~/components/Footer';

export default {
  components: {
    Header,
    Footer
  },

  computed: {
    titleTag() {
      return this.$route.name === 'home' ? 'h1' : 'h6';
    }
  }
};
</script>
