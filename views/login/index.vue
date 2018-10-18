<template>
    <div class="login-wrap">
        <HeaderChild></HeaderChild>
        
        <div class="unique-img"><img src="../../public/imgs/logo.png" alt=""></div>
        <div class="login-form">
            <form action="" method="post">
                <input type="text" placeholder="身份证号">
                <input type="text" placeholder="密码">
                <mt-button type="primary" size="large" class="mt-button">登录</mt-button>
            </form>
        </div>
    
    </div>
</template>

<script>
import HeaderChild from "@/components/HeaderChild/index";
export default {
  name: "login",
  components: {
    HeaderChild
  }
};
</script>

<style scoped lang="scss">
    .login-wrap{
        padding-top:0.88rem;
        background:rgb(197,2,6);
        height:100vh;
        .unique-img {
          
            img{
                display:block;
                margin:0.6rem auto;
            }  

        }
        .login-form form{
            margin:0 0.64rem;
            input{
                width:100%;
                background:rgb(197,2,6);
                padding:0.1rem 0;
                height:0.67094rem;
                // margin-bottom:0.2rem;
                border:solid 0.02rem yellow;
                border-radius:0.08rem;
                color:#fff;
                font-size:0.28rem;
                font-weight:400;           
            }
            .mt-button{
                 margin-top:0.4rem;
            }
        }
    }
</style>