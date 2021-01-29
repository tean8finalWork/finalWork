<template>
  <div id="canvas"></div>
</template>
<script>
import { Line } from '@antv/g2plot'
export default {
  data () {
    return {
      mockData: [
        { year: '1991', value: 3 },
        { year: '1992', value: 4 },
        { year: '1993', value: 3.5 },
        { year: '1994', value: 5 },
        { year: '1995', value: 4.9 },
        { year: '1996', value: 6 },
        { year: '1997', value: 7 },
        { year: '1998', value: 9 },
        { year: '1999', value: 13 }
      ]
    }
  },
  mounted() {
    const linePlot = new Line('canvas', {
      data: this.mockData,
      xField: 'year',
      yField: 'value'
    })
    linePlot.render()
  }
}
</script>