<template>
   <div class="container">
     <div class="leftPanel">
     </div>
     <div class="rightPanel" >
        <h1 color="FF5300">淘沙年报</h1>
        <h3 @click='ToInfo'>为您在线生成定制年报</h3>
        <div class='a' @click='ToDetail'>现在开始</div>
     </div>
    </div>
</template>

<script>
export default {
    name:'Start',
    methods: {
        ToDetail() {
            this.$router.push('/home')
        },
        ToInfo() {
            this.$router.push('/info')
        }
    }
}
</script>

<style scpoed>
 *{padding: 0; margin: 0; box-sizing: border-box;}
    *::after, *::before{box-sizing: boder-box;}
    .a{
        text-underline-offset: none;
        cursor:pointer;
    }
    body{
      background: rgba(231,230,230, 1);  
    }
    .container{
        display: flex;
    }

    .leftPanel{
        width: 50%;
        min-height: 500px;
    }
    .rightPanel{
        width: 50%;
        text-align: center;
        position: relative;
        right:0;
    }
    .rightPanel > h1{
        color: #FF5300;
        padding: 60px;
    }
    .rightPanel > h3, .a{
        color: #FF8600;
        margin-bottom: 48px;
    } 

    .rightPanel >.a{
        font-size: 28px;
        text-decoration: none;
    }

    .rightPanel >.a:hover{
        padding: 4px;
        border-radius: 4px;
    }
</style>