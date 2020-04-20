<template>
  <Layout>
    <article class="article">
      <h1 class="mar">{{ blogPost.title }}</h1>
      <span>{{ blogPost.date }}</span>
      <div class="content" v-html="blogPost.content" />
    </article>
  </Layout>
</template>

<script>
export default {
  metaInfo () {
    return {
      title: this.$page.blogPost.title
    }
  },

  computed: {
    blogPost() {
      return this.$page.blogPost
    }
  }
}
</script>

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
