<template>
  <div class="weather-panel-main">
      <weather-info class="wthr-info" v-for="location in locations" :key="location" :location="location"/>
  </div>
</template>

<script>
import WeatherInfo from './WeatherPanel/WeatherInfo.vue'
import AddLocation from './WeatherPanel/AddLocation.vue'
export default {
  name: 'WeatherPanel',
  components: {
      WeatherInfo,
      AddLocation,
  },
  props: {
      locations:{
          type: Array,
      }
  }
}
</script>

<style lang="less" scoped>
.weather-panel-main {
    width: 80%;
    margin: auto;
    margin-top: 60px;
    display: flex;
    flex-wrap: wrap-reverse;
    .wthr-info {
        width: 40%;
        height: 40%;
        padding: 10px;
    }
    .wthr-info { flex-grow: 1; }
}
</style>
