import axios from 'axios';

import { API_BASE_URL } from '@/config';

export default {
  async fetchOrders() {
    try {
      const response = await axios.get(`${API_BASE_URL}/Pedido?skip=0&take=10`);
      console.log(response.data);
      return response.data;
    } catch (error) {
      console.error('Erro ao buscar pedidos:', error);
      throw error;
    }
  },
};
