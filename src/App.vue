<template>
  <div id="app">
    <vheader></vheader>
    <div class="content">
      <router-link to="/"><span v-bind:class="{ showStyle: messages[0].isshowStyle }" v-on:click="changeStyle1">{{ messages[0].message }}</span></router-link>
      <router-link to="/video"><span v-bind:class="{ showStyle: messages[1].isshowStyle }" v-on:click="changeStyle2">{{ messages[1].message }}</span></router-link>
      <router-link to="/radio"><span v-bind:class="{ showStyle: messages[2].isshowStyle }" v-on:click="changeStyle3">{{ messages[2].message }}</span></router-link>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
import vheader from './Vheader.vue'
export default {
  name: 'app',
  components: { vheader },
  data () {
    return {
       messages: [
         {
          message: "音乐",
          isshowStyle: true
         },
         {
          message: "视频",
          isshowStyle: false
         },
         {
          message: "电台",
          isshowStyle: false
         }
       ]
    }
  },
  methods: {
    changeStyle1: function () {
      for(let i = 0; i < 3; i++) {
        this.messages[i].isshowStyle = false;
      }
      this.messages[0].isshowStyle = true;
    },
    changeStyle2: function () {
      for(let i = 0; i < 3; i++) {
        this.messages[i].isshowStyle = false;
      }
      this.messages[1].isshowStyle = true;
    },
    changeStyle3: function () {
      for(let i = 0; i < 3; i++) {
        this.messages[i].isshowStyle = false;
      }
      this.messages[2].isshowStyle = true;
    }
  }
}
</script>

<style>
body {
  margin: 0px;
  background-color: #fcfcfc;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.content{
  height: 90px;
  display: flex;
  justify-content: space-between;
  padding-top: 10px;
}

.content a {
  font-size: 42px;
  font-family: "黑体";
  color: #272727;
  text-decoration: none;
  margin-left: 120px;
  margin-right: 120px;
}

span{
  width: 100%;
  height: 85px;
  display: block;
}

.showStyle {
  color: #548c00;
  border-bottom: 2px solid #467500;
}
</style>
