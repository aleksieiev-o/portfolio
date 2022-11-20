<template>
  <button
  class="toggle-theme-button toggle-theme-button--light"
  title="Toggle theme"/>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';

  export default defineComponent({
    name: 'ToggleThemeButton',

    setup() {
      return {};
    },
  });
</script>

<style lang="scss" scoped>
  @use "../../styles/variables" as *;
  @use "../../styles/mixins" as *;

  .toggle-theme-button {
    border: none;
    cursor: pointer;
    position: relative;
    height: 2rem;
    width: 3rem;
    border-radius: 1rem;
    transition: all 0.3s ease-in-out;
    box-shadow: $main-shadow--light;

    &:after {
      content: "";
      position: absolute;
      top: 3px;
      border-radius: 50%;
      transition: all 1s ease-in-out;
      @include size(27px);
    }
  }

  .toggle-theme-button--light {
    background-color: #ffffff;

    &:after {
      left: 19px;
      box-shadow: 22px -20px #f9d71c inset;
    }
  }

  .toggle-theme-button--dark {
    background-color: #999999;

    &:after {
      left: 2px;
      box-shadow: 9px -7px #ffffff inset;
    }
  }
</style>
