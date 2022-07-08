// 不会动态加载
import { defineNuxtModule, extendPages } from '@nuxt/kit'
import { resolve } from 'pathe'

export default defineNuxtModule({
    setup() {
        extendPages((pages) => {
            // Add /test page
            // pages.push({
            //     name: '404',
            //     // path: '*', // 报错提示需要使用正则
            //     path: /.*/ as any, // [nuxt] [request error] path.startsWith is not a function
            //     // file: resolve(__dirname, './pages/test.vue')
            //     file: resolve(__dirname, '../../pages/err404.vue')
            // })
            // nuxt3 - ssr\node_modules\@nuxt\schema\dist\index.d.ts
            pages.push({
                path: '/',
                redirect: '/home'
            } as any)
        })
    }
})
