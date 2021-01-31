<template>
<div id='evaluation'>
  <div id='container'></div>
</div>
</template>

<script>

import { Pie } from '@antv/g2plot'

export default {
    name:'Evaluation',
    data() {
        return {
            
        }
    },
    mounted() {
       const data = [
                {type: '好评', value: 0.27},
                {type: '中评', value: 0.49},
                {type: '差评', value: 0.24}
                ];

        const piePlot = new Pie('container', {
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

        piePlot.render();
    }

}

</script>

<style scoped>
#container {
        width: 300px;
        height: 200px
    }
</style>