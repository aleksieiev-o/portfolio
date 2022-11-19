<template>
  <section class="wrapper home-wrapper">
    <div class="container home-container">
      <div class="image">image</div>

      <div class="description">description</div>

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
  import { defineComponent } from 'vue';

  export default defineComponent({
    name: 'AppHome',
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
    @include between-children {
      margin-bottom: 2rem;
    }
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
