<template>
  <section class="wrapper app">
    <AppHeader v-if="route.name !== 'NotFound'"/>

    <router-view/>
  </section>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';
  import AppHeader from '@/components/AppHeader/index.vue';
  import { useRoute } from 'vue-router';

  export default defineComponent({
    name: 'App',
    components: {
      AppHeader,
    },
    setup() {
      const route = useRoute();

      return {
        route,
      };
    },
  });
</script>

<style lang="scss" scoped>
  .app {
    background-color: #e6e6e6;
    height: 100%;
    overflow: hidden;
    flex-flow: column nowrap;
  }
</style>
