<template>
  <nuxt-link :to="linkTarget" :class="classes">
    <slot v-if="hasIcon" name="icon" />
    <span :class="textClass">
      <slot />
    </span>
  </nuxt-link>
</template>

<script>
export default {
  name: 'AdminLink',
  props: {
    linkTarget: {
      type: String,
      required: true
    }
  },
  mounted () {
    console.log()
  },
  computed: {
    hasIcon () {
      return !!this.$slots.icon
    },
    textClass () {
      return [
        ...this.hasIcon ? ['mx-4'] : ['ml-9 mr-4']
      ]
    },
    isCurrent () {
      return this.$nuxt.$route.path.includes(this.linkTarget)
    },
    classes () {
      const inactiveClasses = ['hover:bg-gray-600 hover:bg-opacity-25 hover:text-gray-100']
      const activeClasses = ['bg-gray-600 bg-opacity-25 text-gray-100 border-l-4 border-gray-100']

      return [
        'flex',
        'items-center',
        'px-6',
        'py-2',
        'mt-4',
        'duration-200',
        'border-l-4',
        'border-gray-900',
        'text-gray-500',
        ...this.isCurrent ? activeClasses : inactiveClasses
      ]
    }
  }
}
</script>
