<script setup lang="ts">
defineProps({
    blok: Object,
})
</script>
<template>
        <div class="container project-page">
            <div class="project-title">
                <h1>{{blok.name}}</h1>
                <Nuxtlink :to="{name:'index'}">Go Back</Nuxtlink>
            </div>
            <div class="project-description">
                <img :src="blok.image.filename" :alt="blok.image.alt">
                <p>{{blok.description}}</p>
            </div>
        </div>
</template>