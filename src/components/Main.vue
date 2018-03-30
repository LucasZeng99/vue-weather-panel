<template>
  <div class="site-main">
    <site-header />
    <div class="weather-panel-view"> 
      <!-- add v-if if there is any weather panel -->
      <weather-panel :locations="locations" />
      <!-- add v-for for all the panels -->
    </div>
  </div>
</template>

<script>
import WeatherPanel from './WeatherPanel.vue'
import SiteHeader from './Header/index.vue'
export default {
  name: 'Main',

  components: {
    WeatherPanel,
    SiteHeader,
  },

  computed: {
    locations() {
      let locationsFromState = this.$store.state.locations
      return locationsFromState? locationsFromState: []
    }
  },
  
  mounted () {
    let newLocations = this.fetchCities()
    this.$store.commit('updateLocations', newLocations)
  },

  methods: {
    fetchCities() {
      let localLocations = localStorage.getItem('locations').split(',')
      if (!localLocations[0]) return null  // when locations is there but has nothing

      return localLocations
    }
  }
}
</script>

<style lang="less" scoped>
.site-main {
  height: 100%;
  width: 100%;
}
</style>

