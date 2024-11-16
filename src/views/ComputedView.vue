<template>
  <div class="home">
    <h1>Using <code>computed()</code></h1>

    <input type="text" v-model="search">
    <p>Search term - {{ search }}</p>
    <div v-for="name in matchingNames" :key="name">
      {{ name }}
    </div>
  </div>
</template>

<script>
import { computed, ref } from 'vue';

export default {
  name: 'ComputedView',
  setup() {
    const search = ref('')
    const names = ref(['mario', 'luigi', 'yoshi', 'toad', 'bowser', 'peach', 'daisy'])
    /**
     * Here's how we declare a computed variable.

     * 
     * computed() accepts a method that must return a value.
     */
    const matchingNames = computed(() =>
      names.value.filter(name => name.includes(search.value))
    )

    /**
     * We only return the variables we want to expose to the template or options API.
     * 
     * Notice how `names` is excluded since we're not using it anywhere outside the setup()
     */
    return { search, matchingNames }
  }
}
</script>
