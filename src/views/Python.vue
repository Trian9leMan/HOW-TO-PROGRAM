<script setup lang="ts">
import { onMounted, onBeforeUnmount } from 'vue'
import NavBar from '../components/NavBar.vue'
import KUTE from 'kute.js'

let anim: ReturnType<typeof KUTE.fromTo> | null = null

onMounted(() => {
    requestIdleCallback(() => {
        const blob1 = document.querySelector('#blob1')
        const blob2 = document.querySelector('#blob2')

        if (!blob1 || !blob2) return

        const anim = KUTE.fromTo(
            blob1,
            { path: blob1 },
            { path: blob2 },
            {
                repeat: Infinity,
                duration: 8000,
                yoyo: true,
                easing: 'easeInOut'
            }
        )

        anim.start()   
    })
})


onBeforeUnmount(() => {
    if (anim) {
        anim.stop()
        anim = null
    }
})
</script>


<template>
    <div class="python1-wrapper">
        <NavBar />
        <h1 id="title">Python</h1>
        <main>
            <h1 class="heading">What is Python?</h1>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, veritatis. Exercitationem dolores
                veritatis blanditiis optio possimus consequatur, quasi nulla? Soluta molestias cum quaerat unde
                voluptatibus delectus reprehenderit rem voluptates eaque.
                Culpa esse sapiente porro sunt quasi aut laborum alias repudiandae quae. Iure quo ipsum sunt, quos
                minima quasi nemo eos rem tenetur modi sed nostrum quaerat? Est, enim? Velit, reprehenderit.
            </p>
            <h1 class="heading">Setting Up</h1>
            <p>
                Go to the official Python website to setup python and follow the video below to setup your coding
                enviroment, so that you can start coding!
            </p>
            <a href="https://www.python.org/downloads/" class="link">OFFICIAL SITE FOR PYTHON DOWNLOAD</a>
            <video></video>
        </main>

        <svg class="blob-motion" viewBox="0 0 900 600" xmlns="http://www.w3.org/2000/svg">
            <g transform="translate(471.5 301.3)">
                <path id="blob1"
                    d="M159.3,-66.4C174,-6.5,131.1,57.4,65.5,109.6C0,161.8,-88.2,202.3,-143.6,168.8C-199,135.3,-221.7,28,-192.3,-52.2C-162.9,-132.3,-81.5,-185.1,-4.6,-183.6C72.3,-182.2,144.6,-126.3,159.3,-66.4z"
                    fill="#54add6" />
            </g>
            <g transform="translate(445.3 277.9)">
                <path id="blob2"
                    d="M162,-187.7C200.6,-160.7,216,-100.7,213,-47.9C210,5,188.6,50.7,167.1,104.5C145.6,158.3,124.1,220.1,82.5,241.9C40.8,263.7,-21,245.6,-76,220.5C-131.1,195.4,-179.4,163.5,-196.4,120.1C-213.4,76.8,-199,22.1,-184.4,-27.6C-169.8,-77.4,-155,-122.2,-124.2,-150.6C-93.4,-179,-46.7,-191,7.5,-199.9C61.7,-208.9,123.4,-214.7,162,-187.7z"
                    fill="#439cc5" style="opacity: 0" />
            </g>
        </svg>
    </div>
</template>


<style scoped>
.blob-motion {
    width: clamp(300px, 60vw, 800px);
    height: auto;
    margin: 0 auto;
    display: block;
}

/* svg.blob-motion {
    display: block;
    margin: auto;
    margin-top: 4rem;
} */


#blob1 {
    will-change: transform;
}

#blob2 {
    opacity: 0;
}

.link {
    display: block;
    text-align: center;
    margin: 1rem auto;
    color: var(--accent-colour);
    font-weight: 600;
    text-decoration: none;
}

svg.blob-motion {
    width: 75%;
    height: 75%;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: -1;
}

@media screen and (max-width: 1024px) {
    svg.blob-motion {
        left: 50%;
        margin-left: -512px;
    }
}
</style>
