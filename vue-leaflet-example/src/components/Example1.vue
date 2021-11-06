<template>
  <b-container>
    <div>
      <LMap :zoom="zoom" :center="center" style="height: 500px; width: 100%">
        <LTileLayer :url="url" :attribution="attribution" />
        <l-marker
          v-for="(location, key) in locations"
          :key="key"
          :lat-lng="location"
          :icon="icon"
        >
        </l-marker>
      </LMap>
    </div>
  </b-container>
</template>

<script>
import { LMap, LTileLayer, LMarker } from "vue2-leaflet";
import L from "leaflet";

export default {
  name: "Example",
  components: {
    LMap,
    LMarker,
    LTileLayer,
  },
  data() {
    return {
      zoom: 11,
      center: [46.16278, 16.8275],
      url: "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
      attribution:
        '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
      locations: {
        kc: [46.16278, 16.8275],
        lg: [46.29999, 16.84999],
        pt: [46.19999, 16.88332],
      },
      icon: L.icon({
        iconUrl:
          "https://cdn-icons.flaticon.com/png/512/450/premium/450016.png?token=exp=1636115627~hmac=ecb4fa39beddbc903d06c0c3364938ac",
        iconSize: [40, 40],
        iconAnchor: [20, 20],
      }),
    };
  },
  methods: {},
};
</script>
