<template>
  <div id='Earning'>
  </div>
</template>

<script>

import { Line } from '@antv/g2plot';

export default {
  name: 'Earning',
  data() {
    return {
      earn:[]
    }
  },
  mounted() {


const data = [
  { month: 'Jan', value: 14600 },
  { month: 'Feb', value: 32000},
  { month: 'Mar', value: 54333 },
  { month: 'Apr', value: 32200 },
  { month: 'May', value: 50000 },
  { month: 'Jun', value: 63000 },
  { month: 'Jul', value: 72300 },
  { month: 'Aug', value: 100020},
  { month: 'Sep', value: 92000 },
  { month: 'Oct', value: 82000 },
  { month: 'Nov', value: 92000 },
  { month: 'Dec', value: 62000 },
];

const line = new Line('Earning', {
  data,
  xField: 'month',
  yField: 'value',
  label: {},
  point: {
    size: 5,
    shape: 'diamond',
    style: {
      fill: 'white',
      stroke: '#5B8FF9',
      lineWidth: 2,
    },
  },
  tooltip: { showMarkers: false },
  state: {
    active: {
      style: {
        shadowBlur: 4,
        stroke: '#000',
        fill: 'red',
      },
    },
  },
  interactions: [{ type: 'marker-active' }],
});

line.render();

  }
}
</script>

<style scoped>

</style>