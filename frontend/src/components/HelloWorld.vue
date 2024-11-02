<script setup lang="ts">
import { ref } from 'vue'

// 親コンポーネントから受け取るプロパティの型を定義
defineProps<{ msg: string }>()

// countの状態を定義し、ボタンをクリックするごとに増加するようにする
const count = ref(0)
</script>

<template>
  <!-- 親コンポーネントから渡されたメッセージを表示 -->
  <h1>{{ msg }}</h1>

  <div class="card">
    <!-- ボタンクリック時にcountをインクリメント -->
    <button type="button" @click="count++">count is {{ count }}</button>
    <p>
      Edit
      <code>components/HelloWorld.vue</code> to test HMR
      <!-- HMR（Hot Module Replacement）のテストに使うためのテキスト表示 -->
    </p>
  </div>

  <!-- VueとViteのリソースリンク -->
  <p>
    Check out
    <a href="https://vuejs.org/guide/quick-start.html#local" target="_blank"
      >create-vue</a
    >, the official Vue + Vite starter
  </p>
  <p>
    Learn more about IDE Support for Vue in the
    <a
      href="https://vuejs.org/guide/scaling-up/tooling.html#ide-support"
      target="_blank"
      >Vue Docs Scaling up Guide</a
    >.
  </p>
  <p class="read-the-docs">Click on the Vite and Vue logos to learn more</p>
</template>

<style scoped>
/* .read-the-docsクラスに対するスタイル設定 */
.read-the-docs {
  color: #888;
}
</style>