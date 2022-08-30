<template>
    <div class="container">
        <Logo></Logo>
        <div class="page-description">
            <em>Here are some demos.</em>
        </div>
        <el-card class="main">
            <div slot="header" class="header">进行中的项目</div>
            <el-row :gutter="24">
                <el-col v-for="demo in routes" :key="demo.name" :md="4">
                    <el-card class="item">
                        <nuxt-link :to="demo.path">{{ demo.name }}</nuxt-link>
                        <p v-show="demo.description" class="description">
                            {{ demo.description }}
                        </p>
                    </el-card>
                </el-col>
            </el-row>
        </el-card>
    </div>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'
import demoRoutes, { DemoRouteItem } from '@/configs/demoRoutes'

export default defineComponent({
    setup() {
        const routes: DemoRouteItem[] = demoRoutes

        return {
            routes,
        }
    },
})
</script>

<style lang="less" scoped>
.container {
    margin: 0 auto;
    min-height: 100vh;
    padding: 24px;
    text-align: center;

    .page-description {
        color: rgba(0, 0, 0, 0.85);
    }

    .main {
        min-width: 50%;
        margin-top: 24px;

        .header {
            text-align: left;
        }

        .description {
            font-size: 0.9em;
            color: rgba(0, 0, 0, 0.65);
        }

        // .item {
        // }
    }
}
</style>
