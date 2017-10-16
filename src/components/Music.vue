<template>
<div class="music">
	<div id="showimage">
		<ul>
			<li><img src="../assets/1.jpg"></li>
			<li><img src="../assets/2.jpg"></li>
			<li><img src="../assets/3.jpg"></li>
		</ul>
	</div>
    <div id="listFirst">
		<p>推荐歌单<i>></i></p>
		<ul>
			<li><a href="../static/index1.html"><img src="../assets/eason.jpg"><span>陈奕迅的歌单</span></a></li>
			<li><a href="../static/index2.html"><img src="../assets/1m.jpg"><span>1m工作室舞曲</span></a></li>
			<li><a href="../static/index3.html"></a></li>
		</ul>
		<ul>
			<li><a href="../static/index4.html"></a></li>
			<li><a href="../static/index5.html"></a></li>
			<li><a href="../static/index6.html"></a></li>
		</ul>
	</div>
	<div id="listTwo">
		<p>最新音乐<i>></i></p>
		<ul>
			<li><a href="../static/index7.html"></a></li>
			<li><a href="../static/index8.html"></a></li>
			<li><a href="../static/index9.html"></a></li>
		</ul>
		<ul>
			<li><a href="../static/index10.html"></a></li>
			<li><a href="../static/index11.html"></a></li>
			<li><a href="../static/index12.html"></a></li>
		</ul>
	</div>
</div>
</template>

<script type="text/javascript">
	export default {
		name: 'music',
		data () {
			return {
				message : 'this is is music!'
			}
		}
}
</script>

<style>
    #showimage {
		height: 300px;
		width: 100%;
		overflow: hidden;
		background-color: gray;
		position: relative;
	}

	#showimage img {
		height: 300px;
		width: 980px;
	}
    
    #showimage ul,li {
    	margin: 0px;
    	padding: 0px;
    }
    
    #showimage ul {
    	width: 2940px;
    	height: 300px;
    	position: absolute;
    	top: 0px;
    	left: 0px;
    }

    #showimage li {
    	float: left;
    	height: 300px;
		width: 980px;
    }
    
    #listFirst {
		width: 100%;
		height: 580px;
	}
    
    #listFirst a {
    	height: 240px;
		width: 310px;
		display: block;
    	text-decoration: none;
    }
    
    #listFirst a img {
    	width: 96%;
    	height: 190px;
    	border: 1px solid black;
    	border-radius: 5px;
    }

    #listFirst a span {
    	display: block;
    	font-size: 30px;
    	font-family: "微软雅黑";
    	letter-spacing: 3px;
    	color: #3c3c3c;
    	text-align: center;
    	width: 90%;
    	height: 50px;
    	margin: 0px;
    }

    #listFirst p {
        width: 960px;
        height: 50px;
        font-size: 38px;
        text-align: left;
        border-left: 5px solid #467500;
        padding-left: 20px;
	}

	#listFirst p i {
		margin-left: 20px;
		font-size: 50px;
	}

	#listFirst ul,li {
		margin: 0px;
		padding: 0px;
	}
    
    #listFirst li {
    	width: 308px;
    	height: 250px;
    	display: block;
    	float: left;
    	margin-right: 15px;
    	border: 1px solid black;

    }

    #listFirst ul {
    	position: relative;
    }

     #listTwo {
		width: 100%;
		height: 500px;
	}

    #listTwo p {
		width: 960px;
		height: 50px;
		font-size: 38px;
		text-align: left;
		border-left: 5px solid #467500;
        padding-left: 20px;
	}
   
    #listTwo a {
    	height: 240px;
		width: 300px;
		display: block;
    	text-decoration: none;
    }
    
    #listTwo a img {
    	width: 100%;
    	height: 190px;
    }

    #listTwo a span {
    	display: block;
    	font-size: 30px;
    	font-family: "微软雅黑";
    	letter-spacing: 3px;
    	color: #3c3c3c;
    	text-align: center;
    	width: 90%;
    	height: 50px;
    	margin: 0px;
    }

    #listTwo p i {
		margin-left: 20px;
		font-size: 50px;
	}

	#listTwo ul,li {
		margin: 0px;
		padding: 0px;
	}
    
    #listTwo li {
    	width: 308px;
    	height: 250px;
    	display: block;
    	float: left;
    	margin-right: 15px;
    	border: 1px solid black;

    }

    #listTwo ul {
    	position: relative;
    }
</style>