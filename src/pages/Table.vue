<script setup>
  import { ref } from 'vue'
  import HTable from '../components/HTable.vue'

  const data = ref([
    {
      name: '阿台',
      age: 3,
      gender: 0,
      date: '2021-04-18'
    },
    {
      name: '阿灶',
      age: 2,
      gender: 1,
      date: '2022-04-12'
    }
  ])
  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
    },
    {
      title: 'Age',
      dataIndex: 'age',
    },
    {
      title: 'Gender',
      dataIndex: 'gender',
    },
    {
      title: 'Date',
      dataIndex: 'date',
    },
  ];
</script>

<template>
  <HTable bordered :columns="columns" :data-source="data">
    <template #gender="{ text }">
      {{ text === 1 ? '男' : '女' }}
    </template>
    <template #title>这是列表头部</template>
    <template #footer>这是列表尾部</template>
  </HTable>
</template>

<style scoped></style>
