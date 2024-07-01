<template>
  <div class="dark dark:bg-tertiary h-screen">
    <NuxtLayout>
      <NuxtPage />
      <ToggleTheme />
    </NuxtLayout>
  </div>
</template>

<script>
import ToggleTheme from './components/ToggleTheme.vue'

export default {
  components: {
    ToggleTheme
  },
  mounted() {
    this.$colorMode.preference = 'dark';
  }
}
</script>