<template>
  <div>
    <router-view />
  </div>
</template>

<static-query>
query {
  metadata {
    siteName
    siteDescription
  }
}
</static-query>

<script>
export default {
  metaInfo() {
    return {
      title: this.$static.metadata.siteName,
      meta: [
        {
          key: 'description',
          name: 'description',
          content: this.$static.metadata.siteDescription
        }
      ]
    };
  }
};
</script>

<style>
#app {
  --bg-color-primary: #fff;
  --bg-color-secondary: #ebf4ff;
  --text-color-primary: #000;
  --text-color-secondary: #3182ce;
  --focus-color-tertiary: #c53030;
}

#app[data-theme='dark'] {
  --bg-color-primary: #2d3748;
  --bg-color-secondary: #c53030;
  --text-color-primary: #e2e8f0;
  --focus-color-tertiary: #63b3ed;
  --text-color-secondary: #feb2b2;
}

.bg-color-primary {
  background-color: var(--bg-color-primary);
  transition: background-color 500ms ease;
}

.bg-color-secondary {
  background-color: var(--bg-color-secondary);
  transition: background-color 500ms ease;
}

.text-color-primary {
  color: var(--text-color-primary);
  transition: color 500ms ease;
}

.text-color-secondary {
  color: var(--text-color-secondary);
  transition: color 500ms ease;
}

.hover-color-secondary:hover,
.hover-color-secondary:focus {
  color: var(--text-color-secondary);
  border-color: var(--text-color-secondary);
  transition: all 500ms ease;
}

.focus-color-tertiary:focus {
  color: var(--focus-color-tertiary);
  transition: color 500ms ease;
}

.border-color-secondary {
  border-color: var(--text-color-secondary);
  transition: background-color 500ms ease;
}
</style>
