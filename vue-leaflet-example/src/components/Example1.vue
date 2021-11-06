<template>
  <b-row>
    <b-col>
      <table class="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Label</th>
            <th scope="col">Coordinates</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(location, key) in locations" :key="key">
            <td>
              {{ location.id }}
            </td>
            <td>
              {{ location.label }}
            </td>
            <td>
              {{ location.latlng }}
            </td>
          </tr>
        </tbody>
      </table>
      <hr />
      <div>item info</div>
    </b-col>
    <b-col>
      <LMap :zoom="zoom" :center="center" style="height: 500px; width: 100%">
        <LTileLayer :url="url" :attribution="attribution" />
        <LControl position="topleft">
          <b-button @click="flipActive">
            {{ isActive ? "Deactivate" : "Activate" }}
          </b-button>
        </LControl>
        <LMarker
          v-for="(location, key) in locations"
          :key="key"
          :lat-lng="location.latlng"
          :icon="icon"
        >
        </LMarker>
        <LFreeDraw v-model="polygons" :mode="mode" @markers="markerHandler" />
      </LMap>
    </b-col>
  </b-row>
</template>

<script>
import { LMap, LTileLayer, LMarker, LControl } from "vue2-leaflet";
import L from "leaflet";
import LFreeDraw from "vue2-leaflet-freedraw";
import { NONE, ALL, MarkerEvent } from "leaflet-freedraw";

export default {
  name: "Example",
  components: {
    LMap,
    LMarker,
    LTileLayer,
    LControl,
    LFreeDraw,
  },
  computed: {
    mode() {
      return this.isActive ? ALL : NONE;
    },
  },
  data() {
    return {
      zoom: 11,
      center: [46.16278, 16.8275],
      url: "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
      attribution:
        '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
      locations: {
        kc: {
          id: 1,
          label: "Item 1",
          latlng: [46.16278, 16.8275],
        },
        lg: {
          id: 2,
          label: "Item 2",
          latlng: [46.29999, 16.84999],
        },
        pt: {
          id: 3,
          label: "Item 3",
          latlng: [46.19999, 16.88332],
        },
      },
      icon: L.icon({
        iconUrl: "https://cdn-icons-png.flaticon.com/512/684/684809.png",
        iconSize: [40, 40],
        iconAnchor: [25, 25],
      }),
      polygons: [],
      isActive: false,
    };
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
