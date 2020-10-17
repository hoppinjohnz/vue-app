<template>
  <div id="employee-form">

<!-- After v-model binding, we can see in Vue DevTools that the state of the component changes. We just need to submit these values and update the parent (App) state with the new employee object.

Event listeners
We want to do an onsubmit event on the form. We can do that with v-on:submit, or @submit for short. This convention will be the same for @click/v-on:click or any other similar event. The submit event also has a handy prevent we can add to it, which is the same as putting event.preventDefault() inside the submit function, since we won't be using the default GET/POST methods provided by forms.

Let's add this to the form, and reference a handleSubmit method we'll make. -->
    <form @submit.prevent="handleSubmit">

<!-- to get the data that we're writing in the input into Vue's component state, we'll use v-model which is some built-in Vue syntactic sugar for updating an input value with an onchange event. -->
      <label>Employee name</label>
      <input v-model="employeeForm.name" type="text" />
      <label>Employee Email</label>
      <input v-model="employeeForm.email" type="text" />
      <button>Add Employee</button>
    </form>
  </div>
</template>

<script>
  export default {
    name: 'employee-form',
    data() {
      return {
        employeeForm: {
          name: '',
          email: '',
        },
      }
    },
    methods: {
/*
Emitting events to the parent
We can pass the data up to App using $emit. Emit broadcasts a name of an event and data to its parent component, like so.
  this.$emit('name-of-emitted-event', dataToPass)
In our case, we'll create an event called add:employee, and pass this.employee.  The add:employee syntax (as opposed to add-employee or something else) is recommended in the Vue documentation.
*/
      handleSubmit() {
        this.$emit('add:employee', this.employeeForm)
      },
    },
  }
</script>

<style scoped>
  form {
    margin-bottom: 2rem;
  }
</style>