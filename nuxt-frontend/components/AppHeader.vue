<template>
  <header class="title">
    <NuxtLink class="logo" to="/">Nuxt Shopping</NuxtLink>
  </header>
</template>

<script>
export default {}
</script>

<style scoped>
/* 해더 관련 스타일 */
header {
  height: 60px;
  display: flex;
  align-items: center;
  padding: 0 0.5rem;
}

.logo {
  font-weight: 900;
}

.logo:visited {
  color: inherit;
}
</style>