<template>
  <button class="fixed-btn" @click="moveToCartPage">카트</button>
</template>

<script>
export default {
  methods: {
    moveToCartPage() {
      this.$router.push('/cart')
    },
  },
}
</script>

<style scoped>
.fixed-btn {
  position: fixed;
  bottom: 2.5rem;
  right: 0.5rem;
  border-width: 0px;
  border-radius: 50%;
  box-shadow: 2px 2px 2px 2px rgba(128, 128, 128, 0.274);
  width: 70px;
  height: 70px;
  cursor: pointer;
  background-color: #00c58e;
}
</style>