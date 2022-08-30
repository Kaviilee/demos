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
                <div class="current-time">{{ now }} {{ `第 ${week} 周` }}</div>
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
                    <span class="item">间隔天数: {{ daysbetween }} 天</span>
                    <span>间隔月数: {{ monthsbetween }} 月</span>
                </div>

                <div class="is-leap">
                    <span class="label">是否为闰年</span>
                    <el-input
                        v-model="year"
                        size="small"
                        :style="{ width: '250px' }"
                        placeholder="请输入年份"
                    ></el-input>
                    <span v-show="year" class="description">{{
                        isLeap ? `是闰年` : '不是闰年'
                    }}</span>
                </div>

                <div class="relative"></div>
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
    computed,
} from '@nuxtjs/composition-api'
import dayjs from 'dayjs'
import isLeapYear from 'dayjs/plugin/isLeapYear'
import weekOfWeek from 'dayjs/plugin/weekOfYear'
dayjs.extend(isLeapYear)
dayjs.extend(weekOfWeek)

export default defineComponent({
    setup() {
        // 计时器id
        let timeId: number
        // 当前时间
        const now = ref()
        // 间隔天数
        const daysbetween = ref(0)
        // 间隔月数
        const monthsbetween = ref(0)
        // 时间间隔
        const dateRange = ref([])
        // 闰年输入
        const year = ref('')

        const isLeap = computed(() => dayjs(year.value).isLeapYear())

        const week = dayjs().week()

        onMounted(() => {
            timeId = window.setInterval(() => {
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
                daysbetween.value = end.diff(start, 'day')
                monthsbetween.value = end.diff(start, 'month')
            } else {
                daysbetween.value = 0
                monthsbetween.value = 0
            }
        })

        return {
            now,
            dateRange,
            daysbetween,
            monthsbetween,
            year,
            isLeap,
            week,
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
        .is-leap {
            margin-top: 16px;
            display: flex;
            align-items: center;

            .description {
                margin-left: 8px;
            }
        }
    }

    .picker {
        margin: 8px 16px 0 0;
    }
}
</style>
