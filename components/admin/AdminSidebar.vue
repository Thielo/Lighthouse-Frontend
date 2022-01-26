<template>
  <div class="flex">
    <div class="hidden fixed inset-0 z-20 transition-opacity bg-black opacity-50 lg:hidden" />
    <div class="-translate-x-full ease-in fixed inset-y-0 left-0 z-30 w-64 overflow-y-auto transition duration-300 transform bg-gray-900 lg:translate-x-0 lg:static lg:inset-0">
      <div class="flex items-center justify-center mt-8">
        <div class="flex items-center">
          <img class="w-12 h-12" src="~/assets/lighthouse-logo.svg">
          <span class="mx-2 text-2xl font-semibold text-white">Lighthouse <br>Dashboard</span>
        </div>
      </div>
      <nav class="mt-10">
        <admin-link v-for="(entry, index) in entries" :key="`nav-${index}`" :link-target="entry.url" :group-target="entry.hasOwnProperty('group') ? entry.group : null">
          <template v-if="entry.icon" #icon>
            <font-awesome-icon :icon="`fa-solid fa-${entry.icon}`" />
          </template>
          {{ entry.title }}
          <template v-if="entry.submenu && entry.submenu.length" #submenu>
            <admin-sub-link v-for="(subEntry, subIndex) in entry.submenu" :key="`nav-${index}-${subIndex}`" :link-target="subEntry.url">
              {{ subEntry.title }}
            </admin-sub-link>
          </template>
        </admin-link>
      </nav>
    </div>
  </div>
</template>

<script>
import AdminSubLink from '~/components/admin/partials/AdminSubLink'
import AdminLink from '~/components/admin/partials/AdminLink'

export default {
  name: 'AdminSidebar',
  components: {
    AdminSubLink,
    AdminLink
  },
  props: {
    entries: {
      type: Array,
      required: true
    }
  }
}
</script>
