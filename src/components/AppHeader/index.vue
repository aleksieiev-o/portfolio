<template>
  <header class="wrapper header-wrapper">
    <div class="container header-container">
      <div class="logo">LOGO</div>

      <ul class="nav-list">
        <router-link to="/home" class="nav-list-link">Home</router-link>
        <router-link to="/about" class="nav-list-link">About</router-link>
        <router-link to="/skills" class="nav-list-link">Skills</router-link>
        <router-link to="/portfolio" class="nav-list-link">Portfolio</router-link>
        <router-link to="/contacts" class="nav-list-link">Contacts</router-link>
      </ul>

      <div class="utils">
        <button>Change lang</button>

        <button>Toggle theme</button>

        <button>Burger</button>
      </div>
    </div>
  </header>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';

  export default defineComponent({
    name: 'AppHeader',

    setup() {
      return {};
    },
  });
</script>

<style lang="scss" scoped>
  @use "../../styles/variables" as *;
  @use "../../styles/mixins" as *;

  .header-wrapper {
    height: 100px;
    overflow: hidden;
    box-shadow: 0 1px 10px 1px rgba(#333, 0.2);
  }

  .header-container {
    @include flex-layout(center, space-between);
  }

  .nav-list {
    @include flex-layout(center, space-between);
    @include between-children {
      margin-right: 1rem;
    }
  }

  .utils {
    @include flex-layout(center, space-between);
    @include between-children {
      margin-right: 1rem;
    }
  }
</style>
