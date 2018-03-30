<template>
  <div class="wthr-info-main" v-if="showWeather" :style="{backgroundColor: activeColor}">
      <p>{{location}}</p>
      <div class="wthr-info-temp">
          <p><strong>Temperature</strong>: {{parseInt(weatherData.main.temp - 273.15, 10)}}°C</p></div>
      <div class="wthr-info-humidity">
          <p><strong>Humidity</strong>: {{weatherData.main.humidity}}%</p></div>
      <button @click="deletePanel">X</button>
  </div>
</template>

<script>
export default {
  name: 'WeatherInfo',
  props: {
      location: {
          type: String,
          required: true
      }
  },
  data () {
      return {
          activeColor: null,
          deleted: false,
          weatherData: {
              main: {humidity: null, temp: null}
          },
          showWeather: false,
      }
  },
  created () {
      this.fetchWeatherData()
      this.changeColor()
  },
  methods: {
      fetchWeatherData () {
          let url = 'https://api.openweathermap.org/data/2.5/weather?q='
          url = url + this.location + '&APPID=34bab7b14be399ac371f345e9d2235d5'
          this.$http.get(url).then((response) => {
                this.weatherData = response.data
                this.showWeather = true
          })
          .catch(err => {
              this.deletePanel()
          }) // grab data from weather api
      },
      deletePanel () {
          this.deleted = true
          this.$store.commit('deleteOnePanel', this.location)
      },
      changeColor () {
          var letters = '0123456789ABCDEF';
          var color = '#';
          for (var i = 0; i < 6; i++) {
              color += letters[Math.floor(Math.random() * 16)];
          }
          this.activeColor = color
          setInterval(() => {
            var letters = '0123456789ABCDEF';
            var color = '#';
            for (var i = 0; i < 6; i++) {
                color += letters[Math.floor(Math.random() * 16)];
            }
            this.activeColor = color
            }, 3000)
      }
  },
}
</script>

<style lang="less" scoped>
.wthr-info-main {
    transition: 3s;
    border: 3px dashed palevioletred;
    margin: 3px;
    button {
        font-size: 1.2rem;
        display: block;
        margin: 0 auto;
        font-weight: 100;
    }
    p {
        margin: 0;
    }
}
</style>