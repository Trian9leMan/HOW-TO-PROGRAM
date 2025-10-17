<script setup lang="ts">
import NavBar from './components/NavBar.vue'
import { onMounted } from 'vue'
import KUTE from 'kute.js'

onMounted(() => {
    const anim = KUTE.fromTo(
        "#blob1",
        {
            path: "#blob1",
        },
        {
            path: "#blob2",
        },
        {
            repeat: 999,
            duration: 5000,
            yoyo: true,
            easing: "easeInOutSine"
        }
    )
    anim.start();
});

</script>

<template>
    <NavBar />
    <h1 id="title">Python</h1>
    <main>
    </main>
    <!-- <svg id="blob" class="blob-motion" viewBox="0 0 900 600" width="900" height="600" xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1"> -->
    <svg class="blob-motion" viewBox="0 0 900 600" xmlns="http://www.w3.org/2000/svg">
        <g transform="translate(471.51313124276675 301.30285937029635)">
            <path id="blob1"
                d="M159.3,-66.4C174,-6.5,131.1,57.4,65.5,109.6C0,161.8,-88.2,202.3,-143.6,168.8C-199,135.3,-221.7,28,-192.3,-52.2C-162.9,-132.3,-81.5,-185.1,-4.6,-183.6C72.3,-182.2,144.6,-126.3,159.3,-66.4z"
                fill="#1dc6a1" />
        </g>
        <g transform="translate(445.3661682371059 277.8785999717638)">
            <path id="blob2"
                d="M162,-187.7C200.6,-160.7,216,-100.7,213,-47.9C210,5,188.6,50.7,167.1,104.5C145.6,158.3,124.1,220.1,82.5,241.9C40.8,263.7,-21,245.6,-76,220.5C-131.1,195.4,-179.4,163.5,-196.4,120.1C-213.4,76.8,-199,22.1,-184.4,-27.6C-169.8,-77.4,-155,-122.2,-124.2,-150.6C-93.4,-179,-46.7,-191,7.5,-199.9C61.7,-208.9,123.4,-214.7,162,-187.7z"
                fill="#1dc6a1" />
        </g>
    </svg>
</template>

<style scoped>
.blob-motion {
    /* aspect-ratio: 900 / 600; */
    transform: translateY(-20%);
    min-height: 100%;
    min-width: 1024px;
    width: 50%;
    height: auto;
    position: fixed;
    top: 20%;
    left: 22.5%;
    z-index: -1;
}

#blob2 {
    opacity: 0;
}
</style>
