<template>
  <div class="order-card">
    <div class="header">
      <span class="numero-pedido">Pedido #{{ order.id }} - </span>
      <span class="nome-cliente">{{ order.nomeComprador }}</span>
    </div>

    <div class="itens">
      <div v-for="(item, index) in order.itemPedidos" :key="index" class="item">
        <span class="quantidade">{{ item.quantidade }}</span>
        <span class="nome-item">{{ item.nomeProduto }}</span>
        <span class="valor-item">R$ {{ item.valor.toFixed(2) }}</span>
      </div>
    </div>

    <!-- Divider -->
    <hr class="divider" />

    <!-- Valor Total -->
    <div class="total">
      <span class="total-label">Total:</span>
      <span class="total-valor">R$ {{ order.valorTotal.toFixed(2) }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'OrderCard',
  props: {
    order: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style scoped>
.order-card {
  background-color: var(--ligth-grey-color);
  border-radius: var(--border-radius);
  padding: 20px;
  max-width: 400px;
}

.header {
  display: flex;
  margin-bottom: 15px;
}

.numero-pedido {
  font-size: 18px;
  font-weight: bold;
  color: var(--primary-color);
}

.nome-cliente {
  font-size: 16px;
  color: #888;
  font-weight: bold;
  margin-left: 10px;
}

.itens {
  margin-bottom: 15px;
}

.item {
  display: flex;
  justify-content: space-between;
  margin-bottom: 8px;
  font-size: 14px;
}

.quantidade {
  font-weight: bold;
}

.nome-item {
  color: var(--secondary-color);
}

.valor-item {
  color: var(--primary-color);
}

.divider {
  border: 1px solid var(--medium-grey-color);
  margin: 15px 0;
}

.total {
  display: flex;
  justify-content: space-between;
  font-size: 16px;
  font-weight: bold;
}

.total-label {
  color: var(--secondary-color);
}

.total-valor {
  color: var(--primary-color);
}
</style>
