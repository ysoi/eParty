<template>
    <div class="detail-wrap">
        <HeaderChild></HeaderChild>
        
    </div>
</template>

<script>
    import HeaderChild from "@/components/HeaderChild/index";
    export default {
        name:"articalDetail",
        components:{
            HeaderChild
        }
    }
</script>

<style scoped lang="scss">
    .detail-wrap{
        padding-top:0.88rem;
    }
</style>