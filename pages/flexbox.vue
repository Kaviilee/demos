<template>
  <div class="flex-box">
    <div
      v-for="(img, index) in images"
      :key="img.title"
      :title="img.title"
      class="item"
      :class="[{ 'active-item': activeKey === img.title }, `item${index + 1}`]"
      @click="handleClick(img.title)"
    ></div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from '@vue/composition-api'

export default defineComponent({
  setup() {
    const activeKey = ref('item1')
    const images = [
      {
        title: 'Akali',
        key: 'akali',
      },
      { title: 'Ahri', key: 'ahri' },
      { title: 'all', key: 'all' },
      { title: 'Evelynn' },
      { title: 'KaiSa' },
    ]
    const handleClick = (key: string) => {
      activeKey.value = key
    }

    return {
      handleClick,
      activeKey,
      images,
    }
  },
})
</script>

<style lang="less" scoped>
@images: '/flexbox/ahri.jpg', '/flexbox/akali.jpg', '/flexbox/evelynn.jpg',
  '/flexbox/wallhaven-kwmood.jpg', '/flexbox/kaisa.jpg';
@colors: #cc9999, #ff9966, #cc3333, #cc9966, #cccc00;

.flex-box {
  display: flex;
  height: 100vh;
  width: 100%;
  overflow: hidden;
  .item {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    background: #ececec;
    text-align: center;
    transition: font-size 0.2s cubic-bezier(0.61, -0.19, 0.7, -0.11),
      flex 0.2s cubic-bezier(0.61, -0.19, 0.7, -0.11), background 0.2s;
  }
  .active-item {
    flex: 3;
    font-size: 40px;
  }
  .loop(@data, @i: 1) when (@i =< length(@data)) {
    @item: extract(@data, @i);

    .item@{i} {
      background-image: url(@item);
      background-position: center;
      background-size: cover;
      // background: @item;
    }

    .loop(@data, (@i + 1));
  }

  .loop(@images);
  // .loop(@colors);
}
</style>
