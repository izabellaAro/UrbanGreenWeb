<template>
  <header class="header">
    <div class="logo">
      <img src="@/assets/logo.png" alt="Logo" />
    </div>

    <div class="logout">
      <button @click="logout">
        <i class="fa fa-sign-out-alt"></i>
      </button>
    </div>
  </header>
</template>

<script>
export default {
  name: 'AppHeader',
  methods: {
    logout() {
      console.log('Logout realizado!');
    },
  },
};
</script>

<style scoped>
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  background-color: white;
  color: var(--secondary-color);
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.logo img {
  height: 40px;
}

.logout button {
  background-color: transparent;
  border: none;
  color: var(--primary-color);
  font-size: 16px;
  cursor: pointer;
  display: flex;
  align-items: center;
}

.logout button i {
  margin-right: 8px;
}

.logout button:hover {
  color: #5f9899;
}
</style>
