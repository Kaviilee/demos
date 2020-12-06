<template>
  <div class="dayjs-tools">
    <el-card class="card">
      <div slot="header" class="card-header">
        <div>
          <a href="https://day.js.org/zh-CN/" target="_blank">
            <img
              src="~/assets/images/dayjslogo.png"
              alt="dayjslogo"
              width="34"
              height="34"
            />
          </a>
          <span class="title">DAY.JS Tools</span>
        </div>
        <div class="current-time">{{ now }}</div>
      </div>
      <div class="card-content">
        <div class="time-between">
          <span class="label">时间间隔</span>
          <el-date-picker
            v-model="dateRange"
            type="daterange"
            class="picker"
            size="small"
            start-placeholder="开始日期"
            end-placeholder="结束日期"
          ></el-date-picker>
          <span class="item">间隔天数: {{ date }} 天</span>
          <span>间隔月数: {{ month }} 月</span>
        </div>
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
    const month = ref(0)
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
        const start = dayjs(dateRange.value[0])
        const end = dayjs(dateRange.value[1])
        date.value = end.diff(start, 'day')
        month.value = end.diff(start, 'month')
      } else {
        date.value = 0
        month.value = 0
      }
    })

    return {
      now,
      dateRange,
      date,
      month,
    }
  },
})
</script>

<style lang="less" scoped>
.dayjs-tools {
  padding: 24px;
  display: flex;
  justify-content: center;

  .card {
    width: 70%;
  }

  .card-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    .title {
      margin-left: 8px;
      font-weight: 600;
    }
  }

  .card-content {
    .label {
      position: relative;
      margin-right: 8px;
      &::after {
        content: ':';
        position: absolute;
        top: 0;
      }
    }
    .time-between {
      .item {
        margin-right: 16px;
      }
    }
  }

  .picker {
    margin: 8px 16px 0 0;
  }
}
</style>
