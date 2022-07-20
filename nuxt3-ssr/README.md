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

### eslint

[github discussiong Nuxt 3 linting?](https://github.com/nuxt/framework/discussions/2815)

## todo
- eslint


## note

### views

#### components
https://v3.nuxtjs.org/guide/directory-structure/components/

放在 components/ 目录下的组件自动引入，自动添加路径作为组件名用大驼峰命名

**动态组件**  
使用resolveComponent() 方法获取/引入组件
```html
<template>
  <component :is="clickable ? MyButton : 'div'" />
</template>

<script setup>
const MyButton = resolveComponent('MyButton')
</script>
```

**动态到入 懒加载组件**  
在组件名前缀lazy可延迟加载组件
```html
    <LazyMountainsList v-if="show" />
```

**手动导入组件**
```html

<script setup>
  import { NuxtLink, LazyMountainsList } from '#components'
  const show = ref(false)
</script>
```

**ClientOnly 组件**
使用 ClientOnly 组件包裹的组件只在客户端上渲染，需要仅在客户端插件中注册该组件

```html
<template>
  <div>
    <Sidebar />
    <ClientOnly>
      <!-- this component will only be rendered on client side -->
      <Comments />
      <template #fallback> <!-- 服务端预渲染插槽 -->
        <!-- this will be rendered on server side -->
        <p>Loading comments...</p>
      </template>
    </ClientOnly>
  </div>
</template>
```

**组件目录注册**
```js
// awesome-ui/nuxt.js
import { defineNuxtModule } from '@nuxt/kit'
import { fileURLToPath } from 'node:url'

export default defineNuxtModule({
  hooks: {
    'components:dirs'(dirs) {
      // Add ./components dir to the list
      dirs.push({
        path: fileURLToPath(new URL('./components', import.meta.url)),
        prefix: 'awesome' // 匹配前缀
      })
    }
  }
})
```
```js
// nuxt.config.ts
export default {
  modules: ['awesome-ui/nuxt']
}
```

#### pages
https://v3.nuxtjs.org/guide/directory-structure/pages

见下面

#### layouts
https://v3.nuxtjs.org/guide/directory-structure/layouts/

- 在目录 layouts 下定义布局组件 可定义default.vue 组件  
- 在页面中使用&lt;NuxtLayout&gt;&lt;NuxtLayout :name="layout"&gt;引用
- 可通过元数据修改当前页面的默认布局组件 definePageMeta({ layout: "custom",});
- 可以修改 route.meta.layout 改变布局组件


### routing

- [routing](https://v3.nuxtjs.org/guide/features/routing)
- [directory-structure pages](https://v3.nuxtjs.org/guide/directory-structure/pages/)
- [directory-structure middleware](https://v3.nuxtjs.org/guide/directory-structure/middleware/)

#### pages

自动引入pages 目录下的 .vue, .js, .jsx, .ts or .tsx 文件作为页面  
使用 &lt;NuxtPage&gt; 组件来渲染页面  
页面组件必须有一个根组件，否则客户端导航时会有渲染问题


**动态路由 路由参数**
- 使用 ~/pages/\[\[slug\]\]/index.vue 或者这 ~/pages/\[\[slug\]\].vue 声明路由参数
- 使用 \[...slug\].vue 捕获剩余所有目录

**路由嵌套 page-key**

目录结构有点蠢

```
-| pages/
---| parent/
------| child.vue
---| parent.vue
```

**页面元数据**
```js

definePageMeta({ // 只能在页面组件中使用 在组件中使用没有效果 // 不同层级的元数据 会被合并到一个对象里面
  key: route => route.fullPath, // 路径更新时刷新页面组件
  title: "hello-route-meta",
  // keepalive: true, // 页面组件保持缓存
  // layout: ,// https://v3.nuxtjs.org/guide/directory-structure/pages/#layout
  // middleware: , // 中间件
  // layoutTransition: , // 布局切换动画
  // pageTransition: , // 页面切换动画
  // alias: '', // 别名 通过不同路径访问到同一个页面组件

});

```

定义元数据数据结构

**导航**
<NuxtLint>

**路由选项设置**

在 app/router.option.ts 中设置


```ts
import type { RouterConfig } from '@nuxt/schema'

// https://router.vuejs.org/api/#routeroptions
export default <RouterConfig>{
}
```

nuxt.config.ts 中
```ts
import { defineNuxtConfig } from "nuxt";


export default defineNuxtConfig({

  router:{
  //   // 只有 JSON 可序列化选项是可配置的：
  //   // https://router.vuejs.org/api/#routeroptions
  //   options: {
  //     linkActiveClass:,
  //     linkExactActiveClass:,
  //     end:,
  //     sensitive:,
  //     strict:,
  //   }
  }
})

```

**程序化导航**

使用 navigateTo 跳转

#### middleware
1. 匿名路由中间件 写在页面中 definePageMeta({middleware}) 配置
2. 命名路由中间件 放置在middleware/目录中 文件命名使用ebab-case短横线分割  
    definePageMeta({middleware}) 配置
3. 全局路由中间件 放置在middleware/目录中 使用.global后缀 每次路由更新运行

- 使用 defineNuxtRouteMiddleware 定义中间件 
  - 返回 navigateTo 重定向跳转 
  - 返回 abortNavigation 终止导航报错 
  - 或者不返回


