<template>
  <nav class="flex items-center">
    <ul class="flex">
      <NavItem path="/blog">Blog</NavItem>
      <NavItem path="/projects">Projects</NavItem>
      <NavItem path="/resume">CV</NavItem>
    </ul>
  </nav>
</template>

<script>
import NavItem from './NavItem';

export default {
  components: {
    NavItem
  }
};
</script>
