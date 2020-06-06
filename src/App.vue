<template>
  <router-view />
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
  },

  mounted() {
    let theme = window.localStorage.getItem('theme');
    if (!theme) {
      theme =
        window.matchMedia &&
        window.matchMedia('(prefers-color-scheme: dark)').matches
          ? 'dark'
          : 'light';
      window.localStorage.setItem('theme', theme);
    }

    document.getElementById('app').setAttribute('data-theme', theme);
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
}

.bg-color-secondary {
  background-color: var(--bg-color-secondary);
}

.text-color-primary {
  color: var(--text-color-primary);
}

.text-color-secondary {
  color: var(--text-color-secondary);
}

.hover-color-secondary:hover,
.hover-color-secondary:focus {
  color: var(--text-color-secondary);
  border-color: var(--text-color-secondary);
}

.focus-color-tertiary:focus {
  color: var(--focus-color-tertiary);
}

.border-color-secondary {
  border-color: var(--text-color-secondary);
}
</style>
