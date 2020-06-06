<template>
  <Layout>
    <article class="article">
      <h1 class="mt-0 text-5xl leading-none">{{ blogPost.title }}</h1>
      <div class="my-8">{{ blogPost.date }}</div>
      <div class="markdown" v-html="blogPost.content" />
    </article>
  </Layout>
</template>

<script>
export default {
  metaInfo() {
    return {
      title: this.$page.blogPost.title
    };
  },

  computed: {
    blogPost() {
      return this.$page.blogPost;
    }
  }
};
</script>

<style lang="scss">
.markdown {
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    @apply leading-tight mt-12 mb-2;
  }

  h2 {
    @apply text-3xl;
  }

  p {
    @apply mb-4;
  }

  pre {
    @apply my-4 p-2 bg-gray-900 text-gray-100 rounded cursor-text;
  }

  code {
    @apply text-sm;
  }

  :not(pre) code {
    @apply bg-indigo-100 p-1 -my-1 rounded;
  }
}
</style>

<page-query>
  query BlogPost ($path: String!) {
    blogPost (path: $path) {
      slug
      title
      date (format: "D MMMM, YYYY")
      content
    }
  }
</page-query>
