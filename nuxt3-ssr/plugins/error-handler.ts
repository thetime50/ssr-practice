export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.config.errorHandler = (error, context) => {
    // 它将接收所有 Vue 错误，即使它们已被处理。
    console.log(" nuxtApp.vueApp.config.errorHandler error, context", error, context);
  };
});
