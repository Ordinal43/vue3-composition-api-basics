<template>
  <BasePage>
    <input type="text" v-model="search">
    <p>Search term - {{ search }}</p>
    <div v-for="name in matchingNames" :key="name">
      {{ name }}
    </div>
  </BasePage>
</template>

<script setup>
import BasePage from '@/components/BasePage.vue';
import { computed, ref } from 'vue';

const search = ref('')
const names = ref(['mario', 'luigi', 'yoshi', 'toad', 'koopa', 'peach', 'daisy', 'boo', 'bowsette'])
/**
 * Here's how we declare a computed variable.
 * 
 * computed() accepts a method that must return a value.
 */
const matchingNames = computed(() =>
  names.value.filter(name => name.includes(search.value))
)
</script>
