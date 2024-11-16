<template>
  <div class="home">
    <h1>Template refs basics</h1>
    <p ref="p">My name is {{ name }} and my age is {{ age }}</p>
    <button @click="handleClick">Click Me</button>
  </div>
</template>

<script>
import { ref } from 'vue';

export default {
  name: 'TemplateRefView',
  setup() {
    let name = 'mario'
    let age = 30

    /**
     * Declare a template reference.
     * 
     * This ref object will not be associated with the element inside <template>
     * until it is returned at the end of setup().
     * 
     * ref() will be very useful later on for setting up reactivity.
     */
    const p = ref(null)
    console.log(p, p.value); // p.value will only return the value we declared it as.

    const handleClick = () => {
      /**
       * Logging here will actually print the selected DOM element
       * because the method is already returned at the time we can see
       * the button and is able to click it.
       */
      console.log(p, p.value);
      
      /**
       * These are vanilla JS methods.
       * We use it to try and manipulate the properly selected ref
       */
      p.value.classList.add('test')
      p.value.textContent = "Hello, world!"
    }

    return {
      name, age, handleClick, p
    }
  }
}
</script>
