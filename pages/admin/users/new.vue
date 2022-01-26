<template>
  <div class="grid grid-cols-1 gap-6 mb-6 xl:grid-cols-4">
    <div class="mt-4 md:rounded flex flex-col bg-white border border-gray-100 dark:bg-gray-900 dark:border-gray-900 mb-6 lg:mb-0 lg:col-span-2 xl:col-span-3">
      <div class="p-6 flex-1">
        <input-field
          label="Username"
          :value="form.username"
          name="username"
          class="last:mb-0 mb-6"
          @update:input="updateField"
        />

        <input-field
          label="E-Mail"
          :value="form.email"
          name="email"
          class="last:mb-0 mb-6"
          @update:input="updateField"
        />

        <input-field
          label="Password"
          :value="form.password"
          name="password"
          class="last:mb-0 mb-6"
          @update:input="updateField"
        />

        <input-field
          label="Password Confirm"
          :value="form.password_confirm"
          name="password_confirm"
          class="last:mb-0 mb-6"
          @update:input="updateField"
        />
        <input-button
          class="last:mb-0 mb-6"
          @button:click="createUser"
        >
          {{ $t('admin.users.new.form.create') }}
        </input-button>
      </div>
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
  layout: 'admin',
  data () {
    return {
      form: {
        username: '',
        email: '',
        password: '',
        password_confirm: ''
      }
    }
  },
  mounted () {
    this.$store.commit('admin/setTitle', this.$t('admin.users.new.title'))
  },
  methods: {
    updateField (response) {
      this.form[response.input] = response.value
    },
    createUser () {
      this.$api.posts.create(this.form).then((response) => {
        console.log(response)
      })
    }
  }
}
</script>
