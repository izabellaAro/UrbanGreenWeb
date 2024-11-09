<template>
  <div id="app">
    <component :is="layoutComponent" />
    <app-router></app-router>
  </div>
</template>

<script>
import DefaultLayout from '@/layouts/DefaultLayout.vue';
import LoginLayout from '@/layouts/LoginLayout.vue';

export default {
  name: 'App',
  computed: {
    layoutComponent() {
      const layout = this.$route.meta.layout || 'DefaultLayout';
      return layout === 'LoginLayout' ? LoginLayout : DefaultLayout;
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  min-height: 100vh;
}
</style>
