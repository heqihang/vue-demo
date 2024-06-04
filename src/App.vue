<script setup>
  import { ref } from 'vue'
  import axios from 'axios'
  import HButton from './components/HButton.vue'
  import HDivider from './components/HDivider.vue'
  import HTable from './components/HTable.vue'

  const data = ref([])
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
      dataIndex: 'genderName',
    },
    {
      title: 'Date',
      dataIndex: 'date',
    },
  ];
  const current = ref(1)
  const pageSize = ref(1)
  const total = ref(0)

  function getData() {
    axios.get(`http://localhost:3005/users/select?pageNum=${current.value}&pageSize=${pageSize.value}&name=`).then(res => {
      return res.data
    }).then(res => {
      data.value = res.data
      total.value = res.total
    })
  }

  getData()
</script>

<template>
  <div class="container">
    <HButton size="small" danger ghost>按钮1</HButton>
    <HDivider dashed style="border-color: green;" type="vertical" />
    <HButton size="large" type="primary">按钮2</HButton>
    <HTable bordered :columns="columns" :data-source="data" :pagination="{
      total,
      current,
      pageSize,
      onChange: (page) => {
        current = page
        getData()
      }
    }" style="margin-top: 12px;">
      <template #name="{ text }">
        <a>{{ text }}</a>
      </template>
      <template #age="{ text }">
        <span>{{ text + 100 }}</span>
      </template>
      <template #title>Header111</template>
      <template #footer>Footer111</template>
    </HTable>
  </div>
</template>

<style scoped>
  .container {
    padding: 24px;
  }
</style>
