export default defineNuxtPlugin(() => {
  console.log("hello*");
  addRouteMiddleware("global-test", () => {
    console.log("this global middleware");
  }, { global: true });

  addRouteMiddleware("named-test", () => {
    console.log("this named middleware");
  });
});
