<script lang="ts" setup>
import { useTemplateRef, onMounted, onBeforeUnmount } from "vue";

interface Props {
    class?: string
    style?: string | Record<string, string>
    texts: string[]
    morphTime?: number
    coolDownTime?: number
}

const props = withDefaults(defineProps<Props>(), {
    morphTime: 1.5,
    coolDownTime: 1,
});

const text1Ref = useTemplateRef<HTMLSpanElement>("text1Ref");
const text2Ref = useTemplateRef<HTMLSpanElement>("text2Ref");

let textIndex = props.texts.length;
let time = new Date();
let morph = 0;
let cooldown = props.coolDownTime;
let animationFrameId: number;


function doMorph() {
    morph -= cooldown;
    cooldown = 0;

    let fraction = morph / props.morphTime;

    if (fraction > 1) {
        cooldown = props.coolDownTime;
        fraction = 1;
    }

    setMorph(fraction);
}

function setMorph(fraction: number) {
    (text1Ref.value as HTMLSpanElement).style.filter = `blur(${Math.min(8 / (1 - fraction) - 8, 100)}px)`;
    (text1Ref.value as HTMLSpanElement).style.opacity = `${Math.pow(1 - fraction, 0.6) * 100}%`;

    (text2Ref.value as HTMLSpanElement).style.filter = `blur(${Math.min(8 / fraction - 8, 100)}px)`;
    (text2Ref.value as HTMLSpanElement).style.opacity = `${Math.pow(fraction, 0.6) * 100}%`;

    (text1Ref.value as HTMLSpanElement).textContent = props.texts[textIndex % props.texts.length] ?? '';
    (text2Ref.value as HTMLSpanElement).textContent = props.texts[(textIndex + 1) % props.texts.length] ?? '';
}

function doCooldown() {
    morph = 0;
    (text1Ref.value as HTMLSpanElement).style.filter = '';
    (text1Ref.value as HTMLSpanElement).style.opacity = '0%';
    (text2Ref.value as HTMLSpanElement).style.filter = '';
    (text2Ref.value as HTMLSpanElement).style.opacity = '100%';
}

function animate() {
    animationFrameId = requestAnimationFrame(animate);

    let newTime = new Date();
    let shouldIncrementIndex = cooldown > 0;
    let dt = (newTime.getTime() - time.getTime()) / 1000;
    time = newTime;

    cooldown -= dt;

    if (cooldown <= 0) {
        if (shouldIncrementIndex) {
            textIndex++;
        }

        doMorph();
    } else {
        doCooldown();
    }
}

onMounted(() => {
    animate();
});

onBeforeUnmount(() => {
    if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
    }
})

</script>

<template>
    <span id="container" :class="props.class" :style="props.style">
        <span id="text1" ref="text1Ref"></span>
        <span id="text2" ref="text2Ref"></span>
    </span>
    <svg id="filters">
        <defs>
            <filter id="threshold">
                <feColorMatrix in="SourceGraphic" type="matrix" values="1 0 0 0 0
								0 1 0 0 0
								0 0 1 0 0
								0 0 0 255 -140" />
            </filter>
        </defs>
    </svg>
</template>

<!-- TODO: Fix up the CSS so both spans are positioned on top of each other -->

<style scoped>
span#container {
    position: relative;
    white-space: nowrap;
    filter: url(#threshold) blur(0.6px);
}

span#text1,
span#text2 {
    position: absolute;
    top: -0.125rem; /* Remove this number or something */ 
    left: 0;
    display: inline-block;

    font-family: 'Raleway', sans-serif;


    user-select: none;
}
</style>