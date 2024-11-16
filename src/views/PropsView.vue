<template>
  <BasePage>
    <PostList :posts="posts" />
  </BasePage>
</template>

<script setup>
import { ref } from 'vue';
import PostList from '@/components/PostList.vue';

const posts = ref([
  { title: "Welcome to the blog!", body: "Lorem ipsum", id: 1 },
  { title: "Top 5 CSS tips", body: "Lorem ipsum", id: 2 }
])
</script>
