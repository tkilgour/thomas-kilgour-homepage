<template>
  <div class="px-4 py-6 border rounded-lg shadow-md">
    <div class="pb-4 border-b">
      <slot name="card-header"/>
    </div>
    <div class="pt-4">
      <slot name="card-contents"/>
    </div>
  </div>
</template>