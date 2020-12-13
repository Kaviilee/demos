<template>
  <div class="jsbase64">
    <header class="title">Base64 Decode and Encode</header>
    <el-input
      v-model="before"
      type="textarea"
      :rows="6"
      placeholder="输入要转换的字符"
      class="before"
    ></el-input>

    <el-button
      size="medium"
      type="primary"
      @click="handleDecodeOrEncode('decode')"
      >编码</el-button
    >
    <el-button size="medium" @click="handleDecodeOrEncode('encode')"
      >解码</el-button
    >

    <el-input
      v-model="after"
      type="textarea"
      :rows="6"
      class="after"
      readonly
    ></el-input>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from '@vue/composition-api'
export default defineComponent({
  name: 'jsbase64',

  setup() {
    const before = ref('')
    const after = ref('')

    const handleDecodeOrEncode = (type: 'decode' | 'encode') => {
      // 编码 lowb b 意思就是普通字符
      // unescape(encodeURIComponent(str)) 对中文支持
      if (type === 'decode') {
        after.value = window.btoa(unescape(encodeURIComponent(before.value)))
      }
      // 解码
      // decodeURIComponent(escape(window.atob(str))) 对中文支持
      if (type === 'encode') {
        after.value = decodeURIComponent(escape(window.atob(before.value)))
      }
    }

    return {
      before,
      after,
      handleDecodeOrEncode,
    }
  },
})
</script>

<style lang="less" scoped>
.jsbase64 {
  margin: 0 auto;
  padding: 24px;
  width: 70vw;

  .title {
    font-weight: 600;
    font-size: 1.5em;
    margin-bottom: 8px;
  }

  .before {
    margin-bottom: 16px;
  }
  .after {
    margin-top: 16px;
  }
}
</style>
