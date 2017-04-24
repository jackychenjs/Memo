<template>
  	<div>
		<div class="metro-wrap">
    		<starsBg></starsBg>
			<div class="metro-line">
				<router-link to="profile" class="metro-block item red">Profile</router-link>
				<router-link to="demo" class="metro-block item blue">Demo</router-link>
			</div>
			<div class="metro-line">
				<div class="metro-block">
					<router-link to="tools" class="metro-block item small green">Tools</router-link>
					<router-link to="memo" class="metro-block item small purple">Memo</router-link>
					<router-link to="un" class="metro-block item small pink">Undifined</router-link>
					<router-link to="un" class="metro-block item small cyan"></router-link>
				</div>
				<router-link to="gallery" class="metro-block item yellow">Gallery</router-link>
			</div>
		</div>
  	</div>
</template>

<script>

import starsBg from '../../components/common/starsBg'

export default {
	name: 'home',
	components: {
		starsBg
	}
}

</script>

<style lang='sass'>
	body {
		overflow: hidden;
		background-color: rgb(33, 33, 33);
	}

	.metro-wrap {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		margin: auto;  
		position: absolute;  
		top: 0; left: 0; bottom: 0; right: 0;  
		.metro-line {
			position: relative;
			display: flex;
			justify-content: center;
			padding: 5px 0;
			.metro-block {
				display: flex;
				flex-wrap: wrap;
				justify-content: space-between;
				align-content: space-between;
				margin: 0 5px;
				width: 350px;
				height: 200px;
				&.item {
					background-color: rgba(50,50,50,0.6);
					color: #fff;
					border-radius: 3px;
					transition: transform .2s linear;
					&:hover {
						transform: scale(1.02);
					}
					&.red:hover {
						background-color: rgba(255, 0, 51, 0.3); /*FF0033*/
					}
					&.yellow:hover {
						background-color: rgba(255,204,153, 0.3); /*FFCC99*/
					}
					&.blue:hover {
						background-color: rgba(0,153,204, 0.3); /*0099CC*/
					}
					&.green:hover {
						background-color: rgba(153,204,51, 0.3); /*99CC33*/
					}
					&.purple:hover {
						background-color: rgba(153,51,204, 0.3); /*9933CC*/
					}
					&.pink:hover {
						background-color: rgba(255,153,204, 0.3); /*FF99CC*/
					}
					&.cyan:hover {
						background-color: rgba(204,255,255, 0.3); /*CCFFFF*/
					}
					
				}
				&.small {
					margin: 0;
					width: 170px;
					height: 95px;
				}
			}
		}
	}

</style>
