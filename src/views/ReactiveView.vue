<template>
  <BasePage>
    <h2>Refs</h2>
    <p>{{ personOne.name }} - {{ personOne.age }}, Job: {{ jobOne }}</p>
    <button @click="updatePersonOne">Update person one</button>
    <h2>Reactive</h2>
    <p>{{ personTwo.name }} - {{ personTwo.age }}, Job: {{ jobTwo }}</p>
    <button @click="updatePersonTwo">Update person two</button>
  </BasePage>
</template>

<script setup>
import { ref, reactive } from 'vue';
/**
 * Good reading material:
 * - Use cases for refs vs reactive   : https://stackoverflow.com/a/65262638
 * - Why use refs or reactive?        : https://vuejsdevelopers.com/2022/06/01/ref-vs-reactive/
 * - Why reactive can be harmful      : https://dev.to/ycmjason/thought-on-vue-3-composition-api-reactive-considered-harmful-j8c
 * 
 * Recommended is to ONLY USE ONE OR THE OTHER for consistency.
 */

/**
 * Declaring a data using ref() and reactive() may seem similar on the surface...
 * But we can see the difference when we want to access them (see below).
 */
const personOne = ref({ name: 'Mario', age: 30 });
const personTwo = reactive({ name: 'Luigi', age: 35 });

/**
 * The downside of using reactive() is:
 * !! We can only declare OBJECTS, not primitive values !!
 * 
 * See a example below
 */
const jobOne = ref('Plumber') // This works!
const jobTwo = reactive('Plumber') // This cannot work.

/**
 * To access data declared using ref(),
 * we must access it via [ref_name].value
 */
const updatePersonOne = () => {
  personOne.value.name = 'Super Mario'
  personOne.value.age = 40
  jobOne.value = "Electrician"
}

/**
 * To access data declared using ref(),
 * we can access it straight using its [ref_name].
 * 
 * But it's not a replacement for refs
 */
const updatePersonTwo = () => {
  personTwo.name = 'Super Luigi'
  personTwo.age = 45
  /**
   * None of these will work since reactive can't accept primitive values.
   * These 2 will cause an 'invalid assignment' error!
   */
  try {
    jobTwo = "Electrician"
    jobTwo = reactive("Electrician")
  } catch (error) {
    alert(error)
    console.error(error)
  }
}
</script>