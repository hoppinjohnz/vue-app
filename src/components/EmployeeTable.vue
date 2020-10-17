<template>
  <div id="employee-table">
    <p v-if="this.tableEmployees.length < 1" class="empty-table">No employees</p>
    <table v-else>
      <thead>
        <tr>
          <th>Employee name</th>
          <th>Employee email</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="e in tableEmployees" :key="e.id">
          <td>{{ e.name }}</td>
          <td>{{ e.email }}</td>
          <td>
            <button>Edit</button>
            <button @click="$emit('delete:employee', e.id)">Delete</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
  export default {
    name: 'employee-table',
    props: {
      tableEmployees: Array
    },
  }
</script>

<style scoped>
</style>