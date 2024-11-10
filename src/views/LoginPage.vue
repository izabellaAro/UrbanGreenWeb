<template>
  <div class="login-page">
    <div class="login-card">
      <div class="login-card-left">
        <img src="@/assets/logo.png" alt="Login Image" class="login-image" />
      </div>

      <div class="login-card-right">
        <h2 class="login-title">Login</h2>
        <input
          type="text"
          placeholder="Usuário"
          class="login-input"
          v-model="username"
        />
        <input
          type="password"
          placeholder="Senha"
          class="login-input"
          @keydown.enter="handleLogin()"
          v-model="password"
        />
        <button class="login-button" @click="handleLogin()">Entrar</button>
      </div>
    </div>
  </div>
</template>

<script>
import UserService from '@/services/UserService';

export default {
  name: 'LoginPage',
  data() {
    return {
      username: '',
      password: '',
    };
  },
  methods: {
    handleLogin() {
      if (!this.username || !this.password) {
        alert('Por favor, preencha todos os campos.');
        return;
      }

      UserService.login(this.username, this.password)
        .then(() => {
          this.$router.push({ name: 'Orders' });
        })
        .catch((error) => {
          alert('Falha no login. Verifique suas credenciais.', error);
        });
    },
  },
};
</script>

<style scoped>
.login-page {
  display: flex;
  justify-content: center;
  align-items: center;
}

.login-card {
  display: flex;
  width: 60vw;
  height: 70vh;
  border-radius: var(--border-radius);
  overflow: hidden;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
}

.login-card-left {
  flex: 1;
  background-color: var(--ligth-grey-color);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 16px;
}

.login-image {
  max-width: 100%;
  height: auto;
  border-radius: var(--border-radius);
}

.login-card-right {
  flex: 1;
  padding: 24px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: var(--primary-color);
}

.login-title {
  font-size: 1.5rem;
  color: white;
  margin-bottom: 16px;
}

.login-input {
  padding: 10px;
  margin-bottom: 16px;
  border-radius: var(--border-radius);
  border: 1px solid var(--medium-grey-color);
  width: 80%;
  box-sizing: border-box;
  font-size: 1rem;
}

.login-button {
  padding: 10px;
  background-color: var(--button-color);
  color: white;
  font-size: 1rem;
  font-weight: bold;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  width: 80%;
}

.login-button:hover {
  background-color: var(--button-color-hover);
}
</style>
