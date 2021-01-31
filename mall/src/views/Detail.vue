<template>
   <div id = 'detail'>
       <div class='goods'>
              <a-card hoverable style="width: 300px">
                <template slot="actions" class="ant-card-actions">
                <a-icon key="setting" type="setting" />
                <a-icon key="edit" type="edit" />
                <a-icon key="ellipsis" type="ellipsis" />
                </template>
                <a-card-meta title="Card title" description="This is the description">
                <a-avatar
                    slot="avatar"
                    src="../assets/head.jpg"
                />
                </a-card-meta>
            </a-card>

           <div class='consumers'>
              <Age/>
              <Consume/>
              <Sex/>
           </div>
            <Evaluation/>
            <div class='consult'></div>
            <div class='buyAfterconsult'></div>
       </div>
       <div class='store'>
           <div><img src='../assets/baobei.jpg'></div>
           <div><img src='../assets/shop.jpg'></div>
       </div>
    </div>
</template>

<script>

//商品的信息
import Age from '../components/goods/Age'
import Sex from '../components/goods/Sex'
import Consume from '../components/goods/Consume'
import Evaluation from '../components/goods/Evaluation'

//店铺的信息


export default {
    name: 'Detail',
     components: {
     Age,
     Sex,
     Consume,
     Evaluation,
  }
    
}
</script>

<style scoped>
    .good {
        display: flex;
        justify-content: space-between;

    }
    .consumers{
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;/*包裹，*/
        justify-content: space-around;/*均等分*/
        padding: 2px;
    }
    .consumers> {
        max-width: 200px;
        flex: 1;
    }
    .store {
        /* display: flex;
        justify-content: space-between; */
    }
</style>