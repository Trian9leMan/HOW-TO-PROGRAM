<script lang="ts" setup>
import { ref, onMounted, onUnmounted } from "vue";

interface Props {
    class?: string
    style?: string | Record<string, string>
    texts: string[]
    morphTime?: number
    coolDownTime?: number
}

const props = withDefaults(defineProps<Props>(), {
    morphTime: 1.5,
    coolDownTime: 0.5,
})

const textIndex = ref(0);
const morph = ref(0);
const coolDown = ref(0);
const time = ref(new Date());

const text1Ref = ref<HTMLSpanElement | null>();
const text2Ref = ref<HTMLSpanElement | null>();

function setStyles(fraction: number) {
    if (!text1Ref.value || !text2Ref.value) return;

    text2Ref.value.style.filter = `blur(${Math.min(8 / fraction - 8, 100)}px)`;
    text2Ref.value.style.opacity = `${Math.pow(fraction, 0.4) * 100}%`;

    const invertedFraction = 1 - fraction;
    text1Ref.value.style.filter = `blur(${Math.min(8 / invertedFraction - 8, 100)}px)`;
    text1Ref.value.style.filter = `blur(${Math.min(8 / invertedFraction - 8, 100)}px)`;
    text1Ref.value.style.opacity = `${Math.pow(invertedFraction, 0.4) * 100}%`;

    text1Ref.value.textContent = props.texts[textIndex.value % props.texts.length] ?? '';
    text2Ref.value.textContent = props.texts[(textIndex.value + 1) % props.texts.length] ?? '';
}

function doMorph() {
    morph.value -= coolDown.value;
    coolDown.value = 0;

    let fraction = morph.value / props.morphTime;

    if (fraction > 1) {
        coolDown.value = props.coolDownTime;
        fraction = 1;
    }

    setStyles(fraction);

    if (fraction === 1) {
        textIndex.value++;
    }
}

function doCoolDown() {
    morph.value = 0;

    if (text1Ref.value && text2Ref.value) {
        text2Ref.value.style.filter = "none";
        text2Ref.value.style.opacity = "100%";
        text1Ref.value.style.filter = "none";
        text1Ref.value.style.opacity = "0%";
    }
}

let animationFrameId: number = 0;
function animate() {
    animationFrameId = requestAnimationFrame(animate);

    const newTime = new Date();
    const dt = (newTime.getTime() - time.value.getTime()) / 1000;
    time.value = newTime;

    coolDown.value -= dt;

    if (coolDown.value <= 0) {
        doMorph();
    } else {
        doCoolDown();
    }
}

onMounted(() => {
    animate();
});

onUnmounted(() => {
    cancelAnimationFrame(animationFrameId);
});
</script>

<!-- <template>
    <div :class="props.class" style="filter: url(#threshold) blur(0.6px);">
        <span ref="text1Ref" id="text1" />
        <span ref="text2Ref" id="text2" />

        <svg id="filters" class="fixed size-0" preserveAspectRatio="xMidYMid slice">
            <defs>
                <filter id="threshold">
                    <feColorMatrix in="SourceGraphic" type="matrix" values="1 0 0 0 0
                    0 1 0 0 0
                    0 0 1 0 0
                    0 0 0 255 -140" />
                </filter>
            </defs>
        </svg>
    </div>
</template>



<style scoped>
#text1, #text2 {
    display: inline-block;
    opacity: 0;
    filter: blur(0px);
}
</style>

<script lang="ts" setup>
import { ref, onMounted, onUnmounted } from 'vue'

interface Props {
    class?: string
    style?: string | Record<string, string>
    texts: string[]
    morphTime?: number
    coolDownTime?: number
}

const props = withDefaults(defineProps<Props>(), {
    morphTime: 1.5,
    coolDownTime: 0.5,
})

const textIndex = ref(0)
const morph = ref(0)
const coolDown = ref(0)
const time = ref(new Date())

const text1Ref = ref<HTMLElement | null>(null)
const text2Ref = ref<HTMLElement | null>(null)

function setStyles(fraction: number) {
    if (!text1Ref.value || !text2Ref.value) return

    const invertedFraction = 1 - fraction

    text2Ref.value.style.filter = `blur(${Math.min(8 / fraction - 8, 100)}px)`
    text2Ref.value.style.opacity = `${Math.pow(fraction, 0.4) * 100}%`

    text1Ref.value.style.filter = `blur(${Math.min(8 / invertedFraction - 8, 100)}px)`
    text1Ref.value.style.opacity = `${Math.pow(invertedFraction, 0.4) * 100}%`

    text1Ref.value.textContent = props.texts[textIndex.value % props.texts.length] ?? ''
    text2Ref.value.textContent = props.texts[(textIndex.value + 1) % props.texts.length] ?? ''
}

function doMorph() {
    morph.value -= coolDown.value
    coolDown.value = 0

    let fraction = morph.value / props.morphTime
    if (fraction > 1) {
        coolDown.value = props.coolDownTime
        fraction = 1
    }

    setStyles(fraction)

    if (fraction === 1) {
        textIndex.value++
    }
}

function doCoolDown() {
    morph.value = 0

    if (text1Ref.value && text2Ref.value) {
        text2Ref.value.style.filter = 'none'
        text2Ref.value.style.opacity = '100%'
        text1Ref.value.style.filter = 'none'
        text1Ref.value.style.opacity = '0%'
    }
}

let animationFrameId: number = 0

function animate() {
    animationFrameId = requestAnimationFrame(animate)

    const newTime = new Date()
    const dt = (newTime.getTime() - time.value.getTime()) / 1000
    time.value = newTime

    coolDown.value -= dt

    if (coolDown.value <= 0) {
        doMorph()
    } else {
        doCoolDown()
    }
}

onMounted(() => {
    animate()
})

onUnmounted(() => {
    cancelAnimationFrame(animationFrameId)
})
</script> -->

<template>
    <div class="morphing-text-wrapper" :class="props.class" :style="props.style">
        <div class="morphing-text-container">
            <span ref="text1Ref" class="morphing-text" />
            <span ref="text2Ref" class="morphing-text" />
        </div>

        <svg id="filters" class="svg-filters" preserveAspectRatio="xMidYMid slice">
            <defs>
                <filter id="threshold">
                    <feColorMatrix in="SourceGraphic" type="matrix" values="1 0 0 0 0
                    0 1 0 0 0
                    0 0 1 0 0
                    0 0 0 255 -140" />
                </filter>
            </defs>
        </svg>
    </div>
</template>


<style scoped>
.morphing-text-wrapper {
    position: relative;
    filter: url(#threshold) blur(0.6px);
    background: none;
}


.morphing-text-container {
    position: relative;
    height: 1rem;
    line-height: 1rem;
    overflow: hidden;
    background: none;
}

.morphing-text {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    display: inline-block;
    opacity: 0;

    background: none;


    transform: none;
    will-change: filter, opacity;


    line-height: 1rem;
    height: 1rem;
}

.svg-filters {
    position: fixed;
    width: 0;
    height: 0;
}
</style>
