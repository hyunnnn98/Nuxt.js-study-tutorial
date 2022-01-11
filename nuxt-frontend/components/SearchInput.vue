<template>
  <div>
    <!-- 동적 이벤트 감지를 통한 상위 컴포넌트 데이터 전송 -->
    <input type="text" :value="value" @input="updateInput" />
    <button type="buttton" @click="$emit('search')">search</button>
  </div>
</template>

<script>
// v-model 을 사용할 경우 props의 네이밍을 개발자가 지정할 수 없고
// default 값으로 `value` 라는 데이터 네이밍이 정해진다.
// 따라서, 이러한 네이밍이 싫은 경우, Vue의 model 을 사용하면 해결 가능하다.

export default {
  props: {
    value: {
      type: String,
      default: () => '',
    },
  },
  methods: {
    updateInput(event) {
    //   console.log(this.constructor.name + '에서 입력중')
      const inputValue = event.target.value
      this.$emit('input', inputValue)
    },
  },
}
</script>

<style lang="scss" scoped>
</style>