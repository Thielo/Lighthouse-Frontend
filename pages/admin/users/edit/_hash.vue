<template>
  <div class="grid grid-cols-1 gap-6 mb-6 xl:grid-cols-4">
    <div class="mt-4 md:rounded flex flex-col bg-white border border-gray-100 dark:bg-gray-900 dark:border-gray-900 mb-6 lg:mb-0 lg:col-span-2 xl:col-span-3">
      <div class="p-6 flex-1" v-if="user !== null">
        <input-field
          :label="$t('admin.users.update.form.username')"
          :value="user.username"
          name="username"
          class="last:mb-0 mb-6"
          @update:input="updateField"
        />

        <input-field
          :label="$t('admin.users.update.form.email')"
          :value="user.email"
          name="email"
          class="last:mb-0 mb-6"
          @update:input="updateField"
        />

        <input-button
          class="last:mb-0 mb-6"
          @button:click="updateUser"
        >
          {{ $t('admin.users.update.form.update') }}
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
      user: null
    }
  },
  mounted () {
    this.$api.users.show(this.$route.params.hash).then((response) => {
      this.$store.commit('admin/setTitle', this.$t('admin.users.update.title', { user: this.$route.params.hash }))
      this.user = response.data[0]
    })
  },
  methods: {
    updateField (response) {
      this.user[response.input] = response.value
    },
    updateUser () {
      this.$api.users.update(this.user, this.user.hash).then((response) => {
        console.log(response)
      })
    }
  }
}
</script>
