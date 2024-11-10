import urbanGreenAxios from './UrbanGreenAxios';

class UserService {
  static logout() {
    localStorage.removeItem('authToken');
  }

  static isAuthenticated() {
    return !!localStorage.getItem('authToken');
  }

  static async login(username, password) {
    try {
      const tokenResponse = await urbanGreenAxios.post('/Login', {
        nomeUsuario: username,
        senha: password,
      });

      if (tokenResponse.data.token) {
        localStorage.setItem('authToken', tokenResponse.data.token);
      }

      const userInfoResponse = await this.userInfo();

      if (tokenResponse.data.token) {
        localStorage.setItem('userInfo', JSON.stringify(userInfoResponse));
      }

      return {
        token: tokenResponse.data,
        userInfo: userInfoResponse,
      };
    } catch (error) {
      console.error('Erro ao tentar fazer login:', error);
      throw new Error('Erro no login. Verifique suas credenciais.');
    }
  }

  static async userInfo() {
    try {
      const response = await urbanGreenAxios.get('/Login/me');
      return response.data;
    } catch (error) {
      console.error('Erro ao buscar info do usuario:', error);
      throw error;
    }
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
