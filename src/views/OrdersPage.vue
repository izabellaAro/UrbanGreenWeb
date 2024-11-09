<template>
  <div class="pedido-view">
    <div class="header">
      <div class="header-title">
        <h1>Pedidos</h1>
      </div>

      <div class="header-actions">
        <div class="search-container">
          <input type="text" placeholder="Buscar pedidos..." />
          <i class="search-icon fa-solid fa-magnifying-glass"></i>
        </div>

        <i class="more-icon fa-solid fa-plus"></i>
      </div>
    </div>

    <div class="orders">
      <OrderCard v-for="(order, index) in orders" :key="index" :order="order" />
    </div>
  </div>
</template>

<script>
import OrderCard from '@/components/OrderCard.vue';
import OrderService from '@/services/OrderService';

export default {
  name: 'OrdersPage',
  components: {
    OrderCard,
  },
  data() {
    return {
      orders: [],
    };
  },

  async created() {
    await this.loadOrders();
  },
  methods: {
    async loadOrders() {
      try {
        this.orders = await OrderService.fetchOrders();
      } catch (error) {
        console.error('Erro ao carregar pedidos: ', error);
      }
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

.pedido-view {
  padding: 20px;
  background-color: white;
  border-radius: var(--border-radius);
}

h1 {
  color: var(--secondary-color);
  margin-bottom: 20px;
  font-size: 24px;
}

.orders {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 16px;
}
</style>
