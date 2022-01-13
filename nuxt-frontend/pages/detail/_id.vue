<template>
  <div>
    <div class="container">
      <div class="main-panel">
        <img
          class="product-image"
          :src="product.imageUrl"
          :alt="product.name"
        />
      </div>
      <div class="side-panel">
        <p class="name">{{ product.name }}</p>
        <p class="price">{{ product.price }}</p>
        <button type="button" @click="addToCart">카트에 담기</button>
      </div>
    </div>
  </div>
</template>

<script>
import { createCartItem, fetchProductById } from '@/api/index'
export default {
  async asyncData({ params }) {
    const productId = params.id

    const response = await fetchProductById(productId)
    const product = response.data
    // console.log(product)
    return { product }
  },
  methods: {
    async addToCart() {
      await createCartItem(this.product)
      // console.log('res :', response.status)
      // if (!response.ok) {
      //   // throw new Error(`HTTP error! status: ${response.status}`)
      //   console.log('카트 저장에 실패하였습니다.')
      // }
      this.$store.commit('addCartItem', this.product)
      this.$router.push('/cart')
    },
  },
  // created() {
  //   console.log(this.$route)
  //   const id = this.$route.params.id
  //   fetchProductById()
  // },
}
</script>

<style scoped>
.container {
  display: flex;
  justify-content: center;
  margin: 2rem 0;
}
.product-image {
  width: 500px;
  height: 375px;
}
.side-panel {
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 220px;
  text-align: center;
  padding: 0 1rem;
}
</style>