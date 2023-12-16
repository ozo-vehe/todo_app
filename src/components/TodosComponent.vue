<script setup>
import { ref } from 'vue';
import bg_image from '../assets/bg.jpg';

const edit = ref(false)
const newValue = ref();

const todos = ref([
  {
    id: 'aaa1',
    text: 'Todo list one',
    isCompleted: false,
    isBusiness: false
  },
  {
    id: 'aaa2',
    text: 'Todo list two',
    isCompleted: false,
    isBusiness: false
  },
])

const addTodo = async() => {
  const todo = document.getElementById('todo').value
  if (todo) {
    const newTodo = {
      id: `aaa${todos.value.length + 1}`,
      text: todo,
      isCompleted: false,
      isBusiness: false
    }
    todos.value.push(newTodo)
    document.getElementById('todo').value = ''
  }
}
const showEdit = async(todo) => {
  // edit.value = true
  document.querySelector(`#${todo.id} .todo_text input`).classList.remove('hide');
  document.querySelector(`#${todo.id} .save_icon`).classList.remove('hide');
  document.querySelector(`#${todo.id} .edit_icon`).classList.add('hide');
  document.querySelector(`#${todo.id} .todo_text p`).classList.add('hide');
}

const editTodo = async(todo) => {
  const value = document.querySelector(`#${todo.id} .edit_todo`).value
  if(value) {
  todo.text = value
  document.querySelector(`#${todo.id} .todo_text input`).classList.add('hide');
  document.querySelector(`#${todo.id} .save_icon`).classList.add('hide');
  document.querySelector(`#${todo.id} .edit_icon`).classList.remove('hide');
  document.querySelector(`#${todo.id} .todo_text p`).classList.remove('hide');

  
  newValue.value = "";
  }
}

const deleteTodo = async(todo) => {
  const index = todos.value.findIndex((item) => item.id === todo.id)
  todos.value.splice(index, 1)
}
</script>

<template>
  <main>
    <header>
      <div class="bg_image">
        <img :src="bg_image" alt="Background image">
      </div>
      <h1>Todo List</h1>
      <div class="add_todo">
        <input type="text" name="todo" id="todo">
        <button @click="addTodo">Add</button>
      </div>
    </header>

    <div class="todo_body">
      <div :id="todo.id" v-for="todo in todos" :key="todo.id" class="todo">
        <div class="todo_text">
          <input class="hide edit_todo" type="text" name="todo" :value="todo.text">
          <p class="text">{{ todo.text }}</p>
        </div>
        <div class="todo_icons">
          <img class="edit_icon" @click="showEdit(todo)" src="https://img.icons8.com/ios-filled/ffffff/50/edit--v1.png"
            alt="edit--v1" />
            <img @click="editTodo(todo)" class="save_icon hide" width="60" height="60" src="https://img.icons8.com/ios-glyphs/ffffff/60/checkmark--v1.png" alt="checkmark--v1"/>
          <img @click="deleteTodo(todo)" class="delete_icon" src="https://img.icons8.com/fluency-systems-filled/ffffff/48/filled-trash.png"
            alt="filled-trash" />
        </div>
      </div>
    </div>
  </main>
</template>

<style scoped>
main {
  min-height: 100vh;
}

header {
  text-align: center;
}

.bg_image {
  width: 100%;
  height: 30vh;
}

.bg_image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

h1 {
  font-size: 3rem;
}

.todo_body {
  display: flex;
  gap: 10px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.todo {
  width: 450px;
  min-height: 50px;
  padding: 0px 10px;
  border-radius: 8px;
  border: thin solid #afaeae;
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  align-items: center;
  justify-content: space-between;
}

.todo_text {
  width: 80%;
}

.todo_text input {
  width: 100%;
  height: 100%;
  border: none;
  outline: none;
  font-size: 1.2rem;
  font-family: 'Spartan';
  font-weight: 600;
}

.todo_icons {
  display: flex;
  align-items: center;
  height: 45px;
}

.todo_icons img {
  width: 30px;
  height: 30px;
  padding: 5px;
  box-sizing: border-box;
  cursor: pointer;
}
.delete_icon {
  background: #e23434;
}
.edit_icon, .save_icon {
  background: #2dbc2d;
}

.add_todo {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  margin-bottom: 20px;
}

.add_todo input {
  width: 400px;
  height: 45px;
  border-radius: 8px;
  border: thin solid #ababab;
  outline: none;
  font-size: 1.2rem;
  font-family: 'Spartan';
  font-weight: 600;
}

.add_todo button {
  width: 100px;
  height: 45px;
  border-radius: 8px;
  border: none;
  outline: none;
  background-color: #424242;
  color: #fff;
  font-size: 1.2rem;
  font-family: 'Spartan';
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s linear;
}

.add_todo button:hover {
  background-color: #000000;
}
.hide {
  display: none
}
</style>