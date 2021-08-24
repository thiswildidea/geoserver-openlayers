<template>
  <div class="mapscreen">
    <div id="container" class="calcite-map calcite-widgets-light" />
  </div>
</template>
<script>
import mapctx from './mapctx'
export default {
  name: 'MapControl',
  components: { },
  data() {
  },
  computed: {

  },
  mounted() {
    this.inituserConfig()
  },
  beforeDestroy() {

  },
  methods: {
    inituserConfig() {
      this.initmap()
    },
    async initmap() {
      const response = await mapctx.initmap()
      this.$store.commit('account/setMap', response.map)
    }
  }
}
</script>
<style lang="scss" scoped>
  .map {
     height: 800px;
     width: 1000px;
  }
</style>
