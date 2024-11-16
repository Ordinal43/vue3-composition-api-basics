<template>
  <div class="home">
    <h1>Basic vue3 composition API using <code>setup()</code></h1>
    <p>My name is {{ name }} and my age is {{ age }}</p>
    <button @click="handleClick">Click Me</button>
  </div>
</template>

<script setup>
let name = 'mario'
let age = 30

const handleClick = () => {
  console.log('You clicked me!');
}
</script>
