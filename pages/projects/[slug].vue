<template>
    <StoryblokComponent v-if="story" :blok="story.content"></StoryblokComponent>
</template>

<script setup lang="ts">
const route = useRoute()
const story = await useStoryblok(`projects/${route.params.slug}`, {version: useRoute().query._storyblok ? "draft" : "published"})
</script>
