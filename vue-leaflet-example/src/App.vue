<template>
  <div id="app">
    <b-button class="m-1" @click="show = 1">Show 1</b-button>
    <b-button class="m-1" @click="show = 2">Show 2</b-button>
    <b-button class="m-1" @click="show = 3">Show 3</b-button>
    <br />
    <div class="m-3">
      <Example1 v-if="show == 1" />
      <Example2 v-if="show == 2" />
      <Example3 v-if="show == 3" />
    </div>
  </div>
</template>

<script>
import Example1 from "./components/Example1.vue";
import Example2 from "./components/Example2.vue";
import Example3 from "./components/Example3.vue";
export default {
  name: "App",
  components: { Example1, Example2, Example3 },
  data() {
    return {
      show: 3,
    };
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
