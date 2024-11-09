import urbanGreenAxios from './UrbanGreenAxios';

export default {
  async fetchOrders() {
    try {
      const response = await urbanGreenAxios.get('/Pedido?skip=0&take=10');
      console.log(response.data);
      return response.data;
    } catch (error) {
      console.error('Erro ao buscar pedidos:', error);
      throw error;
    }
  },
};
