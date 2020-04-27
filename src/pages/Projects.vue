<template>
  <Layout>
    <div v-for="project in projects" :key="project.id" class="mb-8">
      <h2 class="text-3xl">
        <a :href="project.url">{{ project.name }}</a>
      </h2>
      <ul v-if="project.tags" class="flex mb-4">
        <li v-for="tag in project.tags" :key="tag" class="mr-2 text-sm bg-indigo-100 px-1 rounded-lg">{{ tag }}</li>
      </ul>
      <p v-if="project.description">{{ project.description }}</p>
    </div>
  </Layout>
</template>

<script>
export default {
  computed: {
    projects() {
      return this.$page.github.viewer.pinnedItems.edges.map(project => {
        return {
          id: project.node.id,
          name: project.node.name,
          url: project.node.url,
          description: project.node.description,
          tags: project.node.repositoryTopics.edges.map(tag => {
            return tag.node.topic.name
          })
        }
      })
    }
  }
}
</script>

<page-query>
  query {
    github {
      viewer {
        pinnedItems(first: 10) {
          edges {
            node {
              ... on Github_Repository {
                id
                name
                url
                description
                repositoryTopics(first: 10) {
                  edges {
                    node {
                      topic {
                        name
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
</page-query>