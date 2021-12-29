# Nuxt.js
---

### 공부 내용 정리

---

[🤔 Nuxt의 장점과 특징](Nuxt%20js%208ec7f052dffd4345bc637855c76d1078/Nuxt%E1%84%8B%E1%85%B4%20%E1%84%8C%E1%85%A1%E1%86%BC%E1%84%8C%E1%85%A5%E1%86%B7%E1%84%80%E1%85%AA%20%E1%84%90%E1%85%B3%E1%86%A8%E1%84%8C%E1%85%B5%E1%86%BC%203b3a27b2817049f99538b04d8fe028c2.md)

[🤔 서버 사이드 렌더링을 왜 쓸까?](Nuxt%20js%208ec7f052dffd4345bc637855c76d1078/%E1%84%89%E1%85%A5%E1%84%87%E1%85%A5%20%E1%84%89%E1%85%A1%E1%84%8B%E1%85%B5%E1%84%83%E1%85%B3%20%E1%84%85%E1%85%A6%E1%86%AB%E1%84%83%E1%85%A5%E1%84%85%E1%85%B5%E1%86%BC%E1%84%8B%E1%85%B3%E1%86%AF%20%E1%84%8B%E1%85%AB%20%E1%84%8A%E1%85%B3%E1%86%AF%E1%84%81%E1%85%A1%20f44eb859da5443949388c3347045846a.md)

[🤔 Nuxt 프로젝트 생성](Nuxt%20js%208ec7f052dffd4345bc637855c76d1078/Nuxt%20%E1%84%91%E1%85%B3%E1%84%85%E1%85%A9%E1%84%8C%E1%85%A6%E1%86%A8%E1%84%90%E1%85%B3%20%E1%84%89%E1%85%A2%E1%86%BC%E1%84%89%E1%85%A5%E1%86%BC%20eaa34b32abac4ed5b3008cd1449152d7.md)

[🤔 프로젝트 폴더 구조 설명](Nuxt%20js%208ec7f052dffd4345bc637855c76d1078/%E1%84%91%E1%85%B3%E1%84%85%E1%85%A9%E1%84%8C%E1%85%A6%E1%86%A8%E1%84%90%E1%85%B3%20%E1%84%91%E1%85%A9%E1%86%AF%E1%84%83%E1%85%A5%20%E1%84%80%E1%85%AE%E1%84%8C%E1%85%A9%20%E1%84%89%E1%85%A5%E1%86%AF%E1%84%86%E1%85%A7%E1%86%BC%201fd5749566b04994bca9f6ee7a99f8a2.md)

[🤔 404 에러 페이지](Nuxt%20js%208ec7f052dffd4345bc637855c76d1078/404%20%E1%84%8B%E1%85%A6%E1%84%85%E1%85%A5%20%E1%84%91%E1%85%A6%E1%84%8B%E1%85%B5%E1%84%8C%E1%85%B5%205d2241b3849245febd338baf632895f3.md)

### 용어 정리

---

**Node.js** ? 자바스크립트를 브라우저 밖에서 실행할 수 있도록 만든 환경이다.

**코드스플리팅** (Code Splitting) ? 초기 애플리케이션의 로딩 속도를 줄일 수 있는 웹팩 설정이다.

> 페이지 첫 로딩시 모든 페이지를 병렬로 로딩하는 환경을 번들로 분할하여
**해당 페이지가 필요할 때만 번들파일을 불러오는 형식**을 채택하였다.
> 
- [Window History API](https://developer.mozilla.org/en-US/docs/Web/API/Window/history)
- [웹팩 코드 스플리팅 문서](https://webpack.js.org/guides/code-splitting/)
- [Vue.js 다이나믹 임포트 문서](https://vuejs.org/v2/guide/components-dynamic-async.html#ad)

### ESLint 이슈

---

ESLint **component name should always be multi-word** 경고문구 해결

```jsx
// add your custom rules here
  rules: {
     'vue/multi-word-component-names': 'off'
  },
```