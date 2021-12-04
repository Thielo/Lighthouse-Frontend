<!-- Please remove this file from your project -->
<template>
  <div class="flex h-screen bg-gray-200 font-roboto">
    <admin-sidebar />
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
  middleware: 'authenticated'
}
</script>
