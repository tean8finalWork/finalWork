<template>
  <a-layout id="components-layout-demo-custom-trigger">
    <a-layout-sider v-model="collapsed" :trigger="null" collapsible class='left'>
      <div class="logo">淘沙年报</div>
      <a-menu theme="dark" mode="inline" :default-selected-keys="['1']">
        <a-menu-item key="1" @click='ToGoods'>
          <img src='../assets/baobei.jpg'>
          <span class='info'>商品信息</span>
        </a-menu-item>
        <a-menu-item key="2" @click='ToStore'>
          <img src='../assets/shop.jpg'>
          <span class='info'>店铺信息</span>
        </a-menu-item>
      </a-menu>
    </a-layout-sider>
    <a-layout>
      <a-layout-header style="background: #fff; padding: 0">
        <a-icon
          class="trigger"
          :type="collapsed ? 'menu-unfold' : 'menu-fold'"
          @click="() => (collapsed = !collapsed)"
        />
      </a-layout-header>
      <a-layout-content
        :style="{ margin: '24px 16px', padding: '24px', background: '#fff', minHeight: '280px' }"
      >
        <router-view/>
      </a-layout-content>
    </a-layout>
  </a-layout>
</template>
<script>
export default {
  data() {
    return {
      collapsed: false,
    };
  },
  methods: {
      ToStore() {
          this.$router.push('/info/store');
      },
      ToGoods() {
          this.$router.push('/info')
      }
  }
};
</script>
<style scoped>
.left {
  position:fixed;
  z-index: 9;
}
img {
    width: 30px;
    height: 30px;
    border-radius:20%;
}
.info {
    margin-left: 20px
}
#components-layout-demo-custom-trigger .trigger {
  font-size: 18px;
  line-height: 64px;
  padding: 0 24px;
  cursor: pointer;
  transition: color 0.3s;
}

#components-layout-demo-custom-trigger .trigger:hover {
  color: #1890ff;
}

#components-layout-demo-custom-trigger .logo {
  font-size: 16px;
  text-align: center;
  color: #FF5300;
  background: rgba(0, 0, 0, 0.65);
  height: 40px;
  margin-top: 10px;
}
</style>
