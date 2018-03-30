import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default config => new Vuex.Store({
    state: {
      ...config
    },
    mutations: {
      updateLocations (state, newLocations=[]) {
        if (newLocations) {
          state.locations? state.locations.push(...newLocations)
          : state.locations = []
        }
      },
      updateOneLocation (state, newLocations) {
        if (!state.locations) state.locations = [newLocations]
        else {
          if (newLocations) {
            let repeat = false

            state.locations.forEach(location => {
              if (location === newLocations) repeat = true
            })

            if (repeat) console.log('you cannot have two same city name.')
            else { 
              state.locations.push(newLocations)
              localStorage.setItem('locations', state.locations)
            }
          }
        }
      },
      deleteOnePanel (state, location) {
        if (state.locations) {
          let target = null

          state.locations.forEach((stateLoc, index) => {
            if (stateLoc === location) target = index
          })

          if (target != null) { 
            state.locations.splice(target, 1)
            localStorage.setItem('locations', state.locations)
          }
        }
      },
      storeLocations (state) {
        localStorage.setItem('locations', state.locations)
      }
    }
  })