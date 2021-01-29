<template>
  <div id='container'></div>
</template>

<script scoped>

import { Pie } from '@antv/g2plot'

export default {
    name:'Sex',
    data() {
        return {
            //{"female":19,"male":12}
            sex: [
                {'sex': 'male', value: 12},
                {'sex': 'femail', value: 19}
            ]
        }
    },
    mounted() {
        const piePlot = new Pie('container', {
            appendPadding: 10,
            data: this.sex,
            angleField: 'value',
            colorField: 'sex',
            radius: 0.8,
            label: {
                type: 'outer',
            },
            interactions: [{ type: 'element-active' }],
        });
        piePlot.render();
    }
}
</script>

<style>
#container {
        width: 300px;
        height: 200px
    }
</style>