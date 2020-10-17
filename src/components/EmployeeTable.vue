<template>
  <div id="employee-table">
    <table>
      <thead>
        <tr>
          <th>Employee name</th>
          <th>Employee email</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="e in tableEmployees" :key="e.id">
          <td>{{ e.name }}</td>
          <td>{{ e.email }}</td>
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

<style scoped></style>