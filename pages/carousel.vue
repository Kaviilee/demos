<template>
    <div class="carousel">
        <template v-for="img in imgs">
            <img :key="img" class="image" :src="img" :alt="img" />
        </template>
    </div>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api'

export default defineComponent({
    setup() {
        const host: string =
            'https://cdn.jsdelivr.net/gh/Kaviilee/cdn@1.14/blog/images/custom/cover'
        const imgs: string[] = [
            `${host}/wallhaven-kwjg5m.jpg`,
            `${host}/wallhaven-r2k7wm.png`,
        ]

        return {
            imgs,
        }
    },
})
</script>

<style lang="less" scoped>
.carousel {
    max-height: 100vh;
    overflow: hidden;

    .image {
        max-width: 100%;
    }
}
</style>
