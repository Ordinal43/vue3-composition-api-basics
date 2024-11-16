<template>
  <div>
    <ol>
      <li><router-link to="/">Basics</router-link></li>
      <li><router-link :to="{ name: 'TemplateRefView' }">Template Ref</router-link></li>
      <li><router-link :to="{ name: 'RefView' }">Basic reactivity with <code>ref()</code></router-link></li>
      <li><router-link :to="{ name: 'ReactiveView' }"><code>ref()</code> vs <code>reactive()</code></router-link></li>
      <li><router-link :to="{ name: 'ComputedView' }">Using <code>computed()</code></router-link></li>
      <li><router-link :to="{ name: 'WatchView' }"><code>watch()</code> vs <code>watchEffect()</code></router-link></li>
    </ol>
  </div>
  <router-view/>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}

</style>
