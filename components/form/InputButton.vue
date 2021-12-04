<template>
  <div>
    <button
      class="inline-flex cursor-pointer justify-center items-center whitespace-nowrap ring-blue-700 focus:outline-none transition-colors duration-150 border hover:bg-blue-600 bg-blue-500 text-white border-blue-600 py-2 px-3 focus:ring rounded"
      :class="elemClass"
      :type="$attrs.type"
      v-bind="$attrs"

      :disabled="isLoading"
      @click="onClick"
    >
      <span v-if="hasIcon || isLoading" class="pl-2">
        <svg v-if="isLoading" class="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
          <circle
            class="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            stroke-width="4"
          />
          <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
        </svg>
        <slot v-else name="icon" />
      </span>
      <span class="pl-2 pr-2">
        <slot />
      </span>
    </button>
  </div>
</template>

<script>
export default {
  name: 'InputButton',
  inheritAttrs: false,
  props: {
    elemClass: {
      type: String,
      default: ''
    },
    isLoading: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    hasIcon () {
      return !!this.$slots.icon
    }
  },
  methods: {
    onClick ($event) {
      this.$emit('button:click', $event)
    }
  }
}
</script>
