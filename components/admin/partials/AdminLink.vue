<template>
  <div>
    <nuxt-link :to="linkTarget" :class="classes">
      <slot v-if="hasIcon" name="icon" />
      <span :class="textClass">
        <slot />
      </span>
      <svg
        v-if="hasSubmenu"
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        aria-hidden="true"
        role="img"
        class="w-5 h-5 text-gray-400 transform transition duration-100"
        width="1em"
        height="1em"
        preserveAspectRatio="xMidYMid meet"
        viewBox="0 0 20 20"
      >
        <g fill="none">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M5.293 7.293a1 1 0 0 1 1.414 0L10 10.586l3.293-3.293a1 1 0 1 1 1.414 1.414l-4 4a1 1 0 0 1-1.414 0l-4-4a1 1 0 0 1 0-1.414z" fill="currentColor" />
        </g>
      </svg>
    </nuxt-link>
    <div v-if="hasSubmenu" class="pl-9 h-0 overflow-hidden" :class="{ 'pb-4 pt-1 h-auto': isCurrent }">
      <slot name="submenu" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'AdminLink',
  props: {
    linkTarget: {
      type: String,
      required: true
    },
    groupTarget: {
      type: String,
      default: null
    }
  },
  computed: {
    hasSubmenu () {
      return !!this.$slots.submenu
    },
    hasIcon () {
      return !!this.$slots.icon
    },
    textClass () {
      return [
        'flex-grow',
        ...this.hasIcon ? ['mx-4'] : ['ml-9 mr-4']
      ]
    },
    isCurrent () {
      return this.$nuxt.$route.path.includes(this.linkTarget) || this.$nuxt.$route.path.includes(this.groupTarget)
    },
    submenuClasses () {
      return [
        ...this.isCurrent ? ['block'] : ['hidden']
      ]
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
