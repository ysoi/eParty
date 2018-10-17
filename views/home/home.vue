<template>
    <div class="home-wrap">
        <MyHead></MyHead>
        <div class="swiper">
            <mt-swipe 
            :auto="4000" 
            :show-indicators="true"
            :continuous="true"
            >
                <mt-swipe-item><img src="@/public/imgs/swiper/01.png" alt=""/></mt-swipe-item>
                <mt-swipe-item><img src="@/public/imgs/swiper/02.png" alt=""/></mt-swipe-item>
                <mt-swipe-item><img src="@/public/imgs/swiper/03.png" alt=""/></mt-swipe-item>
                <mt-swipe-item><img src="@/public/imgs/swiper/04.png" alt=""/></mt-swipe-item>
            </mt-swipe>
        </div>
        <div class="choose">
            <div class="menu">
                <div>
                    <router-link to="/login">
                        <div class="item">
                            <img src="@/public/imgs/choose/01.png" alt="">
                            <span>信工新闻眼</span>
                        </div>
                    </router-link>
                </div>
                <div>
                    <router-link to="/login">
                        <div class="item">
                            <img src="@/public/imgs/choose/02.png" alt="">
                            <span>掌上组生活</span>
                        </div>
                    </router-link>
                </div>
                <div>
                    <router-link to="/login">
                        <div  class="item">
                            <img src="@/public/imgs/choose/03.png" alt="">
                            <span>党员云互动</span>
                        </div>
                    </router-link>
                </div>
            </div>
            <div class="menu">
                <div>
                    <router-link to="/login">
                        <div  class="item">
                            <img src="@/public/imgs/choose/04.png" alt="">
                            <span>党员一点通</span>
                        </div>
                    </router-link>
                </div>
                <div>
                    <router-link to="/login">
                        <div  class="item">
                            <img src="@/public/imgs/choose/05.png" alt="">
                            <span>党员亮身份</span>
                        </div>
                    </router-link>
                </div>
                <div>
                    <router-link to="/login">
                        <div  class="item">
                            <img src="@/public/imgs/choose/06.png" alt="">
                            <span>党史上今天</span>
                        </div>
                    </router-link>
                </div>
            </div>
        </div>
       
        <div class="mark"><img src="@/public/imgs/party/01.png" alt=""></div>
        <div class="column">
            <div class="item"></div>
            <div class="item">
                <router-link to="/login" class="itme-top"></router-link>
                 <router-link to="/login" class="item-bottom"></router-link>
            </div>
             <div class="item">
                <router-link to="/login" class="itme-top"></router-link>
                 <router-link to="/login" class="itme-top"></router-link>
            </div>
        </div>
        <TabBar></TabBar>
    </div>
</template>

<script>
import MyHead from "../../components/header/header.vue";
import TabBar from "@/components/footer/footer";
export default {
  name: "home",
  components: {
    MyHead,
    TabBar
  }
};
</script>

<style scoped lang="scss">
.home-wrap {
     padding-top:0.88rem;
   padding-bottom:1.1rem;
  .swiper {
    height: 4.7rem;
    width: 100%;
  }
  .choose{
        background-image:url("../../public/imgs/backURL/01.png");
        background-size:cover;
      
        
  }
  .mark{
      img{
          width:100%;
          height:1.8rem;
          //消除图片的白边
          display:block;
      }
      margin-bottom:0;
  }
  //背景图布局
  .column{
      margin-top:0;
      width:100%;
      height:3.2rem;
      background-image:url("../../public/imgs/column/01.png");
      background-size:100% 3.2rem;
      display:flex;
     
      .itme{
         flex:1;
      }
    //   .middle-right{
    //       display:flex;
    //       flex-direction:column;
    //       flex:1;
    //   }
    
  }
  .choose .menu {
    padding:0.2rem 0;
    display: flex;
    //换行 这是flex-flow是flex-decoration和flex-wrap
    flex-flow: row nowrap;
    justify-content: space-around;

    //交叉轴上如何对齐
    // align-items: center;
    //多根轴线对齐方式
    // align-content:space-around;
    //项目占据主轴的大小；
    // flex-basis:7rem;
    .item {
    //   width:2.6rem;
      display:flex;
      flex-direction: column;
      
      justify-content: space-around;
    //   text-align:center;
      img {
        width: 1rem;
        height: 1rem;
      }
      span {
         display:inline-block;
         text-align:center;
        font-size: 0.2rem;
      }
    }
  }
}
</style>