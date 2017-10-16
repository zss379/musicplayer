<template>
<div>
<div v-for="message in messages">
<div class="goods">
	<video v-bind:src="message.src1" width="100%" height="500"></video>
	<span v-on:click="changeVideo()"><i>></i></span>
</div>
</div>
</div>
</template>

<script type="text/javascript">
	export default {
		name: 'goods',
		data () {
			return {
				messages : [
                { src1 : "../assets/Mayjlee1.mp4"},
                { src1 : "../assets/Mayjlee2.mp4"}
				]
			}
		},
		methods: {
			changeVideo: function () {

				var getSpan = document.getElementsByTagName("video");
                for(let i =0; i < getSpan.length; i++) {
                	if (getSpan[i].paused) {
                		getSpan[i].play();
                		getSpan[i].display = "none";
                	}else{
                		getSpan[i].pause();
                		getSpan[i].display = "block";
                	}
                }
			}
		}
	}
</script>

<style type="text/css">
	.goods {
		margin-top: 20px;
		position: relative;
	}
    
    .goods span {
    	position: absolute;
    	top: 0px;
    	left: 0px;
    	width: 100%;
    	height: 70%;
    	font-size: 140px;
    	padding-top: 150px;
    	color: white;
    	background-color: #6c6c6c;
    	opacity: 0.5;
    	display: block;
    }

    .goods i {
    	display: inline-block;
    	width: 150px;
    	height: 150px;
    	border: 5px solid white;
    	border-radius: 80px;
    }
</style>