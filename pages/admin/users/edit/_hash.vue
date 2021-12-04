<template>
  <div class="grid grid-cols-1 gap-6 mb-6 xl:grid-cols-4">
    <div class="mt-4 md:rounded flex flex-col bg-white border border-gray-100 dark:bg-gray-900 dark:border-gray-900 mb-6 lg:mb-0 lg:col-span-2 xl:col-span-3">
      <div class="p-6 flex-1">
        <input-field
          label="Kodex-Nummer"
          input-type="number"
          :value="number"
          :min="1"
          step="1"
          wrapper-class="last:mb-0 mb-6"
          @update:input="updateNumber"
        />
        <input-editor
          wrapper-class="last:mb-0 mb-6"
          label="Kodex-Eintrag"
          :model-value="content"
          @update:modelValue="updateContent"
        />
        <input-button
          wrapper-class="last:mb-0 mb-6"
          @button:click="createEntry"
        >
          Speichern
        </input-button>
      </div>
    </div>
  </div>
</template>

<script>
import InputEditor from '~/components/form/InputEditor'
import InputField from '~/components/form/InputField'
import InputButton from '~/components/form/InputButton'

export default {
  components: {
    InputEditor,
    InputField,
    InputButton
  },
  layout: 'admin',
  data () {
    return {
      number: null,
      content: null
    }
  },
  mounted () {
    this.$api.posts.show(this.$route.params.hash).then((response) => {
      this.$store.commit('setTitle', `Beitrag bearbeiten "${this.$route.params.hash}"`)
      this.content = response.content
      this.number = response.number
    })
  },
  methods: {
    updateNumber (number) {
      this.number = number
    },
    updateContent (data) {
      this.content = data
    },
    createEntry () {
      const postData = {
        number: this.number,
        text: this.content
      }

      this.$api.posts.create(postData).then((response) => {
        console.log(response)
      })
    }
  }
}
</script>
