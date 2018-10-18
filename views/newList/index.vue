<template>
    <div class="new-wrap">
      <HeaderChild></HeaderChild>
      <div class="new-list">
          <div class="new-item">
              <router-link to="/newDetail" class="new-link">
                 <div class="new-left">
                     <img src="@/public/imgs/new/01.png" alt="">
                 </div>
                 <div class="new-right">
                     <div class="right-first">
                         <h3>信息工程学院举办道德讲堂-母亲节励志感恩教育活动</h3>
                     </div>
                     <div class="right-second">
                         <div class="second-left">
                             <span>2018-05-29</span>
                             <span>17:21:09</span>
                         </div>
                         <div class="second-right">
                             <img src="@/public/imgs/icon/eye.png" alt="">
                             <span>1213</span>
                         </div>
                     </div>
                 </div>
              </router-link>
          </div>
      </div>
      <div class="new-footer">没有更多数据了</div>
    </div>
</template>

<script>
    import HeaderChild from "@/components/HeaderChild/index"
    export default {
        name:'newList',
        components:{
            HeaderChild
        }
    }
</script>

<style scoped lang="scss">
    .new-wrap{
        padding-top:0.88rem;
        .new-list{
            .new-item{
                border-bottom: solid 0.02rem #e1e1e1;
                
            }
            .new-item .new-link{
                padding:0.2rem;
                display:flex;
                justify-content:space-between;
                .new-left img{
                    width:1.6rem;
                    height:1.6rem;
                    margin-right:0.2rem;
                    display:block;
                }
                .new-right{
                    display:flex;
                    flex-direction:column;
                    justify-content:space-between;
                    height:1.6rem;
                }
                .new-right .right-first h3{
                    font-size:0.32rem;
                    font-weight:500;
                    color:#333;
                }
                .new-right .right-second{
                    display:flex;
                    justify-content:space-between;
                    align-items:flex-end;
                }
                .new-right .right-second .second-left{
                    font-size:0.24rem;
                    color:#333;
                }
                 .new-right .right-second .second-right {
                 
                    img{
                        padding-top:0.2rem
                        // display:block;
                    }
                    span{
                       font-size:0.24rem;
                       color:#333;
                    }
                }
            }
        }
        .new-footer{
            width:100%;
            font-size:0.28rem;
            line-height:0.8rem;
            text-align:center;
        }
        
    }

</style>