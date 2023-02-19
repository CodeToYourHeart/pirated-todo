<template>
  <div id="todo-item" @click.right.prevent="displayFuncMenu">
    <!--
        分析TodoItem样式 最低高度42
        单行文字: 上6,下4 有时间
        无时间:居中
     -->
    <label>
      <input type="checkbox" class="item-selector"/>
    </label>
    <div>
      <div class="item-name">{{ todo.name }}</div>
      <div class="item-other">
        <img class="item-bottom-icon" src="~@/assets/todo-item/myday.svg" alt="我的一天">
        <img class="item-bottom-icon" src="~@/assets/todo-item/deadline.svg" alt="截止时间">
        {{ todo.deadline | dateFormatter('yy-MM-dd hh:mm:ss,ww') }}
        <img class="item-bottom-icon" src="~@/assets/todo-item/circulate.svg" alt="循环周期">
        <img class="item-bottom-icon" src="~@/assets/todo-item/reminder.svg" alt="提醒时间">
        {{ todo.reminderTime }}
      </div>


    </div>
    <div style="width: 80px; text-align: center">
      <img class="item-bottom-icon" src="~@/assets/todo-item/important.svg" alt="重要事情">
    </div>
  </div>
</template>

<script>
export default {
  name: "TodoItem",
  data(){
    return {
    }
  },
  props: ['todo', 'displayFuncMenu'],
  methods:{

  },

}
</script>

<style scoped>
#todo-item {
  background-color: #e9ebea;
  width: 100%;
  min-height: 56px;
  border-radius: 5px;
  margin-top: 2px;
  margin-bottom: 2px;
  display: flex;
}

.item-selector {
  margin-left: 10px;
  margin-right: 10px;
  line-height: 42px;
  margin-top: 15px;

}

.item-name {
  word-break: break-all;
  white-space: normal;
  font-weight: lighter;
  font-size: 12px;
  margin-top: 12px;
}

.item-other {
  font-size: 10px;
  line-height: 14px;
  margin-top: 4px;
  margin-bottom: 4px;
  color: #6b6c6c;

}

.item-bottom-icon {
  height: 14px;
}



</style>