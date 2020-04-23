<template>
  <Layout class="blog">
    <ul>
      <li v-for="{ node } in $page.allBlogPost.edges" :key="node.someid" class="mb-16">
        <router-link :to="node.path">
          <h2 class="text-2xl relative"><span class="text-blue-500 absolute left-0 -ml-8">☞</span>{{ node.title }}</h2>
        </router-link>
        <div class="text-base mb-4">{{ node.date }}</div>
        <div v-html="node.excerpt"/>
      </li>
    </ul>
  </Layout>
</template>

<page-query>
  query Blog ($page: Int) {
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
