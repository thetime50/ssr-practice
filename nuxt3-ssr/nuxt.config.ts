import { defineNuxtConfig } from 'nuxt'
import { resolve } from 'path'
// import { createCommonJS } from 'mlly'
// const { __dirname } = createCommonJS(import.meta.url)

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    hooks: {
        'pages:extend'(routers) { // extend:pages仅当您有 pages 目录时才有效
            // routers.push({
            //     path:'/',
            //     redirect: '/home'
            // })
            // routers.push({
            //     name: '404',
            //     path:/.*/, // '*', // 现在必须使用正则匹配 *
            //     file: resolve(__dirname,'./pages/err404.vue')
            // })
            // console.log('routers', routers)
        }
    }
})
