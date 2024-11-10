<template>
  <div class="employees-view">
    <PageHeader :title="'Funcionários'"></PageHeader>

    <div class="employees">
      <EmployeeCard
        v-for="employee in employees"
        :key="employee.id"
        :employee="employee"
      />
    </div>
  </div>
</template>

<script>
import PageHeader from '@/components/PageHeader.vue';
import EmployeeCard from '@/components/EmployeeCard.vue';
import UserService from '@/services/UserService';

export default {
  name: 'EmployeesPage',
  components: {
    PageHeader,
    EmployeeCard,
  },
  data() {
    return {
      employees: [],
    };
  },

  async created() {
    await this.loadEmployees();
  },
  methods: {
    async loadEmployees() {
      try {
        this.employees = await UserService.fetchUsers();
      } catch (error) {
        console.error('Erro ao carregar usuarios: ', error);
      }
    },
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
