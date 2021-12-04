<template>
  <div class="flex items-center justify-center h-screen px-6 bg-gray-200">
    <div class="w-full max-w-sm p-6 bg-white rounded-md shadow-md">
      <div class="flex items-center justify-center">
        <span class="text-2xl font-semibold text-gray-700">Admin</span>
      </div>
      <form class="mt-4" @submit.prevent="login">
        <input-field
          class="last:mb-0 mb-6"
          label="E-Mail / Username"
          :value="username"
          name="username"
          @update:input="updateField"
        />
        <input-field
          class="last:mb-0 mb-6"
          label="Password"
          input-type="password"
          :value="password"
          name="password"
          @update:input="updateField"
        />
        <span v-if="error" class="flex items-center text-center font-medium tracking-wide text-red-500 text-xs mt-1 ml-1">
          Login fehlgeschlagen, bitte erneut versuchen.
        </span>
        <!-- <div class="flex items-center justify-between mt-4">
          <div>
            <label class="inline-flex items-center">
              <input type="checkbox" class="text-indigo-600 border-gray-200 rounded-md focus:border-indigo-600 focus:ring focus:ring-opacity-40 focus:ring-indigo-500">
              <span class="mx-2 text-sm text-gray-600">Remember me</span>
            </label>
          </div>
          <div>
            <a class="block text-sm text-indigo-700 fontme hover:underline" href="#">Forgot your password?</a>
          </div>
        </div> -->
        <input-button elem-class="w-full" :is-loading="isLoading" type="submit">
          Login
        </input-button>
      </form>
    </div>
  </div>
</template>

<script>
import InputField from '~/components/form/InputField'
import InputButton from '~/components/form/InputButton'

export default {
  components: {
    InputField,
    InputButton
  },
  layout: 'blank',
  middleware: 'authenticated',
  data () {
    return {
      username: '',
      password: '',
      error: false,
      isLoading: false
    }
  },
  methods: {
    updateField (response) {
      this[response.input] = response.value
    },
    login () {
      this.isLoading = true
      const userData = {
        username: this.username,
        password: this.password
      }

      this.$api.auth.token().then(() => {
        this.$api.auth.login(userData).then(() => {
          this.$router.push({
            path: '/admin/dashboard'
          })
        }).catch((error) => {
          if (error.response.status) {
            this.error = true
            this.isLoading = false
          }
        })
      })
    }
  }
}
</script>
