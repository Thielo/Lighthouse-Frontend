<template>
  <div>
    <label v-if="label !== ''" class="block font-bold mb-2 lg:mb-1">{{ label }}</label>
    <div class="relative border-gray-700 dark:bg-gray-800 border-t border-b rounded border-l border-r">
      <component
        :is="getTag"
        :type="getInputType"
        class="px-3 py-2 max-w-full focus:ring focus:outline-none dark:placeholder-gray-400 w-full h-12 border-0 border-gray-700 dark:bg-gray-800 rounded"
        :class="elemClass"
        v-bind="$attrs"
        :value="computedValue"
        @input="onInput"
        @change="onChange"
        @blur="onBlur"
        @focus="onFocus"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: 'InputField',
  inheritAttrs: false,
  props: {
    label: {
      type: String,
      default: ''
    },
    isTextarea: {
      type: Boolean,
      default: false
    },
    inputType: {
      type: String,
      default: ''
    },
    value: {
      type: [Number, String],
      default: ''
    },
    elemClass: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      newValue: this.value
    }
  },
  computed: {
    computedValue: {
      get () {
        return this.newValue
      },
      set (value) {
        this.newValue = value
        let payload = value
        if (this.$attrs.name) {
          payload = { input: this.$attrs.name, value }
        }

        this.$emit('update:input', payload)
      }
    },

    getTag () {
      return this.isTextarea ? 'textarea' : 'input'
    },

    getInputType () {
      if (this.isTextarea === true) {
        return undefined
      }

      return this.inputType !== '' ? this.inputType : 'text'
    }
  },
  methods: {
    onInput (event) {
      const value = event.target.value
      this.updateValue(value)
    },

    onChange (event) {
      const value = event.target.value
      this.updateValue(value)
    },

    onBlur ($event) {
      this.$emit(this.isTextarea ? 'textarea:blur' : 'input:blur', $event)
    },

    onFocus ($event) {
      this.$emit(this.isTextarea ? 'textarea:focus' : 'input:focus', $event)
    },

    updateValue (value) {
      this.computedValue = value
    }
  }
}
</script>
