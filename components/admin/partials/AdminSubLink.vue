<template>
  <nuxt-link :to="linkTarget" :class="classes">
    <slot />
  </nuxt-link>
</template>

<script>
export default {
  name: 'AdminSubLink',
  props: {
    linkTarget: {
      type: String,
      required: true
    }
  },
  computed: {
    isCurrent () {
      return this.$nuxt.$route.path.includes(this.linkTarget)
    },
    classes () {
      const inactiveClasses = ['text-gray-500 hover:text-gray-400 cursor-pointer']
      const activeClasses = ['cursor-default text-gray-400']

      return [
        'block px-5 py-1.5 text-sm font-medium',
        ...this.isCurrent ? activeClasses : inactiveClasses
      ]
    }
  }
}
</script>
