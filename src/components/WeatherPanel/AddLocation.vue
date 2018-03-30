<template>
  <div class="weather-add-main">
      <p>Add a city as you please:  </p>
      <input type="text" v-model="location" @keyup.enter="submitLocation">
  </div>
</template>

<script>
export default {
  name: 'WeatherAddLocation',
  data () {
      return {
          location: "",
      }
  },
  methods: {
      submitLocation() {
          if (this.location.length > 0) {
              this.$store.commit('updateOneLocation', this.location)
              this.location = ""
          }
          else { console.log("cannot be void.") }
      }
  }
}
</script>

<style lang="less" scoped>
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
