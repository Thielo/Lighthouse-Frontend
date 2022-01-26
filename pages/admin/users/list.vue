<template>
  <div class="w-2/3 mx-auto">
    <div class="bg-white shadow-md rounded my-6">
      <table class="text-left w-full table-fixed border-collapse">
        <thead>
          <tr>
            <th class="py-4 px-6 bg-grey-lightest font-bold uppercase text-sm text-grey-dark border-b border-grey-light">
              ID
            </th>
            <th class="py-4 px-6 bg-grey-lightest font-bold uppercase text-sm text-grey-dark border-b border-grey-light">
              Name
            </th>
            <th class="py-4 px-6 bg-grey-lightest font-bold uppercase text-sm text-grey-dark border-b border-grey-light">
              Username
            </th>
            <th class="py-4 px-6 bg-grey-lightest font-bold uppercase text-sm text-grey-dark border-b border-grey-light">
              E-Mail
            </th>
            <th class="py-4 px-6 bg-grey-lightest font-bold uppercase text-sm text-grey-dark border-b border-grey-light">
              Created
            </th>
            <th class="py-4 px-6 bg-grey-lightest font-bold uppercase text-sm text-grey-dark border-b border-grey-light"></th>
          </tr>
        </thead>
        <tbody>
          <tr class="hover:bg-grey-lighter" v-for="(user, index) in entries" :key="`user-${index}`">
            <td class="py-4 px-6 border-b border-grey-light">
              <abbr :title="user.hash">{{ user.id }}</abbr>
            </td>
            <td class="py-4 px-6 border-b border-grey-light">
              {{ user.name }}
            </td>
            <td class="py-4 px-6 border-b border-grey-light">
              {{ user.username }}
            </td>
            <td class="py-4 px-6 border-b border-grey-light">
              {{ user.email }}
            </td>
            <td class="py-4 px-6 border-b border-grey-light">
              {{ user.created_at }}
            </td>
            <td class="py-4 px-6 border-b border-grey-light">
              <a :href="`/admin/users/edit/${user.hash}`" class="text-grey-lighter font-bold py-1 px-1 rounded text-xs bg-green hover:bg-green-dark">Edit</a>
              <a href="#" class="text-grey-lighter font-bold py-1 px-1 rounded text-xs bg-blue hover:bg-blue-dark">Threads</a>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  components: { },
  layout: 'admin',
  data () {
    return {
      entries: null
    }
  },
  mounted () {
    this.$store.commit('admin/setTitle', this.$t('admin.users.list.title'))
    this.$api.users.index().then((response) => {
      this.entries = response.data
    })
  }
}
</script>
