<template>
  <DefaultLayout>
    <div class="pedido-view">
      <PageHeader :title="'Pedidos'" :addFinder="true"></PageHeader>

      <div class="orders">
        <OrderCard
          v-for="(order, index) in orders"
          :key="index"
          :order="order"
        />
      </div>
    </div>
  </DefaultLayout>
</template>

<script>
import OrderCard from '@/components/OrderCard.vue';
import OrderService from '@/services/OrderService';
import PageHeader from '@/components/PageHeader.vue';
import DefaultLayout from '@/layouts/DefaultLayout.vue';

export default {
  name: 'OrdersPage',
  components: {
    OrderCard,
    PageHeader,
    DefaultLayout,
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
