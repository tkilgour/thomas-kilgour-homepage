<template>
  <footer class="absolute bottom-0 h-48 flex items-center">
    <ul class="flex">
      <NavItem path="mailto:thomas@kilgour.co">Email Me</NavItem>
      <NavItem path="https://github.com/tkilgour">Github</NavItem>
      <NavItem path="https://linkedin.com/in/tkilgour">LinkedIn</NavItem>
    </ul>
  </footer>
</template>

<script>
import NavItem from '~/components/NavItem';

export default {
  components: {
    NavItem
  }
};
</script>
