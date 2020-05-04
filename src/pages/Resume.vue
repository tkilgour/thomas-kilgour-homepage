<template>
  <Layout>
    <h2 class="text-2xl mb-4">Work Experience</h2>

    <CardItem class="mb-6">
      <template #card-header>
        <div class="flex justify-between items-center">
          <h3>Web Developer <span class="font-bold">@ KPDI Digital</span></h3>
          <p class="text-sm">Nov 2018 – present</p>
        </div>
      </template>
      <template #card-contents>
        <p class="italic">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Et illum nam voluptates sit eaque ducimus quia qui saepe omnis itaque quo fugit animi dolore, totam esse iusto aspernatur distinctio explicabo.</p>
      </template>
    </CardItem>

    <CardItem>
      <template #card-header>
        <div class="flex justify-between items-center">
          <h3>Web Developer <span class="font-bold">@ Interad Media Design Corp</span></h3>
          <p class="text-sm">Apr 2017 – Aug 2018</p>
        </div>
      </template>
      <template #card-contents>
        <p class="italic mb-2">Front-end web development for a major Canadian bank.</p>
        <ul class="list-disc pl-5">
          <li>built web sites from designs using client-provided content</li>
          <li>worked in close communication with project managers and clients</li>
          <li>built interactive banking calculator widgets</li>
        </ul>
      </template>
    </CardItem>
    
  </Layout>
</template>

<script>
import CardItem from '~/components/CardItem'

export default {
  components: {
    CardItem
  }
}
</script>