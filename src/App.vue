<script setup>
import { RouterView } from 'vue-router';
import HeroComponent from './components/HeroComponent.vue';
</script>

<template>
  <RouterView />
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Lato&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Spartan&display=swap');

body {
  padding: 0px;
  margin: 0px;
}
#app {
  font-family: 'Spartan';
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c2a2a;
  font-size: 16px;
  background-color: #fafcf9;
}
</style>
