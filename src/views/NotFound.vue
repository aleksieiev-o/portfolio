<template>
  <div class="wrapper">
    <div class="container not-found-container">
      <p class="description">Page not found</p>

      <button @click="router.push({ name: 'AppHome' })" class="go-to-home-button">Go home</button>
    </div>
  </div>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';
  import { useRouter } from 'vue-router';

  export default defineComponent({
    name: 'NotFound',
    setup() {
      const router = useRouter();

      return {
        router,
      };
    },
  });
</script>

<style lang="scss" scoped>
 @use "../styles/mixins" as *;

 .not-found-container {
   flex-flow: column nowrap;
   @include flex-layout();
   @include between-children {
     margin-bottom: 1rem;
   }
 }
</style>
