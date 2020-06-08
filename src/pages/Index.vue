<template>
  <Layout>
    <p class="mb-4">Hello!</p>
    <p class="mb-4">
      I'm Thomas, a frontend web developer. I build the interactive web
      applications and often use
      <LinkItem href="https://vuejs.org">Vue.js</LinkItem> to accomplish the
      job. I like to focus on accessibility and usability, which often means
      <em>less</em> is <em>more</em> – so I'll just stop there.
    </p>
  </Layout>
</template>

<script>
import LinkItem from '~/components/LinkItem';

export default {
  components: {
    LinkItem
  }
};
</script>
