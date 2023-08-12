<template>
    <pre>{{story}}</pre>
</template>

<script setup lang="ts">
import {useStoryblok} from ".nuxt/imports";

const story = await useStoryblok('home', {version: "draft"})
</script>

<!--<template>-->
<!--    ds-->
<!--    <StoryblokComponent v-if="story" :blok="story.content" />-->
<!--</template>-->