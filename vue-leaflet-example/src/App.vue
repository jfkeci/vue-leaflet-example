<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Example1</router-link> |
      <router-link to="/example2">example2</router-link> |
      <router-link to="/example3">example3</router-link> |
      <router-link to="/example4">example4</router-link>
    </div>
    <router-view />
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
