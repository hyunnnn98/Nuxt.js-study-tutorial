<template>
  <div>
    <h1>상세 페이지</h1>
    <div>
      <!-- {{ product }} -->
      <img :src="product.imageUrl" :alt="product.name" />
      <p>name: {{ product.name }}</p>
      <p>price: {{ product.price }}</p>
    </div>
  </div>
</template>

<script>
import { fetchProductById } from '@/api/index'
export default {
  async asyncData({ params }) {
    const productId = params.id

    const response = await fetchProductById(productId)
    const product = response.data
    // console.log(product)
    return { product }
  },
  // created() {
  //   console.log(this.$route)
  //   const id = this.$route.params.id
  //   fetchProductById()
  // },
}
</script>

<style lang="scss" scoped>
</style>