<template>
  <DefaultLayout>
    <div class="home-content">
      <h1>Bem-vindo ao Dashboard</h1>
    </div>
  </DefaultLayout>
</template>

<script>
import DefaultLayout from '@/layouts/DefaultLayout.vue';

export default {
  name: 'AppHome',
  components: {
    DefaultLayout,
  },
};
</script>

<style scoped>
.home-content {
  padding: 20px;
}
</style>
