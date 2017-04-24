<template>
  	<!--<div class="parent">
		<div class="left">left</div> 
		<div class="right-fix"> 
			<div class="right">right</div> 
		</div> 
	</div>-->

	<!--<div class="parent">
		<div class="left">left</div> 
		<div class="center">center</div>
		<div class="right">right</div> 
	</div>-->

	<!--<div class="parent"> <div class="column">1</div> <div class="column">1</div> <div class="column">1</div> <div class="column">1</div> </div>-->

	<div class="parent"> <div class="top">top</div> <div class="left">left</div> <div class="right">right</div> <div class="bottom">bottom</div> </div>


</template>

<style>

.parent {
	border: 1px solid #ccc;
}
.left {background-color: #f66;height: 100px;}
.center {background-color: #9f9;height:150px;}
.right {background-color: #fc6; height: 200px;}
.top {background-color: #66f; height: 200px;}
.bottom {background-color: #cc6; height: 200px;}


/*.left{width:100px;float:left;} 
.right-fix{width:100%;margin-left:-100px;float:right;} 
.right{margin-left:100px;}*/

/*.left{float:left;width:100px;} 
.right{margin-left:100px;}*/

/*.left{width:100px;float:left;} .right{overflow:hidden;}*/

/*.left{width:100px;float:left;} 
.right{overflow:hidden;} 
.parent{overflow:hidden;} 
.left,.right{padding-bottom:9999px;margin-bottom:-9999px;}*/

/*.parent{display:table;table-layout:fixed;width:100%;} .left{width:100px;} .right,.left{display:table-cell;}*/

/*.parent{background:red;height:100px;margin:0 auto;} .left{background:green;margin-right:-100px;width:100%;float:left;} .right{float:right;width:100px;background:blue;}*/

/*.parent{display:table;table-layout:fixed;width:100%;} .left{display:table-cell;} .right{width:100px;display:table-cell;}*/

/*.left{width:100px;float:left;} 
.center{float:left;width:100%;margin-right:-200px;} 
.right{width:100px;float:right;}*/

/*.parent{display:table;table-layout:fixed;width:100%;} .left{width:0.1%;} .left,.right{display:table-cell;}*/

/*.parent{margin-left:-20px} .column{float:left;width:25%;padding-left:20px;box-sizing:border-box;}*/


html,body,.parent{height:100%;overflow:hidden;} 
.top{position:absolute;top:0;left:0;right:0;height:100px;}
 .left{position:absolute;top:100px;left:0;bottom:50px;width:200px;} 
 .right{position:absolute;overflow:auto;left:200px;right:0;top:100px;bottom:50px;} 
 .bottom{position:absolute;left:0;right:0;bottom:0;height:50px;}



</style>