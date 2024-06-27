<script setup lang="ts">
import Gym8 from '@/assets/slides/intro.svg'

onMounted(() => {
	gsap.from('#intro', { 
		y: 20, 
		opacity: 0, 
		delay: 1, 
		duration: 5 
	})
})
</script>

<template>
	<div>
		<img :src="Gym8" id="intro" class="m-auto select-none" />
	</div>
</template>

<style lang="scss">
.container {
	background: linear-gradient(90deg, #3f180d, #3d0c1e, #05232e, #03271f);
	background-size: 400% 400%;
	animation: gradient 7.5s ease infinite;
	transform: translate3d(0, 0, 0);
	transition: all 1s;
}
 
@keyframes gradient {
	0% {
		background-position: 0% 50%;
	}
	50% {
		background-position: 100% 50%;
	}
	100% {
		background-position: 0% 50%;
	}
}
</style>
