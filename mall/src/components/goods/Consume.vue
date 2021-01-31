<template>
<div id='consume'>
  <div id='containerCon'></div>
</div>
</template>

<script>

import{ Pie } from '@antv/g2plot';

export default {
    name:'Consume',
    data() {
        return {
            //{"中高":5,"中等":18,"中低":8}
            consume: [
                {type: '中高', value: 5},
                {type: '中等', value: 18},
                {type: '中低', value: 8}
            ]
        }
    },
    mounted() {
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
    }
}
</script>
    
<style>
    #container {
      width: 300px;
      height: 200px
    }
</style>