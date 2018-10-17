<template>
    <div class="footer-wrap">
        <mt-tabbar :fixed="true" selected.sync="selected">
          <mt-tab-item id="homePage">
              <img slot="icon" src="@/public/imgs/tabbar/party1.png" alt="">
              首页
          </mt-tab-item>
          <mt-tab-item id="newMessage">
              <img slot="icon" src="@/public/imgs/tabbar/message1.png" alt="">
              通知早知道
          </mt-tab-item>
          <mt-tab-item id="myPatry">
              <img slot="icon" src="@/public/imgs/tabbar/my1.png" alt="">
              我的党建
          </mt-tab-item>  
        </mt-tabbar>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped lang="scss">
    
</style>