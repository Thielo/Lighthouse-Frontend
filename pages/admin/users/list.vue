<template>
  <div class="grid grid-cols-3 gap-4">
    List
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
      this.entries = response
    })
  }
}
</script>
