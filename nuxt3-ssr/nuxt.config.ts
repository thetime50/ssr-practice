// import { resolve } from "path";
import { defineNuxtConfig } from "nuxt";
import eslintPlugin from "vite-plugin-eslint";
// import { createCommonJS } from 'mlly'
// const { __dirname } = createCommonJS(import.meta.url)

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  // modules: [
  //     '~/modules/pages',
  //     // '@nuxt/ui'
  // ],
  // buildModules: [
  //     '~/modules/pages'
  // ],
  hooks: {
    "pages:extend" (routers) { // extend:pages仅当您有 pages 目录时才有效、
      // routers.push({
      //     path:'/',
      //     redirect: '/home'
      // })
      // routers.push({
      //     name: '404',
      //     path:/.*/, // '*', // 现在必须使用正则匹配 *
      //     file: resolve(__dirname,'./pages/err404.vue')
      // })
      console.log("routers", routers);
    },
  },
  vite: {
    plugins: [eslintPlugin()],
  },
  // router:{
  //   // 只有 JSON 可序列化选项是可配置的：
  //   // https://router.vuejs.org/api/#routeroptions
  //   options: {
  //     linkActiveClass:,
  //     linkExactActiveClass:,
  //     end:,
  //     sensitive:,
  //     strict:,
  //   }
  // }
});
