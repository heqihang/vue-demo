<script setup>
import { ref } from 'vue'
import { message } from 'ant-design-vue'

const content = ref('')
const pan1 = ref(undefined)
const name1 = ref('')
const pan2 = ref(undefined)
const name2 = ref('')
const showContent = ref('')

function setC() {
  if (content.value === '' || pan1.value === undefined || name1.value === undefined) {
    message.error('写入内容、写入盘、文件名称全部不能为空！')
    return
  }

  message.success('写入成功！')
  operation.setContent({
    content: content.value,
    pan: pan1.value,
    name: name1.value
  })
}

async function getC() {
  if (pan2.value === undefined || name2.value ==='') {
    message.error('读取盘、文件名称全部不能为空！')
    return
  }
  const res = await operation.getContent({
    pan: pan2.value,
    name: name2.value
  })
  if (res === 0) {
    message.error('文件不存在，请检查读取盘或文件名是否正确！')
    showContent.value = ''
  } else {
    message.success('读取成功！')
    showContent.value = res
  }
}
</script>

<template>
  <div class="hello-world">
    <p>请输入写入内容</p>
    <a-textarea v-model:value="content"></a-textarea>
    <br><br>
    <p>请选择写入盘</p>
    <a-select v-model:value="pan1" style="width: 200px;">
      <a-select-option label="C" value="c">C</a-select-option>
      <a-select-option label="D" value="d">D</a-select-option>
      <a-select-option label="E" value="e">E</a-select-option>
      <a-select-option label="F" value="f">F</a-select-option>
    </a-select>
    <br><br>
    <p>请输入文件名称</p>
    <a-input style="width: 200px;" v-model:value="name1" addon-after=".txt"></a-input>
    <a-button @click="setC" style="margin-left: 24px;" type="primary">执行写入</a-button>
    <a-divider></a-divider>
    <p>请选择读取盘</p>
    <a-select v-model:value="pan2" style="width: 200px;">
      <a-select-option label="C" value="c">C</a-select-option>
      <a-select-option label="D" value="d">D</a-select-option>
      <a-select-option label="E" value="e">E</a-select-option>
      <a-select-option label="F" value="f">F</a-select-option>
    </a-select>
    <br><br>
    <p>请输入文件名称</p>
    <a-input style="width: 200px;" v-model:value="name2" addon-after=".txt"></a-input>
    <a-button @click="getC" style="margin-left: 24px;" type="primary">执行读取</a-button>
    <br><br>
    <div id="show_content">内容展示：{{showContent}}</div>
  </div>
</template>

<style scoped>

</style>
