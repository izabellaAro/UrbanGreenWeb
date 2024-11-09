import axios from 'axios';

import { API_BASE_URL } from '@/config';

class AuthService {
  static async login(username, password) {
    try {
      const response = await axios.post(`${API_BASE_URL}/Login`, {
        nomeUsuario: username,
        senha: password,
      });

      if (response.data.token) {
        localStorage.setItem('authToken', response.data.token);
      }

      return response.data;
    } catch (error) {
      console.error('Erro ao tentar fazer login:', error);
      throw new Error('Erro no login. Verifique suas credenciais.');
    }
  }

  static logout() {
    localStorage.removeItem('authToken');
  }

  static isAuthenticated() {
    return !!localStorage.getItem('authToken');
  }
}

export default AuthService;
