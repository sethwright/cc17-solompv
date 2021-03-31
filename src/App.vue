<template>
  <div class="antialiased text-gray-900 flex flex-col min-h-screen bg-gray-200">
    <Map v-bind:locations="viewableParking"/>
    <div class="titlebar"><h1>{{title}}</h1> </div>

    <!-- list of filters -->
    <div class="flex justify-center items-center flex-1">
      <Drop>
        <template slot="toggle">
          <button>
            Cities
          </button>
        <!-- why is template here? -->
        </template>
        <div v-bind:key=city v-for="city of cities">
          <p
            v-on:click="setCityFilter(city)"
          >{{city}}</p>
        </div>
      </Drop>
      <Drop>
        <template slot="toggle">
          <button>
            Free Only
          </button>
        <!-- why is template here? -->
        </template>
        <DropContent v-bind:key=cost v-for="cost of price">
          <DropItem
          v-on:click="setFreeFilter(cost)"
          >{{cost}}</DropItem>
        </DropContent>
      </Drop>
      <button>Clear Filter</button>
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
    setCityFilter (criteria) {
      console.log('setCityFilter has been called 🔥')
      this.viewableParking = this.locations.filter((each) => each.city === criteria);
    },
    setFreeFilter () {
      // TODO
    },
    resetFilter () {
      this.viewableParking = this.locations;
    }
  },
  data: () => ({
    title: "🚵🏼‍♂️  bike'r",
    locations: [],
    cities: [],
    price: false,
    viewableParking: [],
    viewableFilter: 'none'
  }),
  async created() {
    await this.getLocations();
    this.viewableParking = this.locations;
    this.cities = this.locations.map((eachLocation) => { return eachLocation.city });
    console.log(this.cities);
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