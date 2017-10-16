s<template>
<div class="vheader">
	<img src="./assets/bgp.jpg">
    <input type="text" name="" placeholder="搜索音乐 , 视频 , 歌词 , 电台" v-on:click="addSeacher">
</div>
</template>

<script type="text/javascript">
	export default {
		name: 'goods',
		data () {
           return {

           }
		},
		methods: {
			addSeacher: function () {
				console.log("111");
				console.log("2222");
			}
		}
	}
</script>

<style>
    h1 {
    	font-size: 80px;
    }
	.vheader {
		height: 150px;
		width: 100%;
		position: relative;
	}

	.vheader img {
		height: 150px;
		width: 100%;
		margin: 0px;
		padding: 0px;
	}

	input {
		width: 70%;
		height: 80px;
		font-family: "黑体";
		font-size: 30px;
		padding-left: 35px;
		margin-left: 45px;
		position: absolute;
		top: 40px;
		left: 100px;
		border-radius: 45px;
		outline: none;
	}
</style>