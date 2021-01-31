<template>
  <div class='goods'>
           <div class='conTitle'>购买此商品的消费者信息</div>
           <div class='consumers lay'>
              <div id='containerAge'>年龄比</div>
              <div id='containerCon'>消费水平</div>
              <div id='containerSex'>性别比</div>
           </div>
           <div class='conTitle'>评价 and 销量</div>
           <div class='otherInfo lay'> 
             <div id='containerEva'>评价</div>
             <div id='soldNumber'>近年销量</div>
             <div id='buyAfterConsult'>咨询后购买率</div>

           </div>
           <div class='conTitle'>评论</div>
           <Comment/> 
    </div>
</template>

<script>

import Comment from './Comment'

import{ Pie } from '@antv/g2plot';
import { Column } from '@antv/g2plot';
import { Line } from '@antv/g2plot';
import { Liquid } from '@antv/g2plot';

export default {
    name:'Good',
    components: {
        Comment
    },
    data() {
    return  {
      age:[],
      consume: [
                {type: '中高', value: 5},
                {type: '中等', value: 18},
                {type: '中低', value: 8}
            ],
      sex: [],

    }
  },
  methods: {
  },
  mounted() {
        //由于封装成组件，布局一直弄不好，因此这里就集中到一起，后期再拆解封装
        
        // 年龄比
         this.$http.get("/good").then(res => {
            console.log(res.data.age);
            this.age = [...res.data.age]
        }).then( () => {
            const columnPlot = new Column('containerAge', {
                data: this.age,
                xField: 'type',
                yField: 'value',
                label: {
                    // 可手动配置 label 数据标签位置
                    position: 'middle', // 'top', 'bottom', 'middle',
                    // 配置样式
                    style: {
                    fill: '#FFFFFF',
                    opacity: 0.6,
                    content:'age'
                    },
                },
                xAxis: {
                    label: {
                    autoHide: true,
                    autoRotate: false,
                    },
                },
                meta: {
                    age: {
                    alias: '年龄段',
                    },
                    value: {
                    alias: '购买人数',
                    },
                },
                });
                columnPlot.render();
        });

        // 消费能力占比
        const piePlot = new Pie('containerCon', {
            appendPadding: 10,
            data: this.consume,
            angleField: 'value',
            colorField: 'type',
            radius: 0.8,
            label: {
                type: 'outer',
            },
            interactions: [{ type: 'element-active' }],
                            });
        piePlot.render();

        //性别比
        this.$http.get("/good").then(res => {
           let sex = res.data.sex
            for(let i in sex) {
                let ob = {};
                ob.type = i;
                ob.value = sex[i];
                this.sex.push(ob);
            }
        }).then(() => {
              const piePlotSex = new Pie('containerSex', {
                    appendPadding: 10,
                    data:this.sex,
                    angleField: 'value',
                    colorField: 'type',
                    radius: 0.8,
                    label: {
                        type: 'outer',
                    },
                    interactions: [{ type: 'element-active' }],
                });
              piePlotSex.render();
        });

        //评价
         const data = [
                {type: '好评', value: 0.27},
                {type: '中评', value: 0.49},
                {type: '差评', value: 0.24}
                ];

        const piePlotEav = new Pie('containerEva', {
                appendPadding: 10,
                data,
                angleField: 'value',
                colorField: 'type',
                radius: 0.8,
                label: {
                    type: 'outer',
                },
                interactions: [{ type: 'element-active' }],
          })
           piePlotEav.render();
          //销量
          const lineSold = new Line('soldNumber', {
                data: [
                        {
                            "Date": "2016",
                            "sales": 50
                        },
                        {
                            "Date": "2017",
                            "sales": 120
                        },
                        {
                            "Date": "2018",
                            "sales": 78
                        },
                        {
                            "Date": "2019",
                            "sales": 203
                        },
                        {
                            "Date": "2020",
                            "sales": 140
                        },],
                padding: 'auto',
                xField: 'Date',
                yField: 'sales',
                xAxis: {
                    tickCount: 5,
                },
                smooth: true,
                });

          lineSold.render();

          //咨询后购买率
            const liquidPlot = new Liquid('buyAfterConsult', {
                percent: 0.25,
                outline: {
                    border: 4,
                    distance: 8,
                },
                wave: {
                    length: 128,
                },
            });
            liquidPlot.render();
    }  
}
</script>

<style scoped>
    .lay{
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;/*包裹，*/
        justify-content: space-around;/*均等分*/
        padding: 2px;
    }
    .lay>div{
        max-width: 300px;
        min-width: 300px;
        height: 200px;
    }
    .conTitle {
        font-size: 18px;
        color: orange;
        text-align: center;
        margin-top: 35px;
        margin-bottom: 35px;
    }
    
</style>