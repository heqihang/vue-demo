<script setup>
  import { ref, computed, watch } from 'vue'
  import HButton from '../components/HButton.vue'
  import HDivider from '../components/HDivider.vue'
  import { useCountStore } from '@/store/count'

  const store = useCountStore()
  const count = computed(() => store.count)
  const qrText = ref('https://heqihang.github.io/vue-demo')

  function handleAdd() {
    store.count += 1
  }
  function handleSub() {
    store.count -= 1
  }

  watch(() => store.count, val => {
    localStorage.setItem('count', val.toString())
  })
</script>

<template>
  <a-space>
    <HButton @click="handleAdd" type="primary">加1</HButton>
    <HButton @click="handleSub" type="primary">减1</HButton>
  </a-space>
  <HDivider dashed style="border-color: green;" />
  <h3 class="text-2xl font-bold text-amber-700">当前数字为 {{ count }}</h3>
  <HDivider dashed style="border-color: skyblue;" />
  <a-space direction="vertical" align="center">
    <a-qrcode :value="qrText" />
    <a-input v-model:value="qrText" style="width: 260px;" placeholder="-" />
  </a-space>
</template>

<style scoped></style>
