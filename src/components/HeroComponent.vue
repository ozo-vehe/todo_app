<script setup>
import { RouterLink } from 'vue-router'

const months = [
  'jan',
  'feb',
  'mar',
  'apr',
  'may',
  'jun',
  'jul',
  'aug',
  'sep',
  'oct',
  'nov',
  'dec'
]
const date = new Date();
const currentDate = `${months[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()}`;
</script>

<template>
  <div class="headerComponent-container">
    <div class="todo-title">
      <h2 class="header-title">Hello <br> welcome back</h2>
      <p class="curr-date">{{ currentDate }}</p>
      <button class="hero_btn">
        <RouterLink to="/todos">Continue</RouterLink>
      </button>
    </div>

    <div class="todo-sum">
      <div class="personal">
        <h2 class="personal-count">{{ personalCount || 0 }}</h2>
        <p>personal</p>
      </div>

      <div class="business">
        <h2 class="business-count">{{ businessCount || 0 }}</h2>
        <p>business</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.headerComponent-container {
  color: #ffffff;
  background-image: url('../assets/bg.jpg');
  background-position: center;
  background-size: cover;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: space-between;
}

a {
  text-decoration: none;
  color: inherit;
}

.headerComponent-container .todo-title {
  width: 65%;
  padding: 10%;
  box-sizing: border-box;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
}

.hero_btn {
  border: none;
  background: #fff;
  outline: none;
  padding: 15px 0px;
  font-size: inherit;
  cursor: pointer;
  border-radius: 8px;
  font-family: 'Spartan';
}

.hero_btn a {
  padding: 15px 30px;
  min-width: 150px;
  border-radius: inherit;
}

.todo-title h2 {
  font-size: 4.1rem;
  line-height: 1.5;
  font-weight: 600;
  margin: 0px;
  text-transform: capitalize;
}

.todo-title p {
  font-size: 1.5rem;
  text-transform: capitalize;
}

.headerComponent-container .todo-sum {
  box-sizing: border-box;
  width: 35%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #00000060;
}

.todo-sum div {
  width: 50%;
  text-transform: capitalize;
  text-align: center;
}

.todo-sum div h2 {
  font-size: 3rem;
  margin: 0px;
}

.todo-sum div p {
  margin: 5px;
}
</style>