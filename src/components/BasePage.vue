<template>
  <h1 v-html="route.meta.title"></h1>
  <slot></slot>
</template>

<script setup>
import { useRoute } from 'vue-router';

const route = useRoute()
</script>
