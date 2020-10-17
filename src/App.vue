
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
        dataEmployees: [
          {
            id: 1,
            name: 'Richard Hendricks',
            email: 'richard@piedpiper.com',
          },
          {
            id: 2,
            name: 'Bertram Gilfoyle',
            email: 'gilfoyle@piedpiper.com',
          },
          {
            id: 3,
            name: 'Dinesh Chugtai',
            email: 'dinesh@piedpiper.com',
          },
        ],
      }
    },
    methods: {
      addEmployee(e) {
        const l = this.dataEmployees.length
        const lId = l > 0 ? this.dataEmployees[ l - 1 ].id : 0;
        const id = lId + 1;
        const ne = { ...e, id };

        this.dataEmployees = [ ...this.dataEmployees, ne ]
      },
      deleteEmployee(id) {
        // to filter with a test not equal to the deleted id
        this.dataEmployees = this.dataEmployees.filter( e => e.id !== id )
      },
      editEmployee(id, ue) {
        this.deleteEmployee = this.dataEmployees.map(
          e => e.id === id ? ue : e
        )
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