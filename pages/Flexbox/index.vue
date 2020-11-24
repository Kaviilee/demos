<template>
  <div class="flex-box">
    <div
      key="item1"
      class="item"
      :class="{ 'active-item': activeKey === 'item1' }"
      @click="handleClick('item1')"
    ></div>
    <div
      key="item2"
      class="item"
      :class="{ 'active-item': activeKey === 'item2' }"
      @click="handleClick('item2')"
    ></div>
    <div
      key="item3"
      class="item"
      :class="{ 'active-item': activeKey === 'item3' }"
      @click="handleClick('item3')"
    ></div>
    <div
      key="item4"
      class="item"
      :class="{ 'active-item': activeKey === 'item4' }"
      @click="handleClick('item4')"
    ></div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from '@vue/composition-api'

export default defineComponent({
  setup() {
    const activeKey = ref('item1')

    const handleClick = (key: string) => {
      activeKey.value = key
    }

    return {
      handleClick,
      activeKey,
    }
  },
})
</script>

<style lang="less" scoped>
.flex-box {
  display: flex;
  height: 100vh;
  width: 100vw;
  .item {
    flex: 1;
    border: 1px solid #000;
  }
  .active-item {
    flex: 3;
  }
}
</style>
