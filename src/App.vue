<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
import Main from '@/components/Main.vue'
export default {
  name: 'app',
  data () {
    return {
      
    }
  },
}
</script>

<style lang="scss">
@media (max-width: 480px) {
    html {
        font-size: 12px;
    }
}

@media (min-width: 480px) {
    html {
        font-size: 13px;
    }
}

@media (min-width: 768px) {
    html {
        font-size: 40px;
    }
}

@media (min-width: 992px) {
    html {
        font-size: 40px;
    }
}

@media (min-width: 1200px) {
    html {
        font-size: 16px;
    }
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
body {
  margin: 0;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
