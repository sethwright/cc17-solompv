<template>
  <div class="app">
    <Map />
    <div class="titlebar"><h1>{{title}}</h1> </div>
  </div>
</template>

<script>
import Map from "./Map";

export default {
  name: "biker",
  components: {
    Map
  },
  data: () => ({
    title: "🚵🏼‍♂️  bike'r",
    view: "all",
  }),
};
</script>
<style>
.titlebar {
font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
}
.app {
margin: 2%;
}
body {
background-color: whitesmoke;
}
</style>