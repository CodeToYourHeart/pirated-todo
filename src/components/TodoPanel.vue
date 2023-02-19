<template>
  <div id="TodoPanel" :style="styleObj" @click="display=false">
    <div id="TodoPanel-Top">
      <img id="TodoPanel-icon" :src="icon" alt="任务图标">
      <span id="TodoPanel-Name">
        {{ panelName }}
      </span>
    </div>
    <div style="height: 500px;overflow: scroll">
      <TodoItem v-for="todo in todos"
                :key="todo.id"
                :todo="todo"
                :displayFuncMenu="displayFuncMenu">

      </TodoItem>
    </div>
    <label for="AddTodo"></label>
    <input id="AddTodo"
           placeholder="添加任务"
           @keyup.enter="addTodo"
    />


    <transition name="el-zoom-in-top">
      <div class="func-menu transition-box"
           :style="styleObject"
           v-if="display"
           @click.right.prevent="">
      </div>
    </transition>
  </div>

</template>

<script>
import TodoItem from "@/components/TodoItem";
import 'element-ui/lib/theme-chalk/base.css';

export default {
  name: "TodoPanel",
  data() {
    return {
      icon: require('../assets/todo-panel/panel-icon/功能线性.svg'),
      panelName: "见面",
      backgroundImg: require('../assets/todo-panel/background-img/R-C.jpg'),
      backgroundColor: "#f9e8de",
      todos: [
        {
          id: '001',
          myDay: false,
          deadline: new Date(),
          reminderTime: new Date(),
          remark: '',
          done: false,
          name: '待完成事情1'
        },
        {
          id: '002',
          myDay: false,
          deadline: new Date(),
          reminderTime: new Date(),
          remark: '',
          done: false,
          name: '待完成事情1',
          circulate: 100
        },
        {
          id: '003',
          myDay: false,
          deadline: new Date(),
          reminderTime: new Date(),
          remark: '',
          done: false,
          name: '待完成事情1',
          circulate: 100
        },
        {
          id: '004',
          myDay: false,
          deadline: new Date(),
          reminderTime: new Date(),
          remark: '',
          done: false,
          name: '待完成事情1',
          circulate: 100
        },
        {
          id: '005',
          myDay: false,
          deadline: new Date(),
          reminderTime: new Date(),
          remark: '',
          done: false,
          name: '待完成事情1',
          circulate: 100
        },
      ],
      styleObject: {
        top: '0',
        left: '0'
      },
      display: false,
    }
  },
  computed: {
    styleObj() {
      return {
        'background-image': 'url(' + this.backgroundImg + ')',
      }
    },
  },
  components: {
    TodoItem
  },
  methods: {
    addTodo(e) {
      let todoName = e.target.value;
      this.todos.unshift({
        id: this.uuid(),
        myDay: false,
        deadline: new Date(),
        reminderTime: new Date(),
        remark: '',
        done: false,
        name: todoName
      })
      e.target.value = '';
    },
    displayFuncMenu(e) {
      // 250px 425px
      let pageWidth = document.documentElement.clientWidth;
      let pageHeight = document.documentElement.clientHeight;
      let curMouseHeight = e.pageY;
      let curMouseWidth = e.pageX;

      if ((425+curMouseHeight)>pageHeight ){
        this.styleObject.top =  (curMouseHeight-425)+ 'px';
      }else {
        this.styleObject.top =  curMouseHeight+ 'px';
      }
      if ((250+curMouseWidth)>pageWidth ){
        this.styleObject.left =  (curMouseWidth-250)+ 'px';
      }else {
        this.styleObject.left =curMouseWidth + 'px';
      }


      this.display = false;

      this.$nextTick(() => {
        this.display = true;
      });
    },
  }


}
</script>

<style scoped>
#TodoPanel {
  height: 100%;
  background-size: cover;
  background-attachment: fixed;
  width: calc(100% - 380px);
  float: right;
  border-top-left-radius: 10px;
  padding-left: 50px;
  padding-right: 50px;
}

#TodoPanel-Top {
  display: flex;
  align-items: center;
  margin-bottom: 27px;
  margin-top: 42px
}

#TodoPanel-icon {
  height: 28px;
}

#TodoPanel-Name {
  margin-left: 15px;
  font-size: 28px;
  color: white;
  font-weight: bolder;
  line-height: 100%
}

#AddTodo {
  background-color: #e9ebea;
  width: 100%;
  height: 42px;
  border-radius: 5px;
  margin-top: 2px;
  margin-bottom: 2px;
  border: 0;
  outline: none;
  font-size: small;
  color: black;
  padding-left: 20px;
}

.func-menu {
  position: fixed;
  margin-bottom: 10px;
  width: 250px;
  height: 425px;
  border-radius: 4px;
  background-color: #409EFF;
  text-align: center;
  color: #fff;
  padding: 40px 20px;
  box-sizing: border-box;
  margin-right: 20px;
}
</style>