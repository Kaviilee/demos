<template>
    <div class="flex-box" :style="[{ flexDirection: activeDir }]">
        <div
            v-for="(img, index) in images"
            :key="img.title"
            :title="img.title"
            class="item"
            :class="[
                { 'active-item': activeKey === img.title },
                `item${index + 1}`,
            ]"
            @click="handleClick(img.title)"
        >
            <p class="index">{{ img.key }}</p>
        </div>
        <div class="tools">
            <p>
                <span
                    >direction:
                    <a
                        v-for="dir in directions"
                        :key="dir"
                        class="action"
                        @click="handleDirClick(dir)"
                        >{{ dir }}</a
                    >
                </span>
            </p>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent, ref } from '@nuxtjs/composition-api'

export default defineComponent({
    setup() {
        const activeKey = ref('item1')
        const activeDir = ref('row')
        const images = [
            {
                title: 'Akali',
                key: 'I',
            },
            { title: 'Ahri', key: 'II' },
            { title: 'all', key: 'III' },
            { title: 'Evelynn', key: 'IV' },
            { title: 'KaiSa', key: 'V' },
        ]
        const directions = ['row', 'row-reverse', 'column', 'column-reverse']

        const handleClick = (key: string) => {
            if (activeKey.value === key) {
                activeKey.value = ''
            } else {
                activeKey.value = key
            }
        }

        const handleDirClick = (dir: string) => {
            activeDir.value = dir
        }

        return {
            handleClick,
            activeKey,
            images,
            directions,
            activeDir,
            handleDirClick,
        }
    },
})
</script>

<style lang="less" scoped>
@images: '~assets/images/ahri.jpg', '~assets/images/akali.jpg',
    '~assets/images/wallhaven-kwmood.jpg', '~assets/images/evelynn.jpg',
    '~assets/images/kaisa.jpg';
@colors: #cc9999, #ff9966, #cc3333, #cc9966, #cccc00;

.flex-box {
    .tools {
        position: fixed;
        width: 100%;
        height: 3em;
        text-align: center;
        color: #fff;
        margin-top: 4px;
        top: 0;

        .action {
            cursor: pointer;
            margin-right: 4px;

            &:hover {
                color: #cc0;
            }
        }
    }

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
        cursor: pointer;
        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        transition: font-size 0.2s cubic-bezier(0.61, -0.19, 0.7, -0.11),
            flex 0.2s cubic-bezier(0.61, -0.19, 0.7, -0.11), background 0.2s;
    }
    .active-item {
        flex: 3;
        font-size: 40px;
    }
    .index {
        font-size: 4em;
        color: #fff;
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
