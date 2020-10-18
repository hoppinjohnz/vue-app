<template>
  <div id="employee-form">
    <!-- 
      After v-model binding, we can see in Vue DevTools that the state of the component changes. We just need to submit these values and update the parent (App) state with the new employee object.

      Event listeners
      We want to do an onsubmit event on the form. We can do that with v-on:submit, or @submit for short. This convention will be the same for @click/v-on:click or any other similar event. The submit event also has a handy prevent we can add to it, which is the same as putting event.preventDefault() inside the submit function, since we won't be using the default GET/POST methods provided by forms.

      Let's add this to the form, and reference a handleSubmit method we'll make. 
    -->
    <form @submit.prevent="handleSubmit">
      <!-- 
        to get the data that we're writing in the input into Vue's component state, we'll use v-model which is some built-in Vue syntactic sugar for updating an input value with an onchange event. 
      -->
      <label>Employee name</label>
      <input
        ref="first"
        type="text"
        :class="{ 'has-error': submitting && invalidName }"
        v-model="formEmployee.name"
        @focus="clearStatus"
        @keypress="clearStatus"
      />

      <label>Employee Email</label>
      <input
        type="text"
        :class="{ 'has-error': submitting && invalidEmail }"
        v-model="formEmployee.email"
        @focus="clearStatus"
        @keypress="clearStatus"
      />

      <p v-if="error && submitting" class="error-message">❗Please fill out all required fields</p>
      <p v-if="success" class="success-message">✅ Employee successfully added</p>

      <button>Add Employee</button>
    </form>
  </div>
</template>

<script>
  export default {
    name: 'employee-form',
    data() {
      return {
        submitting: false,
        error: false,
        success: false,
        formEmployee: {
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
        this.submitting = true
        this.clearStatus()

        if (this.invalidName || this.invalidEmail) {
          this.error = true
          return
        }

        this.$emit('add:employee', this.formEmployee)
        this.$refs.first.focus()
        this.success = true

        this.formEmployee = {
          name: '',
          email: '',
        }
        this.error = false
        this.submitting = false
      },

      clearStatus() {
        this.success = false
        this.error = false
      },
    },
    // In Vue, we can use computed properties, which are functions that are automatically computed when something changes. This way we can avoid putting complex logic in the Vue template itself. 
    computed: {
      invalidName() {
        // validation
        return this.formEmployee.name === ''
      },
      invalidEmail() {
        // validation
        return this.formEmployee.email === ''
      },
    },
  }
</script>

<style scoped>
  form {
    margin-bottom: 2rem;
  }

  [class*='-message'] {
    font-weight: 500;
  }

  .error-message {
    color: #d33c40;
  }

  .success-message {
    color: #32a95d;
  }
</style>