<template>
  <div class="home">
    <h1><code>watch()</code> vs <code>watchEffect()</code></h1>

    <input type="text" v-model="search">
    <p>Search term - {{ search }}</p>
    <div v-for="name in matchingNames" :key="name">
      {{ name }}
    </div>

    <button @click="handleClick">Stop Watching</button>
  </div>
</template>

<script>
import { computed, ref, watch, watchEffect } from 'vue';

/**
 * Good reading material:
 * Vue docs on watch and watchEffect()  : https://vuejs.org/guide/essentials/watchers.html#watcheffect
 */

export default {
  name: 'HomeView',
  setup() {
    const search = ref('')
    const names = ref(['mario', 'luigi', 'yoshi', 'toad', 'bowser', 'peach', 'daisy'])

    /**
     * watch() only tracks the explicitly watched source.
     * It won't track anything accessed inside the callback.
     * 
     * Also pretty redundant when we simply wanted to use
     * the watched data again in the callback method.
     */
    const stopWatch = watch(search, () => {
      console.log('watch() ran!', search.value);
    }, { immediate: true })

    /**
     * watchEffect() automatically tracks every reactive property
     * accessed during its synchronous execution!
     * 
     * So you can basically watch multiple data here.
     * 
     * Will run immediately by default (equivalent to { immediate: true })
     */
    const stopWatchEffect = watchEffect(() => {
      console.log('watchEffect() ran!', search.value);
    })

    const handleClick = () => {
      /**
       * We can stop a watch() and watchEffect() by storing them inside a method
       * and then invoking it whenever we want to. 
       */
      stopWatch()
      stopWatchEffect()
    }
    
    const matchingNames = computed(() =>
      names.value.filter(name => name.includes(search.value))
    )

    return { search, matchingNames, handleClick }
  }
}
</script>
