<template>
  <section class="wrapper home-wrapper">
    <div class="container home-container">
      <div class="image">image</div>

      <div class="info">
        <div class="name">
          {{ fullName }}
        </div>
        <div class="description">Frontend developer</div>
      </div>

      <button>Get in touch</button>

      <div class="socials">
        <button class="socials-button">1</button>
        <button class="socials-button">2</button>
        <button class="socials-button">3</button>
        <button class="socials-button">4</button>
      </div>

      <button class="go-down-button">Go down</button>
    </div>
  </section>
</template>

<script lang="ts">
  import { defineComponent, onMounted } from 'vue';
  import { useAppStore } from '@/store';

  export default defineComponent({
    name: 'AppHome',

    setup() {
      const store = useAppStore();
      const fullName = `${process.env.VUE_APP_FIRST_NAME} ${process.env.VUE_APP_LAST_NAME}`;

      onMounted(() => {
        // store.dispatch('loadMainImage');
      });

      return {
        fullName,
      };
    },
  });
</script>

<style lang="scss" scoped>
  @use "../../styles/variables" as *;
  @use "../../styles/mixins" as *;

  .home-wrapper {
    overflow: hidden;
    flex-grow: 1;
    @include flex-layout();
  }

  .home-container {
    flex-flow: column nowrap;
    @include flex-layout();
  }

  .image {
    margin-bottom: 2rem;
  }

  .info {
    flex-flow: column nowrap;
    margin-bottom: 2rem;
    @include between-children {
      margin-bottom: 3rem;
    }
    @include flex-layout();
  }

  .socials {
    position: absolute;
    left: 0;
    bottom: 0;
    flex-flow: column nowrap;
    @include flex-layout();
    @include between-children {
      margin-bottom: 1rem;
    }
  }

  .go-down-button {
    position: absolute;
    right: 0;
    bottom: 0;
  }
</style>
