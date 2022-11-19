<template>
  <div class="nav-screen-buttons">
    <button class="next-screen">NEXT</button>

    <button class="prev-screen">PREV</button>
  </div>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';

  export default defineComponent({
    name: 'NavScreenButtons',

    setup() {
      return {};
    },
  });
</script>

<style lang="scss" scoped>
  @use "../styles/variables" as *;
  @use "../styles/mixins" as *;

 .nav-screen-buttons {
   position: absolute;
   right: 0;
   bottom: 0;
   flex-flow: column nowrap;
   @include flex-layout();
   @include between-children {
     margin-bottom: 1rem;
   }
 }
</style>
