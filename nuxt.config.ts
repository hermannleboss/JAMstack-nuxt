// https://nuxt.com/docs/api/configuration/nuxt-config
import * as process from "process";

export default defineNuxtConfig({
  devtools: { enabled: true },
  modules:[
    ["@storyblok/nuxt", { accessToken: process.env.ACCESS_TOKEN }]
  ]
})
