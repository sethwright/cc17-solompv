<template>
  <div id="mapContainer">
    <GmapMap
      :zoom="13"
      :center="{ lat: 35.685, lng: 139.76 }"
      map-type-id="roadmap"
      style="width: 100%; height: 50vh"
    >
      <GmapMarker
        v-for="location in locations"
        :key="location.key"
        :position="location.position"
        :animation="location.defaultAnimation"
        @rightclick="markerRightClicked"
      />
    </GmapMap>
  </div>
</template>

<script>
import { gmapApi } from "vue2-google-maps";

export default {
  // mounted() {
  //   this.getLocations();
  // },
  computed: {
    google: gmapApi
  },
  props: ['locations']
  // methods: {
  //   getLocations() {
  //     this.$store.dispatch("loadMarkers");
  //   },
  //   markerRightClicked() {}
  // }
};
</script>

<style>
#mapContainer {
  top: 2vh;
  width: 95vw;
  height: 50vh;
  box-shadow: 1px 1px 10px 1px rgba(0, 0, 0, 0.171);
}
</style>
