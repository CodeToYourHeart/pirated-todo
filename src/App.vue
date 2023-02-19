<template>
  <div id="app"  @click.right.prevent="">
    <TodoPanel></TodoPanel>
  </div>
</template>
<script>
import TodoPanel from "@/components/TodoPanel";
export default {
  name: 'app',
  components: {
    TodoPanel
  },
}
</script>

<style>
* {
  padding: 0;
  margin: 0;
}
*::-webkit-scrollbar {
  /*滚动条整体样式*/
  width: 0;  /*高宽分别对应横竖滚动条的尺寸*/
  height: 0;
}
*::-webkit-scrollbar-thumb {
  /*滚动条里面深色条*/
  border-radius: 10px;
  box-shadow: inset 0 0 5px rgba(236, 236, 236, 0.1);
  background: #ccc;
}
*::-webkit-scrollbar-track {
  /*滚动条里面轨道*/
  box-shadow: inset 0 0 5px rgba(236, 236, 236, 0.1);
  border-radius: 10px;
  background: #ededed;
}
#app {
  height: 100%;
}
</style>
