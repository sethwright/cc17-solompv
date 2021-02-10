<template>
  <div class="antialiased text-gray-900 flex flex-col min-h-screen bg-gray-200">
    <Map v-bind:locations="viewableParking"/>
    <div class="titlebar"><h1>{{title}}</h1> </div>

    <!-- list of filters -->
    <div class="flex justify-center items-center flex-1">
      <Drop>
        <template slot="toggle">
          <button
            class="relative flex items-center focus:outline-none pl-5 pr-3 py-2 rounded-lg bg-gray-300 text-gray-800 font-semibold"
          >
            Cities
          </button>
        <!-- why is template here? -->
        </template> 
        <DropContent v-bind:key=city v-for="city of cities">
          <DropItem
          v-on:click="setFilter(city)"
          >{{city}}</DropItem>
        </DropContent>
      </Drop>
    </div>
    <div>
    <!-- list of filtered options -->
    </div>
  </div>
</template>

<script>
import Map from "./Map";
import Drop from "./components/Drop.vue";
import DropContent from "./components/DropContent.vue";
import DropItem from "./components/DropItem.vue";
import axios from "axios";

export default {
  name: "biker",
  components: {
    Map,
    Drop,
    DropContent,
    DropItem
  },
  methods: {
    async getLocations () {
      const fetchedLocations = await axios.get("/api/locations")
      this.locations = fetchedLocations.data;
    },
    setFilter (criteria) {
      console.log('🔥')
      this.viewableParking = this.locations.filter((each) => each.city === criteria);
    }
  },
  data: () => ({
    title: "🚵🏼‍♂️  bike'r",
    locations: [],
    cities: ["Shibuya-ku", "Chiyoda-ku", "Chuo-ku"],
    viewableParking: []
  }),
  async created() {
    await this.getLocations();
    this.viewableParking = this.locations;    
  }
};
</script>

<style>
.app {
margin: 2%;
}
body {
background-color: whitesmoke;
}
.titlebar {
font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
font-size: 150%;
}
</style>