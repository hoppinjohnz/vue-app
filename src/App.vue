
<template>
  <div id="app" class="small-container">
    <hello-world msg="Hi John!"/>

    <h1>Employees</h1>
<!-- 
Retrieving events from the child
Now employee-form is broadcasting its emitted event, but we need to capture the event and value in the parent to work with it.
The first thing we need to do is make employee-form acknowledge and handle the emitted event, and invoke a new method. It will look like this:
  <component @name-of-emitted-event="methodToCallOnceEmitted"></component> 
-->
    <employee-form @add:employee="addEmployee"/>

<!-- After defining data() here, we want to pass it to EmployeeTable. We can do that by passing the data down as a property. An attribute that begins with a colon : will allow you to pass data. The more verbose version would be v-bind. In this case we'll pass our dataEmployees array. -->
    <employee-table 
      :tableEmployees="this.dataEmployees" 
      @delete:employee="deleteEmployee"
      @edit:employee="editEmployee"
    />
  </div>
</template>

<script>
  import HelloWorld from '@/components/HelloWorld.vue'
  import EmployeeTable from '@/components/EmployeeTable.vue'
  import EmployeeForm from '@/components/EmployeeForm.vue'

  export default {
    name: 'app',
    components: {
      HelloWorld,
      EmployeeTable,
      EmployeeForm,
    },
    data() {
      return {
        dataEmployees: [],
      }
    },
    mounted() {
      this.getEmployees()
    },
    methods: {
      async getEmployees() {
        try {
          const response = await fetch('https://jsonplaceholder.typicode.com/users')
          const data = await response.json()
          this.dataEmployees = data
        } catch (error) {
          console.error(error)
        }
      },
      async addEmployee(employee) {
        try {
          const response = await fetch('https://jsonplaceholder.typicode.com/users', {
            method: 'POST',
            body: JSON.stringify(employee),
            headers: { 'Content-type': 'application/json; charset=UTF-8' },
          })
          const data = await response.json()
          this.dataEmployees = [...this.dataEmployees, data]
        } catch (error) {
          console.error(error)
        }
      },
      async deleteEmployee(id) {
        try {
          await fetch(`https://jsonplaceholder.typicode.com/users/${id}`, {
            method: "DELETE"
          });
          this.dataEmployees = this.dataEmployees.filter(e => e.id !== id);
        } catch (error) {
          console.error(error);
        }
      },
      async editEmployee(e) {
        const id = e.id
        try {
          const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`, {
            method: 'PUT',
            body: JSON.stringify(e),
            headers: { 'Content-type': 'application/json; charset=UTF-8' },
          })
          const resE = await response.json()

          this.dataEmployees = this.dataEmployees.map( i => (i.id === id ? resE : i) )
        } catch (error) {
          console.error(error)
        }
      },
    },
  }
</script>

<style>
  button {
    background: #009435;
    border: 1px solid #009435;
  }

  .small-container {
    max-width: 680px;
  }
</style>