<!-- Please remove this file from your project -->
<template>
  <div class="flex h-screen bg-gray-200 font-roboto">
    <admin-sidebar :entries="menuEntries"/>
    <div class="flex-1 flex flex-col overflow-hidden">
      <admin-header />
      <main class="flex-1 overflow-x-hidden overflow-y-auto bg-gray-200">
        <div class="container mx-auto px-6 py-8">
          <Nuxt />
        </div>
      </main>
    </div>
  </div>
</template>

<script>
import AdminSidebar from '~/components/admin/AdminSidebar.vue'
import AdminHeader from '~/components/admin/AdminHeader.vue'

export default {
  components: {
    AdminSidebar,
    AdminHeader
  },
  data () {
    return {
      menuEntries: [
        {
          title: this.$t('admin.dashboard.navigation'),
          url: '/admin/dashboard',
          icon: 'chart-pie'
        },
        {
          title: this.$t('admin.users.navigation'),
          url: '/admin/users/list',
          group: '/admin/users',
          icon: 'user',
          submenu: [
            {
              title: this.$t('admin.users.list.navigation'),
              url: '/admin/users/list'
            },
            {
              title: this.$t('admin.users.new.navigation'),
              url: '/admin/users/new'
            }
          ]
        }
      ]
    }
  },
  middleware: 'authenticated'
}
</script>
