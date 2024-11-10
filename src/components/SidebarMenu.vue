<template>
  <div class="sidebar">
    <div class="profile-card">
      <div class="profile-info">
        <h3 class="profile-name">{{ userStore.currentUser.nome }}</h3>
        <p class="profile-role">{{ userStore.currentUser.role }}</p>
      </div>
    </div>

    <div class="items">
      <ul>
        <li
          v-for="(item, index) in menuItems"
          :key="index"
          :class="['menu-item', { selected: isActiveRoute(item.route) }]"
          @click="navigateTo(item.route)"
        >
          <i :class="item.icon" class="menu-icon"></i>
          <span class="menu-text">{{ item.text }}</span>
          <i class="fa fa-chevron-right arrow-icon"></i>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { useUserStore } from '@/store/UserStore';
import { useRouter } from 'vue-router';

export default {
  name: 'SidebarMenu',
  setup() {
    const userStore = useUserStore();
    const router = useRouter();

    const isActiveRoute = (route) => {
      return router.path === route;
    };

    const navigateTo = (route) => {
      router.push(route);
    };

    return {
      selectedIndex: null,
      onHoldIndex: null,
      menuItems: [
        { text: 'Início', icon: 'fa-solid fa-house', route: '/' },
        { text: 'Funcionários', icon: 'fa-solid fa-user', route: '/employees' },
        { text: 'Pedidos', icon: 'fa-solid fa-file', route: '/orders' },
      ],
      isActiveRoute,
      navigateTo,
      userStore,
    };
  },
};
</script>

<style scoped>
.items {
  border-radius: var(--border-radius);
  background-color: white;
  height: 70vh;
  padding-top: 1vh;
}

.profile-card {
  background-color: white;
  padding: 20px;
  margin-bottom: 20px;
  text-align: center;
  border-radius: var(--border-radius);
}

.profile-info {
  color: var(--secondary-color);
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.profile-name {
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 5px;
}

.profile-role {
  font-size: 14px;
  color: #777;
}

.sidebar {
  width: 250px;
  padding: 10px;
}

ul {
  list-style-type: none;
  padding: 0;
  margin: 0;
}

li:first-child {
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
}

.menu-item {
  display: flex;
  align-items: center;
  padding: 10px 20px;
  color: var(--primary-color);
  background-color: white;
  cursor: pointer;
  transition: all 0.3s ease;
}

.menu-item:hover {
  background-color: #e3e3e3;
}

.menu-icon {
  margin-right: 15px;
}

.menu-text {
  flex-grow: 1;
}

.arrow-icon {
  margin-left: auto;
  transition: transform 0.3s ease;
}

.selected {
  background-color: var(--primary-color);
  color: white;
}

.selected:hover {
  background-color: var(--primary-color);
  color: white;
}

.on-hold {
  background-color: var(--primary-color);
  color: white;
}

.on-hold .arrow-icon {
  transform: rotate(90deg);
}
</style>
