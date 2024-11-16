<template>
  <div class="post-list">
    <h3>List of posts:</h3>
    <p v-for="post in posts" :key="post.id">
      {{ post.title }}
    </p>
  </div>
</template>

<script setup>
const props = defineProps({
  posts: Array
})

console.log(props.posts);
</script>
