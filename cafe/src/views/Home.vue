

<script setup>
  import { useRouter } from 'vue-router'

  const router = useRouter();
function goToMenu() {
      router.push('/menu')
    }

</script>
<template>
  <div class="container mx-auto mt-8">
    <h1 class="text-3xl font-bold mb-4"> Welcome to Fictional Cafe!</h1>
    <button @click="goToMenu">View Menu</button>
  </div>
</template>
<style scoped>
/* Add scoped styles for Home.vue here */
.blog-item {
  flex-basis: calc(33.33% - 1rem); /* Set width for each blog item */
}
</style>
  
