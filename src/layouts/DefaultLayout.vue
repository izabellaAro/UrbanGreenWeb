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
        <!-- <slot /> -->
        <OrdersPage></OrdersPage>
      </div>
    </div>
  </div>
</template>

<script>
import AppHeader from '@/components/AppHeader.vue';
import SidebarMenu from '@/components/SidebarMenu.vue';
import OrdersPage from '@/views/OrdersPage.vue';

export default {
  name: 'DefaultLayout',
  components: {
    AppHeader,
    SidebarMenu,
    OrdersPage,
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
