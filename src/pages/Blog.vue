<template>
  <Layout>
    <ul>
      <li
        v-for="{ node } in $page.allBlogPost.edges"
        :key="node.someid"
        class="mb-16"
      >
        <router-link
          class="focus:outline-none focus:underline hover:underline"
          :to="node.path"
        >
          <h2 class="text-2xl relative">
            <span class="absolute left-0 -ml-8 text-color-secondary">☞</span
            >{{ node.title }}
          </h2>
        </router-link>
        <div class="text-base mb-4">{{ node.date }}</div>
        <div v-html="node.excerpt" />
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
