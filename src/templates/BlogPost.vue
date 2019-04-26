<template>
  <Layout>
    <article class="article">
      <h1 class="mar">{{ $page.blogPost.title }}</h1>
      <span>{{ $page.blogPost.date }}</span>
      <div class="content" v-html="$page.blogPost.content" />
    </article>
  </Layout>
</template>

<script>
export default {
  metaInfo () {
    return {
      title: this.$page.blogPost.title
    }
  }
}
</script>

<page-query>
  query BlogPost ($path: String!) {
    blogPost (path: $path) {
      title
      date (format: "D MMMM, YYYY")
      content
    }
  }
</page-query>
