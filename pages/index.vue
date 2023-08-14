<template>
    <StoryblokComponent  v-if="story" :blok="story.content"></StoryblokComponent >
</template>

<script setup lang="ts">

const story = await useStoryblok('home', {version: useRoute().query._storyblock ? 'draft' : "published", resolve_relations: 'featuredProjects.projects'}, {resolveRelations: 'featuredProjects.projects'})
</script>


<style scoped>

</style>