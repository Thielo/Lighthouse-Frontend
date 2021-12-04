<template>
  <div :class="componentClass">
    <div class="p-6 flex-1">
      <h3 v-if="title" class="text-gray-700 text-3xl font-medium mb-3">
        {{ title }}
      </h3>
      <div :class="contentClass">
        <slot />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AdminTile',
  props: {
    cols: {
      type: Number,
      default: 1
    },
    title: {
      type: String,
      default: null
    },
    contentClass: {
      type: String,
      default: ''
    }
  },
  computed: {
    componentClass () {
      return [
        'mt-4',
        'md:rounded',
        'flex',
        'flex-col',
        'bg-white',
        'border',
        'border-gray-100',
        'dark:bg-gray-900',
        'dark:border-gray-900',
        'mb-6',
        'lg:mb-0',
        `lg:col-span-${this.cols}`
      ]
    }
  }
}
</script>
