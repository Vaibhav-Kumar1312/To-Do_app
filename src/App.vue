<template>
  <nav>
    <router-link to="/">Sign Up</router-link> |
    <router-link :to="{ name: 'sgnin' }">Sign In</router-link>
    <!--this is how we use named routes--:to='{name:"name of the route"}' -->
    <input type="text" label="Add task" placeholder="Add a To-do" />
    <button>ADD</button>
  </nav>
  <router-view />
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
