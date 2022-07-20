<template>
  <iframe
    id="JotFormIFrame-678"
    title="Cats"
    onload="window.parent.scrollTo(0,0)"
    allowtransparency="true"
    allowfullscreen="true"
    allow="geolocation; microphone; camera"
    src="https://thetime50.github.io/p5example/dist/#/demo/demo2"
    frameborder="0"
    style="
      min-width: 100%;
      height:539px;
      border:none;"
    scrolling="no"
  />
</template>

<script lang="ts" setup>
// client-only protects us right... (cough 'not really')
// 这部分代码是在服务端执行的
const ifrSetup = document.getElementById("JotFormIFrame-678") as HTMLIFrameElement; // 这种类型是在哪里定义的文档?
if (window.location.href && window.location.href.includes("?")) {
  const get = window.location.href.substr(
    window.location.href.indexOf("?") + 1,
  );
  if (ifrSetup && get.length > 0) {
    let src = ifrSetup.src;
    src = src.includes("?") ? src + "&" + get : src + "?" + get;
    ifrSetup.src = src;
  }
}
</script>
