<template>
	<view class="login-other">
		<view class="other-text">
			<view>或用以下方式登录</view>
		</view>
		<view class="other">
			<view class="other-item">
				<image src="../../static/img/wx.png" mode=""></image>
				<view>微信登录</view>
			</view>
			<view class="other-item">
				<image src="../../static/img/wb.png" mode=""></image>
				<view>微博登录</view>
			</view>
			<view class="other-item">
				<image src="../../static/img/qq.png" mode=""></image>
				<view>QQ登录</view>
			</view>
		</view>
	</view>
</template>

<script>
</script>

<style>
	.login-other{
		padding: 100rpx 0;
	}
	.other-text{
		display: flex;
		padding: 50rpx 0;
	}
	.other-text view{
		line-height: 0rpx;
		padding: 0 10rpx;
	}
	.other-text:after{
		flex: 1;
		content: '';
		height: 2rpx;
		background-color: #CCCCCC;
	}
	.other-text::before{
		flex: 1;
		content: '';
		height: 2rpx;
		background-color: #CCCCCC;
	}
	.other{
		display: flex;
		justify-content: space-around;
	}
	.other-item{
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}
	.other-item image{
		width: 80rpx;
		height: 80rpx;
	}
</style>