<template>
  <div class="header">
    <div class="header-title">
      <h1>{{ title }}</h1>
    </div>

    <div class="header-actions">
      <div v-if="addFinder" class="search-container">
        <input type="text" placeholder="Buscar pedidos..." />
        <i class="search-icon fa-solid fa-magnifying-glass"></i>
      </div>

      <i class="more-icon fa-solid fa-plus"></i>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PageHeader',
  props: {
    title: {
      type: String,
      required: true,
    },
    addFinder: {
      type: Boolean,
      require: false,
      default: false,
    },
  },
};
</script>

<style scoped>
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
}

.header-title h1 {
  margin: 0;
  font-size: 24px;
  color: var(--secondary-color);
}

.header-actions {
  display: flex;
  align-items: center;
}

.search-container {
  display: flex;
  align-items: center;
  border: 1px solid var(--medium-grey-color);
  border-radius: var(--border-radius);
  padding-left: 5px;
  margin-right: 15px;
}

.search-container input {
  border: none;
  outline: none;
  font-size: 14px;
  width: 200px;
}

.search-icon {
  margin-left: 10px;
  font-size: 18px;
  color: white;
  background-color: var(--primary-color);
  padding: 10px;
  border-radius: var(--border-radius);
}

.more-icon {
  font-size: 24px;
  color: white;
  cursor: pointer;
  background-color: var(--primary-color);
  padding: 8px;
  border-radius: var(--border-radius);
}
</style>
