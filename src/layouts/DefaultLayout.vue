<template>
  <div id="default-layout">
    <header class="header">
      <AppHeader />
    </header>

    <div class="main-layout">
      <div class="sidebar">
        <SidebarMenu />
      </div>

      <div class="content">
        <slot />
      </div>
    </div>
  </div>
</template>

<script>
import AppHeader from '@/components/shared/AppHeader.vue';
import SidebarMenu from '@/components/shared/SidebarMenu.vue';

export default {
  name: 'DefaultLayout',
  components: {
    AppHeader,
    SidebarMenu,
  },
};
</script>

<style scoped>
.main-layout {
  display: flex;
  height: 100vh;
  background-color: #f0f0f0;
}

.sidebar {
  width: 250px;
  height: 100%;
}

.content {
  flex-grow: 1;
  padding-left: 30px;
  padding-right: 30px;
  padding-top: 10px;
}
</style>
