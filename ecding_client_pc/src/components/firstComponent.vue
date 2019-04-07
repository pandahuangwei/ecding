<template>
  <div id="firstcomponent">
    <h1>第一个组件</h1>
    <a href="javascript:void(0);">write by {{author}}</a>
  </div>
</template>
<!-- the js -->
<script type="text/javascript">
export default {
  data() {
    return {
      author: "jeff"
    };
  }
};
</script>

<!-- the vue style
<style lang="less">
</style>-->
