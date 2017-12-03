<template lang="html">
  <div class="google-map" :id="mapName"></div>
</template>

<script>

export default {
  name: 'google-map',
  props: ['name', 'resource'],
  data: function () {
    return {
      mapName: this.name + "-map",
      resources: this.$store.state.resources,
      occurrencePosition: {
        latitude: this.$store.currentOccurence.latitude,
        longitude: this.$store.currentOccurence.longitude
      },
      map: null
    }
  },
  mounted: function () {
    this.initMap()
  },
  methods: {
    initMap() {
      this.plotResources()
      this.plotoccurrence()
    },
    plotoccurrence() {
      const position = new google.maps.LatLng(this.occurrencePosition.latitude, this.occurrencePosition.longitude)

      const marker = new google.maps.Marker({
        position,
        icon: '../src/assets/images/fire.png',
        map: this.map
      })

    },
    plotResources() {
      const element = document.getElementById(this.mapName)
      const options = {
        zoom: 13,
        center: new google.maps.LatLng(this.occurrencePosition.latitude, this.occurrencePosition.longitude)
      }
      this.map = new google.maps.Map(element, options)

      this.resources.forEach((resource) => {
        const position = new google.maps.LatLng(resource.latitude, resource.longitude)

        const marker = new google.maps.Marker({
          position,
          label: resource.id,
          icon: '../src/assets/images/firetruck.png',
          map: this.map
        })
      })
    }
  },
  computed: {

  }
}
</script>

<style scoped>
.google-map {
  width: 100%;
  height: 500px;
  margin: 0 auto;
  background: gray;
}
</style>
