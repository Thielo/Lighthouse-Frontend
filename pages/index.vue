<template>
  <div>
    Languages:
    <ul>
      <li v-for="locale in availableLocales" :key="locale.code">
        <nuxt-link :to="switchLocalePath(locale.code)">{{ locale.name }}</nuxt-link>
      </li>
    </ul>
    <p>{{ $t('welcome') }}</p>
    <p><nuxt-link to="auth/login">Login</nuxt-link></p>
  </div>
</template>

<script>
export default {
  computed: {
    availableLocales () {
      // return this.$i18n.locales.filter(i => i.code !== this.$i18n.locale)
      return this.$i18n.locales
    }
  }
}
</script>
