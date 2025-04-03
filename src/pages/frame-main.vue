<template>
    <div class="layout">
        <a-layout>
            <a-layout-header> 111 </a-layout-header>
            <a-layout>
                <a-layout-content>
                    <div style="padding: 20px">
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

.layout :deep(.arco-layout-sider) {
    width: 206px;
    height: 100%;
}

.layout :deep(.arco-layout-has-sider) {
    height: calc(100% - 54px);
}

.layout :deep(.arco-layout-header) {
    height: 54px;
    border-bottom: 1px solid #e5e6eb;
}

.layout :deep(.arco-layout-content) {
    overflow: auto;
    background: #f2f3f5;
}

a.change:link,
a.change:visited {
    color: #000;
}

a.change:hover {
    color: #06f;
}
</style>
