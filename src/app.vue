<template>
    <div class="app-container">
        <!-- 顶部 header 区域 -->
        <!-- 中间的 路由 router-view 区域 -->
        <!-- 底部 Tabbar 区域 -->
        <mt-header fixed title="vue的移动端案例"></mt-header>
        <nav class="mui-bar mui-bar-tab">
            <a class="mui-tab-item mui-active" href="#tabbar">
                <span class="mui-icon mui-icon-home"></span>
                <span class="mui-tab-label">首页</span>
            </a>
            <a class="mui-tab-item" href="#tabbar-with-chat">
                <span class="mui-icon mui-icon-contact"></span>
                <span class="mui-tab-label">会员</span>
            </a>
            <a class="mui-tab-item" href="#tabbar-with-contact">
                <span class=" mui-icon mui-icon-extra mui-icon-extra-cart"><span class="mui-badge">0</span></span>
                <span class="mui-tab-label">购物车</span>
            </a>
            <a class="mui-tab-item" href="#tabbar-with-map">
                <span class="mui-icon mui-icon-search"></span>
                <span class="mui-tab-label">搜索</span>
            </a>
        </nav>
        <h1>123</h1>
    </div>
</template>

<script>
</script>


<style lang="scss" scoped>
    .app-container{
        padding-top: 40px;
    }
</style>