<template>
    <div class="user-wrap">
        <HeaderChild ref="head"></HeaderChild>
        <form action="" method="post" class="user-info">
            <div class="info-item">
                <span>头像</span>
                <input type="text" class="text"/>
            </div>
             <div class="info-item">
                <span>姓名</span>
               
                <input type="text" class="text"/>
            </div>
            <div class="info-item">
                <span>身份证</span>
                <input type="text" class="text"/>
            </div>
             <div class="info-item">
                <span>家庭住址</span>
                <input type="text" class="text"/>
            </div>
             <div class="info-item">
                <span>民族</span>
                <input type="text" class="text"/>
            </div>
             <div class="info-item">
                <span>微信号</span>
                <input type="text" class="text"/>
            </div>
             <div class="info-item">
                <span>qq号</span>
                <input type="text" class="text"/>
            </div>
            <div class="info-item">
                <span>性别</span>
                <div>
                     <span>男</span>
                     <input type="radio" name="sex"  value="1" class="text"/> 
                     <span>女</span>
                    <input type="radio" name="sex" value="2" class="text"/>
                </div>
              
            </div>
             <div class="info-item">
                <span>最高学历</span>
                <input type="text" class="text"/>
            </div>
             <div class="info-item">
                <span>职称</span>
                <input type="text" class="text"/>
            </div>
             <div class="info-item">
                <span>薪资水平</span>
                <input type="text" class="text"/>
            </div>
            <div class="info-item">
                <span>入党时间</span>
                <input type="date" class="text"/>
            </div>
            <div class="info-item">
                <span>党费最后缴纳时间</span>
                <input type="date" class="text"/>
            </div>
            <div class="info-item">
                <span>当前身份</span>
                <select name="partyForm">
                    <option value="1">党员</option>
                    <option value="2">预备党员</option>
                    <option value="3">积极分子</option>
                </select>
            </div>
        </form>
        
    </div>
</template>

<script>
import HeaderChild from "@/components/headerChild/index";
export default {
  name: "userInfo",
  components: {
    HeaderChild
  },
  data() {
    return {
      text: "个人信息",
      formData:{
          formitem:{
              name:'姓名',
              identify:'身份证',
              homeAdress:'',
              workAdress:'',
              nation:'',
              wxID:'',
              qqID:'',
              sex:'',
              edu:'',
              position:'',
              salaryLevel:'',
              
          },
          formData:{

          }
      }
    };
  },
  created() {
    // this.getData();
  },
  mounted() {
    this.$nextTick(() => {
      this.getHead();
    });
  },
  methods: {
    getHead() {
      this.$refs.head.$refs.title.innerHTML = this.text;
    }
    // getData(){
    //     this.$axios.get('/proxy/proxy.do?url=http:%2F%2Fcpc.people.com.cn%2FGB%2F64162%2F64165%2F70486%2F70506%2Findex.html').then(res=>{
    //         console.log(res);
    //         this.html=res
    //     })
    // }
  }
};
</script>

<style scoped lang="scss">
.user-wrap {
  padding-top: 0.88rem;
  .user-info {
    .info-item {
      display: flex;
      justify-content: space-between;
      font-size: 0.28rem;
      padding:0.32rem;
      border: 0.02rem solid rgb(221,221,221);
    }
  }
   .user-info  .info-item  .text{
       border: 0.04rem solid rgb(255,255,255);
       direction:rtl;
       outline:none;
      
   }
}
</style>

