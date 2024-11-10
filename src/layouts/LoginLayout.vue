<template>
  <div id="login-layout">
    <slot />
  </div>
</template>

<script>
export default {
  name: 'LoginLayout',
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
