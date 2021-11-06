<template>
  <b-container>
    <LMap :center="center" :zoom="zoom" style="height: 500px; width: 100%">
      <LControl position="topleft">
        <b-button @click="flipActive">
          {{ isActive ? "Deactivate" : "Activate" }}
        </b-button>
      </LControl>
      <LTileLayer url="https://{s}.tile.osm.org/{z}/{x}/{y}.png" />
      <LFreeDraw v-model="polygons" :mode="mode" @markers="markerHandler" />
    </LMap>
  </b-container>
</template>

<script>
import { LMap, LTileLayer, LControl } from "vue2-leaflet";
import LFreeDraw from "vue2-leaflet-freedraw";
import { NONE, ALL, MarkerEvent } from "leaflet-freedraw";

export default {
  components: {
    LFreeDraw,
    LMap,
    LTileLayer,
    LControl,
  },
  data() {
    return {
      polygons: [],
      isActive: false,
      zoom: 11,
      center: [46.16278, 16.8275],
    };
  },
  computed: {
    mode() {
      return this.isActive ? ALL : NONE;
    },
  },
  methods: {
    flipActive() {
      this.isActive = !this.isActive;
    },
    markerHandler(event = new MarkerEvent()) {
      // using the native markers event directly
      console.log(event.latLngs);
      console.log("polygons", this.polygons);
      this.polygons = [];
    },
  },
};
</script>