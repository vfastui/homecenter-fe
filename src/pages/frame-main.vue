<template>
    <div class="layout">
        <a-layout>
            <a-layout-header>
                <div class="main-content">
                    <a-menu mode="horizontal" theme="dark" :default-selected-keys="['1']">
                        <a-menu-item key="0" :style="{ padding: 0, marginRight: '38px' }" disabled>
                            <div class="logo">HomeCenter</div>
                        </a-menu-item>
                        <a-menu-item key="1">Home</a-menu-item>
                        <a-menu-item key="2">Solution</a-menu-item>
                        <a-menu-item key="3">Cloud Service</a-menu-item>
                        <a-menu-item key="4">Cooperation</a-menu-item>
                    </a-menu>
                </div>
            </a-layout-header>
            <a-layout>
                <a-layout-content>
                    <div class="main-content">
                        <router-view></router-view>
                    </div>
                </a-layout-content>
                <a-modal></a-modal>
            </a-layout>
        </a-layout>
    </div>
</template>
<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()
</script>
<style scoped>
h2 {
    padding: 13px 0 0 20px;
    margin: 0;
}

.layout,
.layout :deep(.arco-layout) {
    height: 100%;
}

/*
.layout :deep(.arco-layout-sider) {
    width: 206px;
    height: 100%;
}

.layout :deep(.arco-layout-has-sider) {
    height: calc(100% - 54px);
}
*/

.layout :deep(.arco-layout-header) {
    height: 59px;
    border-bottom: 1px solid #e5e6eb;
}

.layout :deep(.arco-layout-content) {
    overflow: auto;
    background: #f2f3f5;
}

.logo {
    width: 120px;
    color: #222;
    height: 30px;
    cursor: pointer;
    font-size: 18px;
    font-weight: 500;
}
</style>
