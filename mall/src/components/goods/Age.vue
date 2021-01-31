<template>
<div>
  <div id='containerAge'></div>
</div>
</template>

<script scoped>

import { Column } from '@antv/g2plot';

export default {
    name: 'Age',
    data() {
        return {
            age: []
        }
    },
    created() {
       
    },
    mounted() {
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
        })
    }
}
</script>

<style>
    #container {
        width: 300px;
        height: 200px
    }
</style>