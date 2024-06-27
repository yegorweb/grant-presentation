<script setup lang="ts">
let dtl = useDefaultTimeline()

let step = useState<number>('step', () => 1)
let slides: number[] = [1, 2]

function rerender() {
	step.value++
	if (step.value > (slides.at(-1) as number)) self.close()

	let slideIndex = slides.findIndex(slideStep => slideStep === step.value)
	if (!slideIndex) return
	
	let slideId = `slide-${slideIndex}`
	let nextSlideId = `slide-${slideIndex + 1}`

	dtl.to(slideId, { y: -20, opacity: 0 })
	dtl.remove(slideId)
	dtl.from(nextSlideId, { y: 20, opacity: 0 })
}

onMounted(() => {
	document.addEventListener('mousedown', rerender)
	document.addEventListener('keydown', rerender)
})
</script>

<template>
	<div 
		class="container cursor-pointer" 
		ondragstart="return false;" 
		ondrop="return false;"
	>
		<Intro id="slide-0" />
		<Heading id="slide-1" />
	</div>
</template>
