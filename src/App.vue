<script setup>
  import HButton from './components/HButton.vue'
  import HDivider from './components/HDivider.vue'
</script>

<template>
  <div class="container">
    <HButton size="small" danger ghost>按钮1</HButton>
    <HDivider dashed style="border-color: green;" type="vertical" />
    <HButton size="large" type="primary">按钮2</HButton>
  </div>
</template>

<style scoped>
  .container {
    margin: 24px;
  }
</style>
