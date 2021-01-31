<template>
<div id='sex'>
  <div id='container'></div>
</div>
</template>

<script scoped>

import { Pie } from '@antv/g2plot'

export default {
    name:'Sex',
    data() {
        return {
            //{"female":19,"male":12}
            sex: [
            ]
        }
    },
    mounted() {

        this.$http.get("/good").then(res => {
           let sex = res.data.sex
            for(let i in sex) {
                let ob = {};
                ob.type = i;
                ob.value = sex[i];
                this.sex.push(ob);
            }
        }).then(() => {
              const piePlot = new Pie('container', {
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
              piePlot.render();
        });
      
    }
}
</script>

<style>
#container {
        width: 200px;
        height: 200px
    }
</style>