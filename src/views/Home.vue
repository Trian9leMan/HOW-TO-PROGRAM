<script setup lang="ts">
import NavBar from '../components/NavBar.vue'
import Background from '../components/Background.vue'
</script>

<template>
    <div class="home-wrapper">
        <NavBar />
        <h1 id="title">How to Program</h1>
        <main>
            <h2 class="heading">Why should you code?</h2>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur repellendus incidunt, animi magni assumenda nemo, iusto omnis voluptate iste, odio quos. Commodi, odio tenetur est quasi iure odit voluptatibus aut.
                Vel rem cumque, id accusantium velit nemo expedita odit itaque natus animi libero nostrum recusandae, pariatur impedit consectetur! Alias blanditiis magnam autem sequi rerum voluptatem quas corrupti placeat molestiae facere!
                Eius pariatur atque adipisci fugiat corrupti rem unde sapiente quibusdam, quisquam beatae, saepe facere omnis quo, itaque officiis iure aut qui. Quam maxime dolore odio distinctio nulla voluptatem harum culpa?
            </p>
            <h2 class="heading">How to start programming</h2>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia a maiores optio, tempora laboriosam illo amet tempore beatae quisquam natus praesentium similique asperiores quibusdam distinctio? Quidem ipsa mollitia voluptate voluptatem!
                Odio hic quidem vel dicta quis. Neque similique aperiam dolore iusto distinctio laborum quas temporibus, est inventore, exercitationem quaerat hic unde ratione doloribus ea fugiat sunt odio explicabo molestias beatae.
            </p>
        </main>
        <Background src="src/assets/backgrounds/stacked waves 1.svg" style="top: 7rem;" />
    </div>
</template>

<style scoped>
.heading {
    text-align: center;
    font-size: 2rem;
    margin-top: 2rem;
    margin-bottom: 2rem;
}
</style>
