<template>
  <div class="employee-card">
    <h3 class="employee-card__name">{{ employee.nome }}</h3>
    <p class="employee-card__email">{{ employee.email }}</p>
    <p class="employee-card__role">{{ employee.role }}</p>
  </div>
</template>

<script>
export default {
  name: 'EmployeeCard',
  props: {
    employee: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style scoped>
.employee-card {
  max-width: 15vw;
  background-color: var(--ligth-grey-color);
  border-radius: var(--border-radius);
  padding: 16px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  margin-bottom: 16px;
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.employee-card__name {
  font-weight: bold;
  color: var(--secondary-color);
}

.employee-card__email {
  color: var(--secondary-color);
}

.employee-card__role {
  font-weight: bold;
  color: var(--button-color);
}
</style>
