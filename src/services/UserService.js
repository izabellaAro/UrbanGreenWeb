import urbanGreenAxios from './UrbanGreenAxios';

class UserService {
  static async login(username, password) {
    try {
      const response = await urbanGreenAxios.post('/Login', {
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

  static async fetchUsers() {
    try {
      const response = await urbanGreenAxios.get('/Login/usuarios');
      return response.data;
    } catch (error) {
      console.error('Erro ao buscar usuarios:', error);
      throw error;
    }
  }
}

export default UserService;
