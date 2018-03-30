<template>
  <div class="site-header">
      <site-nav  />
  </div>
</template>

<script>
import SiteNav from './Nav.vue'

export default {
    name: 'SiteHeader',
    components: { 
        SiteNav,
    },
    data() {
        return {

        }
    }
}
</script>

<style lang="less" scoped>
.site-header { 
    width: 100%;
    height: 10vh;
}
</style>
