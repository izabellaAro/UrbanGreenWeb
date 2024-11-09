<template>
  <div id="login-layout">
    <!-- <slot /> -->
    <LoginPage></LoginPage>
  </div>
</template>

<script>
import LoginPage from '@/views/LoginPage.vue';

export default {
  name: 'LoginLayout',
  components: {
    LoginPage,
  },
};
</script>

<style scoped>
#login-layout {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
  background-color: var(--primary-color);
}
</style>
