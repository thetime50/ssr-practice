# Nuxt 3 Minimal Starter

Look at the [nuxt 3 documentation](https://v3.nuxtjs.org) to learn more.

## Setup

Make sure to install the dependencies:

```bash
# yarn
yarn install

# npm
npm install

# pnpm
pnpm install --shamefully-hoist
```

## Development Server

Start the development server on http://localhost:3000

```bash
npm run dev
```

## Production

Build the application for production:

```bash
npm run build
```

Locally preview production build:

```bash
npm run preview
```

Checkout the [deployment documentation](https://v3.nuxtjs.org/guide/deploy/presets) for more information.

## note

### 添加sass支持
npm install -D sass

### 路由重定向
[Nuxt.js重定向路由方式](https://blog.csdn.net/weixin_45172119/article/details/107975277)
1. nuxt.config.ts 配置

[migration](https://v3.nuxtjs.org/migration/configuration/#migration)

```ts
// nuxt2
// nuxt.config.ts
import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    router:{
        extendRoutes(routers,resolve){
            routers.push({
                path:'/',
                redirect: '/home'
            })
        }
    }
})
```
```ts
// nuxt3
// nuxt.config.ts
// 这个现在用不了会报错
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
            routers.push({
                name: '404',
                path:/.*/, // '*', // 现在必须使用正则匹配 *
                file: resolve(__dirname,'./pages/err404.vue')
            })
        }
    }
})
```

- 报错
```
 ERROR  Cannot start nuxt:  Cannot read properties of undefined (reading 'length')  
```
[pages:extend does not normalize page paths](https://github.com/nuxt/framework/issues/2822)  
[router.extendRoutes support in nuxt.config.js for Nuxt 3](https://github.com/nuxt/framework/issues/2041)

2. 通过中间件文件


3. 呈现错误页面
[rendering-an-error-page](https://v3.nuxtjs.org/guide/features/error-handling/#rendering-an-error-page)

4. module-extend-pages
[module-extend-pages](https://v3.nuxtjs.org/examples/advanced/module-extend-pages/)  
一样会报错
```ts
// nuxt.config.ts
export default defineNuxtConfig({
    modules: [
        '~/modules/pages',
        // '@nuxt/ui'
    ],
})

```
```ts
// modules/pages/index.js
import { defineNuxtModule, extendPages } from '@nuxt/kit'
import { resolve } from 'pathe'

export default defineNuxtModule({
  setup () {
    extendPages((pages) => {
      // Add /test page
      pages.push({
        name: 'Test',
        path: '/test',
        file: resolve(__dirname, './pages/test.vue')
      })
    })
  }
})

```
[buildModules this.nuxt.hook](https://github.com/nuxt/framework/issues/2041#issuecomment-1011775139)


## todo
- eslint
