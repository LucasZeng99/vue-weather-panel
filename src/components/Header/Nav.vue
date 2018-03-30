<template>
  <div class="site-nav">
      <router-link class="nav-item" :to="'/'">home</router-link>
      <add-location class="nav-wthr-add nav-item"/>
  </div>
</template>

<script>
import AddLocation from '../WeatherPanel/AddLocation.vue'
export default {
  name: 'Nav',
  components: { AddLocation },
}
</script>

<style lang="less" scoped>
.site-nav {
  display: flex;
  height: 100%;
  align-items: center;
  justify-content: center;
  background-color: rgb(105, 248, 100);
}

.nav-item {
  background-color: rgb(119, 65, 206);
  margin-right: auto;
  display: flex;
  min-width: 150px;
  height: 100%;
  align-items: center;
  justify-content: center;
  color: white;
  text-decoration: none;
  padding: 0 20px;
  transition: 0.5s;
  font-size: 1.5rem;
  font-weight: 100;
  &.active {
    box-shadow: inset 0 -2px 0 0 var(--primary-color);
  }

  &:hover {
    background-color: rgb(247, 129, 212);
    color: rgb(255, 255, 255);
  }
}
.weather-add-main {
    background-color:rgb(255, 143, 158);
    margin: 6px;
    display: flex;
    p {
        flex-grow: 1;
    }
    input {
        font-size: 1.5rem;
        padding: 6px;
        flex-grow: 2;
        &:focus {
            outline: 4px solid rgb(255, 52, 147);
        }
    }
}
</style>