<template>
  <DefaultLayout>
    <div class="employees-view">
      <PageHeader :title="'Funcionários'" @add="openModal"></PageHeader>

      <EmployeeFormModal
        v-if="isModalOpen"
        @close="closeModal()"
        @submit="handleAddEmployee"
      />

      <div class="employees">
        <EmployeeCard
          v-for="employee in employees"
          :key="employee.id"
          :employee="employee"
        />
      </div>
    </div>
  </DefaultLayout>
</template>

<script>
import PageHeader from '@/components/PageHeader.vue';
import EmployeeCard from '@/components/EmployeeCard.vue';
import UserService from '@/services/UserService';
import DefaultLayout from '@/layouts/DefaultLayout.vue';
import EmployeeFormModal from '@/components/EmployeeFormModal.vue';
import { ref, onMounted } from 'vue';

export default {
  name: 'EmployeesPage',
  components: {
    PageHeader,
    EmployeeCard,
    DefaultLayout,
    EmployeeFormModal,
  },

  setup() {
    const employees = ref(null);
    const isModalOpen = ref(false);

    const getUsers = async () => {
      employees.value = await UserService.fetchUsers();
    };

    const openModal = () => {
      isModalOpen.value = true;
    };

    const closeModal = () => {
      isModalOpen.value = false;
    };

    const handleAddEmployee = async (employeeData) => {
      const request = {
        nomeUsuario: employeeData.name,
        email: employeeData.email,
        role: employeeData.role,
        senha: employeeData.password,
      };

      await UserService.registerUser(request);
      closeModal();
      await getUsers();
    };

    onMounted(getUsers);

    return {
      employees,
      isModalOpen,
      openModal,
      closeModal,
      handleAddEmployee,
    };
  },
};
</script>

<style scoped>
.employees-view {
  padding: 20px;
  background-color: white;
  border-radius: var(--border-radius);
}

h1 {
  color: var(--secondary-color);
  margin-bottom: 20px;
  font-size: 24px;
}

.employees {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 16px;
}
</style>
