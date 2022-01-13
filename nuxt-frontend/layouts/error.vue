<template>
  <div>
    <template v-if="error.statusCode === 404">
      <h1>Page not found</h1>
      <p>페이지를 찾을 수 없습니다</p>
    </template>
    <template v-else>
      <h1>백엔드 서버 에러</h1>
      <p>관리자에게 문의를 요청하세요</p>
    </template>
    <NuxtLink to="/">메인 페이지로 이동하기</NuxtLink>
  </div>
</template>

<script>
export default {
  layout: 'errorLayout',
  props: ['error'],
}
</script>

<style lang="scss" scoped>
</style>$