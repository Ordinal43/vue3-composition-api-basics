<template>
  <div class="container">
    <nav>
      <router-link
        v-for="route in router.getRoutes()"
        :key="route.path"
        :to="{ name: route.name }"
      >
        <span v-html="route.meta.title"></span>
      </router-link>
    </nav>
    <div class="content">
      <router-view/>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router';

const router = useRouter()
</script>

<style>
body {
  margin: 0;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100vh;
}

.container {
  height: 100%;
  display: flex;
  align-items: stretch;
}

nav {
  padding: 30px;
  overflow-y: scroll;
  display: flex;
  flex-direction: column;
  background: #2c3e50;
  flex: 0 0 20%;
}

.content {
  flex: 1 1 auto;
}

nav a {
  text-align: left;
  font-weight: bold;
  color: #42b983;
  padding: 10px;
  text-decoration: none;
}

nav a.router-link-exact-active {
  color: white;
}

code {
  padding: 2px 7px;
  border-radius: 4px;
}

nav code {
  background: #17212c;
}

.content code {
  background: lightgrey;
}
</style>
