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
          <td v-if="editing === e.id"> <input type="text" v-model="e.name" /> </td>
          <td v-else>{{ e.name }}</td>

          <td v-if="editing === e.id"> <input type="text" v-model="e.email" /> </td>
          <td v-else>{{ e.email }}</td>

          <td v-if="editing === e.id">
            <button @click="editEmployee(e)">Save</button>
            <button @click="cancelEmployee(e)" class="muted-button">Cancel</button>
          </td>
          <td v-else>
            <button @click="enterEditing(e)">Edit</button>
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
    data() {
      return {
        editing: null,
        cachedEmployee: null,
      }
    },
    methods: {
      enterEditing(e) {
        this.cachedEmployee = Object.assign({}, e)
        this.editing = e.id
      },
      editEmployee(e) {
        // validation
        if (e.name === '' || e.email === '') return
        this.$emit('edit:employee', e)
        this.editing = null
      },
      cancelEmployee(e) {
        Object.assign(e, this.cachedEmployee)
        this.editing = null
      }
    }
  }
</script>

<style scoped>
</style>