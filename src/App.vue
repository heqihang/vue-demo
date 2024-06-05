<script setup>
  import { ref, watch, onMounted } from 'vue'
  import { useRoute, useRouter } from 'vue-router'

  const route = useRoute()
  const router = useRouter()
  const activeKey = ref(1)

  watch(() => activeKey.value, val => {
    router.push(`/vue-demo/${val === 1 ? '' : 'table'}`)
  })

  onMounted(() => {
    setTimeout(() => {
      activeKey.value = route.path.includes('table') ? 2 : 1
    }, 0)
  })
</script>

<template>
  <a-watermark content="He" style="height: 100%;">
    <a-tabs v-model:activeKey="activeKey">
      <a-tab-pane :key="1" tab="Home" />
      <a-tab-pane :key="2" tab="Table" />
    </a-tabs>
    <router-view></router-view>
  </a-watermark>
</template>

<style>
  html, body {
    height: 100%;
  }
  #app {
    padding: 8px;
    height: 100%;
  }
</style>
