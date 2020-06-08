<template>
  <Layout>
    <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
      <CardItem v-for="project in projects" :key="project.id">
        <template #card-header>
          <h2 class="text-xl mb-2">
            <a :href="project.websiteUrl || project.githubUrl">
              {{ project.name }}
            </a>
          </h2>
          <div class="flex items-center">
            <a
              v-if="project.websiteUrl"
              :href="project.websiteUrl"
              class="mr-2"
              aria-label="Website"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="feather feather-link"
              >
                <title>Website for {{ project.name }}</title>
                <path
                  d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"
                ></path>
                <path
                  d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"
                ></path>
              </svg>
            </a>
            <a :href="project.githubUrl" aria-label="Github">
              <svg
                class="octicon octicon-mark-github v-align-middle"
                height="20"
                viewBox="0 0 16 16"
                fill="currentColor"
                version="1.1"
                width="20"
                aria-hidden="true"
              >
                <title>Github repository for {{ project.name }}</title>
                <path
                  fill-rule="evenodd"
                  d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"
                ></path>
              </svg>
            </a>
          </div>
        </template>
        <ul v-if="project.tags.length" class="flex mb-4">
          <li
            v-for="tag in project.tags"
            :key="tag"
            class="mr-2 text-sm bg-indigo-100 px-1 rounded-lg bg-color-secondary"
          >
            {{ tag }}
          </li>
        </ul>
        <p v-if="project.description">{{ project.description }}</p>
      </CardItem>
    </div>
  </Layout>
</template>

<script>
import CardItem from '~/components/CardItem';

export default {
  components: {
    CardItem
  },

  computed: {
    projects() {
      return this.$page.github.viewer.pinnedItems.edges.map(project => {
        return {
          id: project.node.id,
          name: project.node.name,
          githubUrl: project.node.githubUrl,
          websiteUrl: project.node.websiteUrl,
          description: project.node.description,
          tags: project.node.repositoryTopics.edges.map(tag => {
            return tag.node.topic.name;
          })
        };
      });
    }
  }
};
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
                githubUrl: url
                websiteUrl: homepageUrl
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
