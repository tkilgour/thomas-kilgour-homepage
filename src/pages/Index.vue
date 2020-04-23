<template>
  <Layout class="home">
    <ul class="list-reset">
      <li v-for="{ node } in $page.allBlogPost.edges" :key="node.someid">
        <router-link :to="node.path">
          <h2 v-html="node.title"/>
        </router-link>
        <span v-html="node.date"/>
        <div v-html="node.excerpt"/>
      </li>
    </ul>
  </Layout>
</template>

<page-query>
  query Home ($page: Int) {
    allBlogPost (page: $page) {
      edges {
        node {
          id
          slug
          title
          excerpt
          date (format: "MMMM D, YYYY")
          path
        }
      }
    }
  }
</page-query>
