<template>
  <div class="app">
    <main>
      <!-- 🤔 v-model 을 사용하지 않는 코드 -->
      <!-- <SearchInput
        :search-keyword="searchKeyword"
        @input="updateSearchKeyword"
      /> -->
      <!-- 🤔 v-model 을 사용한 코드 코드 -->
      <SearchInput v-model="searchKeyword" @search="searchProducts" />
      <ul>
        <li
          v-for="product in products"
          :key="product.id"
          class="item flex"
          @click="moveToDetailPage(product.id)"
        >
          <img
            class="product-image"
            :src="product.imageUrl"
            :alt="product.name"
          />
          <p>{{ product.name }}</p>
          <span>{{ product.price }}</span>
        </li>
      </ul>
    </main>
  </div>
</template>

<script>
import axios from 'axios'
import SearchInput from '@/components/SearchInput.vue'
import { fetchProductByKeyword } from '~/api'

export default {
  components: { SearchInput },
  async asyncData() {
    const response = await axios.get('http://localhost:3000/products')
    // console.log(response)
    const products = response.data.map((item) => ({
      ...item,
      imageUrl: `${item.imageUrl}?random=${Math.random()}`,
    }))

    return { products }
  },

  data() {
    return {
      searchKeyword: '',
    }
  },

  methods: {
    moveToDetailPage(productId) {
      // console.log(productId)
      this.$router.push(`detail/${productId}`)
    },
    async searchProducts() {
      const { data } = await fetchProductByKeyword(this.searchKeyword)
      // console.log(data)
      this.products = data.map((item) => ({
      ...item,
      imageUrl: `${item.imageUrl}?random=${Math.random()}`,
    }))
    },
    // updateSearchKeyword(keyword) {
    //   this.searchKeyword = keyword
    // },
  },
}
</script>

<style scoped>
.flex {
  display: flex;
  justify-content: center;
}
.item {
  display: inline-block;
  width: 400px;
  height: 300px;
  text-align: center;
  margin: 0 0.5rem;
  cursor: pointer;
}
.product-image {
  width: 400px;
  height: 250px;
}
.app {
  position: relative;
}
.cart-wrapper {
  position: sticky;
  float: right;
  bottom: 50px;
  right: 50px;
}
.cart-wrapper .btn {
  display: inline-block;
  height: 40px;
  font-size: 1rem;
  font-weight: 500;
}
</style>