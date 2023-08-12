<template>
    <StoryblokComponent  v-if="story" :blok="story.content"></StoryblokComponent >
</template>

<script setup lang="ts">

const story = await useStoryblok('home', {version: "draft"})
</script>


<style scoped>

</style>