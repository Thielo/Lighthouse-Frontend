<template>
  <div class="grid grid-cols-1 gap-6 mb-6 xl:grid-cols-4">
    <admin-tile v-if="user" title="User" content-class="relative">
      <div class="absolute -top-14 z-10 block w-12 top-0 right-0 h-12 overflow-hidden rounded-full shadow focus:outline-none">
      </div>
      <p>{{ getGreeting }}, {{ user.username }}!</p>
    </admin-tile>

    <admin-tile title="Einträge">
      <div class="flex items-start">
        <span class="">Aktuelle Einträge: <span class="block font-bold text-2xl">{{ getNumberOfEntries }}</span></span>
      </div>
      <nuxt-link to="/admin/entries/list" class="inline-block mt-2">
        <span class="mr-2">✎</span> bearbeiten
      </nuxt-link>
    </admin-tile>

    <admin-tile title="Einträge">
      <input-button @button:click="logout">
        Logout
      </input-button>
    </admin-tile>
  </div>
</template>

<script>
import AdminTile from '~/components/admin/AdminTile'
import InputButton from '~/components/form/InputButton'

const greetings = [
  'Hey',
  'Welcome',
  'Good Day'
]

export default {
  components: { InputButton, AdminTile },
  layout: 'admin',
  data () {
    return {
      user: null,
      entries: null
    }
  },
  computed: {
    getNumberOfEntries () {
      return this.entries !== null ? this.entries.length : 0
    },
    getGreeting () {
      return greetings[Math.floor(Math.random() * greetings.length)]
    }
  },
  mounted () {
    this.user = this.$store.state.user
    this.$api.posts.index().then((response) => {
      this.entries = response
    })
  },
  methods: {
    logout () {
      console.log('test')
      this.$axios.post('/api/logout').then((response) => {
        this.$router.push({
          path: '/'
        })
      })
    }
  }
}
</script>
