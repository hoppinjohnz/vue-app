
<template>
  <div id="app" class="small-container">
    <hello-world msg="Hi John!"/>

    <h1>Employees</h1>
    <employee-table />
  </div>
</template>

<script>
  import EmployeeTable from '@/components/EmployeeTable.vue'
  import HelloWorld from '@/components/HelloWorld.vue'

  export default {
    name: 'app',
    components: {
      HelloWorld,
      EmployeeTable,
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