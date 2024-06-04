<script setup>
import { useSlots } from 'vue'

const slots = Object.keys(useSlots()).filter(key => key !== 'title' && key !== 'footer')
</script>

<template>
  <a-table>
    <template #bodyCell="{ column, text, record, index }">
      <template v-for="slot in slots" :key="slot">
        <slot v-if="column.dataIndex === slot" :name="slot" v-bind="{ column, text, record, index }"></slot>
      </template>
    </template>
    <template #title>
      <slot name="title"></slot>
    </template>
    <template #footer>
      <slot name="footer"></slot>
    </template>
  </a-table>
</template>

<style scoped>

</style>
