<template>
  <div class="lang-switcher" title="Change language">
    <ul class="lang-switcher-menu">
      <li class="menu-item menu-item-has-children">
        <span class="menu-item-placeholder">
          {{ currentLocale.title }}
        </span>

        <ul class="sub-menu">
          <li
          v-for="locale in locales"
          :key="locale.value"
          @click="setCurrentLocale(locale)"
          @keyup="setCurrentLocale(locale)"
          class="menu-item">
            <span class="menu-item-title" :title="locale.title">
              {{ locale.title }}
            </span>
          </li>
        </ul>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
  import { defineComponent, ref } from 'vue';
  // import IconExpandMore from '@/components/AppHeader/iconComponents/IconExpandMore.vue';

  enum LocaleCode {
    EN_US = 'EN-us',
    RU_RU = 'RU-ru',
  }

  interface Locale {
    value: LocaleCode;
    title: string;
  }

  export default defineComponent({
    name: 'LocaleSwitcher',
    components: {
      // IconExpandMore,
    },
    emits: ['setCurrentLocale'],

    setup(props, { emit }) {
      const locales: Array<Locale> = [
        { value: LocaleCode.EN_US, title: 'English' },
        { value: LocaleCode.RU_RU, title: 'Русский' },
      ];
      const currentLocale = ref<Locale>(locales[0]);

      const setCurrentLocale = (option: Locale): void => {
        emit('setCurrentLocale', option);
      };

      return {
        locales,
        currentLocale,
        setCurrentLocale,
      };
    },
  });
</script>

<style lang="scss" scoped>
  @use "../../styles/variables" as *;
  @use "../../styles/mixins" as *;

  .lang-switcher {
    border-radius: 1rem;
    background-color: #ffffff;
    height: 2rem;
    padding: 0 1rem;
    box-shadow: $main-shadow--light;
  }

  .lang-switcher-menu {
    @include breakpoint($tablet-large-size) {
      position: relative;
      z-index: 1;
    }
  }

  .sub-menu {
    position: absolute;
    top: calc(100% + 7px);
    width: fit-content;
    width: -moz-fit-content;
    width: fit-content;
    text-align: center;
    padding: 6px 0;
    border-radius: 0.63rem;
    filter: drop-shadow(0px 2px 6px rgba(0, 0, 0, 0.3));
    -webkit-transition: all 0.3s ease-in-out;
    transition: all 0.3s ease-in-out;
    visibility: hidden;
    opacity: 0;
    left: 50%;
    transform: translate(-50%, 20px);
    background-color: #ffffff;
    z-index: -1;

    &:before {
      content: "";
      display: block;
      position: absolute;
      z-index: -1;
      top: -25px;
      height: 3rem;
      width: 100%;
      left: 50%;
      transform: translate(-50%);
    }
  }

  .lang-switcher:hover {
    transition: opacity 1s cubic-bezier(0.858, 0.01, 0.068, 0.99);

    .sub-menu {
      visibility: visible;
      opacity: 1;
    }
  }

  .menu-item {
    border-radius: 0.63rem 0.63rem 0 0;

    &:after {
      content: "";
      transform: translateX(-50%);
      left: 50%;
      top: -5px;
      height: 6px;
      width: 12px;
      background-color: inherit;
      clip-path: polygon(50% 0%, 0% 100%, 100% 100%);

      @include breakpoint($tablet-large-size) {
        display: block;
        position: absolute;
        z-index: -1;
      }
    }
  }

  .menu-item-placeholder, .menu-item-title {
    cursor: pointer;
    display: block;
    padding: 0 1rem;
    height: 32px;
    line-height: 32px;
    white-space: nowrap;
    transition: all 0.3s ease-in-out;
  }

  .menu-item-placeholder {

  }

  .menu-item-title {
    &:hover {
      color: $second-orange-color;
    }
  }

</style>
