<template>
  <BasePage>
    <p>My name is {{ name }} and my age is {{ age }}</p>
    <button @click="handleClick">Click Me</button>
  </BasePage>
</template>

<script setup>
let name = 'mario'
let age = 30

const handleClick = () => {
  console.log('You clicked me!');
}
</script>
