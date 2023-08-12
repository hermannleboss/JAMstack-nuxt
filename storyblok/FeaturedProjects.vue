<script setup lang="ts">
defineProps({
    blok: Object,
})
</script>
<template>
    <div class="container" v-editable="blok">
        <h2 style="margin-left: 10px">{{ blok.title }}</h2>
        <div class="featured-projects">
            <div class="project" v-for="project in blok.projects" :key="project._uid">
                <NuxtLink :to="{name:'projects-slug', params: {slug: project.slug}}">
                    <img :src="project.content.image?.filename || 'https://picsum.photos/300/175'"
                         :alt="project.content.image?.alt">
                    <h3>{{ project.content.name }}</h3>
                </NuxtLink>
            </div>
        </div>
    </div>
</template>