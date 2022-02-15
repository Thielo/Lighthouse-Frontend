<template>
  <div class="grid grid-cols-1 gap-6 mb-6 xl:grid-cols-4">
    <div class="mt-4 md:rounded flex flex-col bg-white border border-gray-100 dark:bg-gray-900 dark:border-gray-900 mb-6 lg:mb-0 lg:col-span-2 xl:col-span-3" v-if="user !== null">
      <h4>{{ $t('admin.users.delete.title', { user: user.username })}}</h4>
      <p v-html="$t('admin.users.delete.message', { user: user.username })"></p>
      <div class="p-6 flex-1">
        <input-button
          class="last:mb-0 mb-6"
          @button:click="$router.go(-1)"
        >
          {{ $t('admin.form.back') }}
        </input-button>
        <input-button
          class="last:mb-0 mb-6"
          @button:click="deleteUser"
        >
          {{ $t('admin.form.delete') }}
        </input-button>
      </div>
    </div>
  </div>
</template>

<script>
import InputButton from '~/components/form/InputButton'

export default {
  components: {
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
    deleteUser () {
      this.$api.users.delete(this.user.hash).then((response) => {
        console.log(response)
      })
    }
  }
}
</script>
