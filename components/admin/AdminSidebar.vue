<template>
  <div class="flex">
    <div class="hidden fixed inset-0 z-20 transition-opacity bg-black opacity-50 lg:hidden" />
    <div class="-translate-x-full ease-in fixed inset-y-0 left-0 z-30 w-64 overflow-y-auto transition duration-300 transform bg-gray-900 lg:translate-x-0 lg:static lg:inset-0">
      <div class="flex items-center justify-center mt-8">
        <div class="flex items-center">
          <img class="w-12 h-12" src="~/assets/lighthouse-logo.svg" />
          <span class="mx-2 text-2xl font-semibold text-white">Lighthouse <br />Dashboard</span>
        </div>
      </div>
      <admin-menu />
    </div>
  </div>
</template>

<script>
import AdminMenu from '~/components/admin/AdminMenu'

export default {
  name: 'AdminSidebar',
  components: {
    AdminMenu
  }
}
</script>
