<template>
    <div class='home'>
        <div class="container">
        <label>
            <input type="text" placeholder="请输入商户ID">
        </label>
        <h3>请选择年报类型</h3>
        <div class="topview">
            <div class="item">
                <a href="#shop">
                    <img src="../assets//shop.jpg"/>
                    店铺
                </a>
            </div>
            <div class="item">
                <a href="#good">
                    <img src="../assets/baobei.jpg"/>
                    宝贝
                </a>
            </div>
            <div class="item">
                <a-button type="default" @click="ToInfo">Start</a-button>
            </div>

        </div>
    </div>
    <div class="container2" id="shop">
        <h3>请按顺序选择您需要展示的信息</h3>            
        <div class="subcontainer">
        <span class="waves btn">营业额</span>
        <span class="waves btn">最高销量宝贝</span>
        <span class="waves btn">消费者画像</span>
        <span class="waves btn">高销量top3</span>
        <span class="waves btn">好评top3</span>
        <span class="waves btn">低销量top3</span>
        <span class="waves btn">差评top3</span>
        </div>
    </div>
    <div class="container3" id="good">
        <h3>请按顺序选择您需要展示的信息</h3>
        <label>
            <span>请输入商品的ID:</span><input type="text" placeholder="6位数以内的数字">
        </label>
        <div class="subcontainer">
        <span class="waves btn">销售量</span>
        <span class="waves btn" >消费者画像</span>
        <span class="waves btn">咨询量</span>
        <span class="waves btn">咨询后买单</span>
        <span class="waves btn">评价词云</span>
        </div>
    </div>
    </div>
</template>

<script>


export default {
  name: 'Home',
  components: {
    },
  mounted() {
    //   this.$http.get("/good").then(res => {
    //     console.log(res.data);
    // });
  },
  methods: {
      ToInfo() {
          this.$router.push('/info');
        },
  }
    
}
</script>

<style>
    .home{
        color: #FF5300;
        background: rgba(231, 230, 230,1);
    }
    .container{
        margin: 64px;
        text-align: center;
    }

    .container2{
        text-align: center;

    }
    input{
        border: none;
        border-bottom:1px solid  #FF5300;
        background: inherit;
        text-align: center;
    }

    .item >a{
        padding: 8px;
        display: flex;
        flex-direction: column;
    }

    .item >a >img{
        border: 3px solid #FF5300;
        border-radius: 10px;
        width: 56px;
        padding: 16px;
    }
    .topview{
        display: flex;
        justify-content: space-around;
    }

    .subcontainer{
        display: grid;
        grid-template-columns: 25% 25% 25% 25%;
    }

    .subcontainer > span{
        margin: 50px;
        padding: 16px;
    }

    .container3{
        text-align: center;
    }
    .container3 > span{
        border-radius: 3px;
    }
    a{
        text-decoration: none;
        color: inherit;
    }
    .waves{
    position:relative;
    cursor:pointer;
    display:inline-block;
    overflow:hidden;
    text-align: center;
    -webkit-tap-highlight-color:transparent;
    z-index:1;
}
    input{
        width:200px;
        height: 48px;
        outline: none;
    }

    .waves {
  position: relative;
  overflow: hidden;
  border:3px solid #FF5300;
  border-radius: 10px;
}

.waves:after {
  content: '';
  display: block;
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  pointer-events: none;
  background-image: radial-gradient(circle, #fff 10%, transparent 10.01%);
  background-repeat: no-repeat;
  background-position: 50%;
  transform: scale(10, 10);
  opacity: 0;
  transition: transform 0.3s, opacity 0.6s;
}

    .waves:active:after {
    transform: scale(0, 0);
    opacity: 0.2;
    transition: 0s;
    }

    .select{
        border: 3px solid white;
        border-radius: 10px;
    }
</style>