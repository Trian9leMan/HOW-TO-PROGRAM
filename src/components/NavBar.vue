<script setup lang="ts">
import { useTemplateRef } from 'vue';

let throttling = false;

function onScrollThrottled() {
    if (!throttling) {
        throttling = true;
        requestAnimationFrame(() => {
            onScroll();
            throttling = false;
        });
    }
}


let navbarTop = 0;
let transition = true;
let position = "absolute";
let lastScrollPosition = 0;

const navbar = useTemplateRef<HTMLMenuElement>("navbar-ref");

function onScroll() {

    const currentScrollPosition = window.pageYOffset || document.documentElement.scrollTop;

    if (currentScrollPosition <= 0) {

        lastScrollPosition = 0;
        navbarTop = 0;

        if (position !== "absolute") { transition = true; }
        else { transition = false; }
        position = "absolute";

    } else {

        if (currentScrollPosition > lastScrollPosition) {

            if (position !== "absolute") { transition = true; }
            else { transition = false; }
            position = "absolute";

            let { top, height } = (navbar.value as HTMLMenuElement).getBoundingClientRect()
            navbarTop = currentScrollPosition + Math.max(top, -height);

        } else {

            const { top } = (navbar.value as HTMLMenuElement).getBoundingClientRect()

            if (top >= 0) {

                navbarTop = 0;

                if (position !== "fixed") { transition = true; }
                else { transition = false; }
                position = "fixed";

            }

        }

        lastScrollPosition = currentScrollPosition;

    }
    (navbar.value as HTMLMenuElement).style = `position: ${position}; top: ${navbarTop}px; transition: ${transition ? "none" : "100ms linear"}`;
}

// Since @scroll doesn't exist for Vue 3, we have to use the old fashioned way.
window.addEventListener("scroll", onScrollThrottled, { passive: true });
</script>

<template>
    <nav id="navbar" ref="navbar-ref">
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/python/1">Python</RouterLink>
        <RouterLink to="/cpp/1">C++</RouterLink>
    </nav>
</template>

<style scoped>
#navbar {
    background-color: var(--navbar-background);
    overflow: hidden;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 3rem;
    display: flex;
    justify-content: center;
    text-justify: auto;
}

#navbar a {
    color: var(--navbar-text);
    padding: 0.428rem 1.25rem;
    text-decoration: none;
    text-align: center;
    line-height: 2rem;
    transition: background-color 250ms;
    text-transform: uppercase;
    font-weight: bold;
}

#navbar a:hover {
    background-color: var(--accent-colour);
}
</style>
