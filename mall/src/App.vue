<template>
<div>
  <div id="app">
    <div><Age/></div>
    <div><Consume/></div>
    <div><Test/></div>
    <div><Sex/></div>
  </div>
  <router-view/>
</div>
</template>

<script>

import Test from './components/Test'
import Age from './components/Age'
import Sex from './components/Sex'
import Consume from './components/Consume'

export default {
  name: 'App',
  components: {
    Age,
    Sex,
    Test,
    Consume
  }

}
</script>

<style>
  #app {
    display:flex;
    justify-content: flex-start; 
    flex-direction: row;
  }
</style>
