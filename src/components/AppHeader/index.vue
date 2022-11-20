<template>
  <header class="wrapper header-wrapper">
    <div class="container header-container">
      <div class="logo" title="Oleksandr Aleksieiev">OA</div>

      <ul class="nav-list">
        <template
        v-for="link in routes"
        :key="link.path">
          <router-link
          v-if="link.meta.isListRoute"
          :to="link.path"
          :title="link.name"
          class="nav-list-link">
            {{ link.name }}
          </router-link>
        </template>
      </ul>

      <div class="utils">
        <LocaleSwitcher/>

        <ToggleThemeButton/>

        <MenuBurgerButton/>
      </div>
    </div>
  </header>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';
  import LocaleSwitcher from '@/components/AppHeader/LocaleSwitcher.vue';
  import ToggleThemeButton from '@/components/AppHeader/ToggleThemeButton.vue';
  import MenuBurgerButton from '@/components/AppHeader/MenuBurgerButton.vue';
  import { useRouter } from 'vue-router';

  export default defineComponent({
    name: 'AppHeader',
    components: {
      LocaleSwitcher,
      ToggleThemeButton,
      MenuBurgerButton,
    },

    setup() {
      const router = useRouter();

      return {
        routes: router.getRoutes(),
      };
    },
  });
</script>

<style lang="scss" scoped>
  @use "../../styles/variables" as *;
  @use "../../styles/mixins" as *;

  .header-wrapper {
    height: 100px;
    box-shadow: $main-shadow--light;
  }

  .header-container {
    @include flex-layout(center, space-between);
  }

  .logo {
    cursor: default;
    @include size(80px);
    @include flex-layout();
  }

  .nav-list {
    @include flex-layout(center, space-between);
    @include between-children {
      margin-right: 3rem;
    }
  }

  .nav-list-link {
    position: relative;
    padding: 0.4rem 0.2rem;
    font-weight: 700;
    color: $main-gray-text-color;
    outline-color: $main-orange-color;

    &:before {
      content: "";
      position: absolute;
      left: 0;
      top: 50%;
      transform: translateY(-50%);
      height: 0.15rem;
      width: 0;
      background-color: $second-orange-color;
      transition: all 0.3s ease-in-out;
    }

    &:hover {
      &:before {
        width: 100%;
      }
    }
  }

  .utils {
    @include flex-layout(center, space-between);
    @include between-children {
      margin-right: 1rem;
    }
  }
</style>
