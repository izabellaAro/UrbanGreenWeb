<template>
  <div class="modal-overlay" @click.self="close">
    <div class="modal-content">
      <h2>Cadastrar Funcionário</h2>
      <form @submit.prevent="submitForm" class="form-container">
        <div class="form-group">
          <label for="name">Nome:</label>
          <input v-model="formData.name" id="name" type="text" required />
        </div>

        <div class="form-group">
          <label for="email">Email:</label>
          <input v-model="formData.email" id="email" type="email" required />
        </div>

        <div class="form-group">
          <label for="role">Cargo:</label>
          <input v-model="formData.role" id="role" type="text" required />
        </div>

        <div class="form-group">
          <label for="role">Senha Temporária:</label>
          <input
            v-model="formData.password"
            id="password"
            type="password"
            required
          />
        </div>
        <button type="submit">Salvar</button>
        <button type="button" @click="close">Cancelar</button>
      </form>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue';

export default {
  emits: ['close', 'submit'],
  setup(_, { emit }) {
    const formData = ref({
      name: '',
      email: '',
      role: '',
      password: '',
    });

    const submitForm = () => {
      emit('submit', { ...formData.value });
    };

    const close = () => {
      emit('close');
    };

    return {
      formData,
      submitForm,
      close,
    };
  },
};
</script>

<style scoped>
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal-content {
  background: #fff;
  padding: 20px;
  border-radius: 8px;
  width: 400px;
  max-width: 90%;
  display: flex;
  flex-direction: column;
  gap: 15px;
}

h2 {
  margin-bottom: 20px;
  font-size: 1.5rem;
}

.form-container {
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.form-group {
  display: flex;
  flex-direction: column;
}

label {
  font-size: 1rem;
  margin-bottom: 5px;
}

input {
  padding: 10px;
  border-radius: var(--border-radius);
  border: 1px solid var(--medium-grey-color);
  font-size: 1rem;
}

button {
  padding: 10px;
  background-color: var(--secondary-color);
  color: var(--ligth-grey-color);
  border: none;
  border-radius: var(--border-radius);
  cursor: pointer;
}

button[type='submit'] {
  background-color: var(--button-color);
}

button[type='submit']:hover {
  background-color: var(--button-color-hover);
}
</style>
