<template>
  <div id='container'></div>
</template>

<script scoped>

import { Column } from '@antv/g2plot';

export default {
    name: 'Age',
    data() {
        return {
            //age:{"10":1,"20":3,"30":8,"40":5,"50":5,"60":5,"70":4}
            //该 数组为测试使用，之后接口定好，由接口请求数据传入空数组
            //age: []
            age: [
                {'age':'10', value: 1},
                {'age':'20', value: 3},
                {'age':'30', value: 8},
                {'age':'40', value: 5},
                {'age':'50', value: 5},
                {'age':'60', value: 5},
                {'age':'70', value: 4},
            ]
        }
    },
    mounted() {
        const columnPlot = new Column('container', {
        data: this.age,
        xField: 'age',
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
    }
}
</script>

<style>
    #container {
        width: 300px;
        height: 200px
    }
</style>