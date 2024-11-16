<template>
  <div class="home">
    <h1>Using <code>ref()</code> for basic data reactivity</h1>
    <!--
      `name` and `age` will be reactive because we declared them using ref() on setup().

      We also don't need to use [ref_name].value when inside the template
      since Vue automatically proxies the value.
    -->
    <p>My name is {{ name }} and my age is {{ age }}</p>
    <button @click="handleClick">Click Me</button>
    <button @click="age++">Add 1 to Age</button>
    <input type="text" v-model="name">
  </div>
</template>

<script>
import { ref } from 'vue';

export default {
  name: 'RefView',
  setup() {
    /**
     * Now we declare each data using ref() to make them reactive!
     * 
     * Also notice how we use const now because
     * we want the reference object itself to be static.
     */
    const name = ref('Mario')
    const age = ref(30)

    const handleClick = () => {
      /**
       * To change the value of a reactive variable inside the <script> tag,
       * we must refer to them using [ref_name].value
       */
      name.value = 'Luigi'
      age.value = 35
    }

    return {
      name, age, handleClick
    }
  }
}
</script>