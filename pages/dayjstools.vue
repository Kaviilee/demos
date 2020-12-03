<template>
  <div class="dayjs-tools">
    <el-card header="dayjs tools">
      <div class="card-content">
        <p>当前时间: {{ now }}</p>
        <p>时间间隔: {{ date }} 天</p>
        <el-date-picker
          v-model="dateRange"
          type="daterange"
          class="picker"
          start-placeholder="开始日期"
          end-placeholder="结束日期"
        ></el-date-picker>
      </div>
    </el-card>
  </div>
</template>

<script lang="ts">
import {
  defineComponent,
  onMounted,
  onUnmounted,
  ref,
  watchEffect,
} from '@vue/composition-api'
import dayjs from 'dayjs'

export default defineComponent({
  setup() {
    const timeId = ref()
    const now = ref()
    const date = ref(0)
    const dateRange = ref([])

    onMounted(() => {
      timeId.value = setInterval(() => {
        now.value = dayjs().format('YYYY-MM-DD HH:mm:ss')
      }, 1000)
    })
    onUnmounted(() => {
      clearInterval(timeId)
    })

    watchEffect(() => {
      if (dateRange.value && dateRange.value.length) {
        const start = dateRange.value[0]
        const end = dateRange.value[1]
        date.value = dayjs(end).diff(dayjs(start), 'day')
      }
    })

    return {
      now,
      dateRange,
      date,
    }
  },
})
</script>

<style lang="less" scoped>
.dayjs-tools {
  padding: 24px;
  display: flex;
  justify-content: center;

  .card-header {
    width: 100%;
    text-align: center;
  }

  .picker {
    margin-top: 8px;
  }
}
</style>
