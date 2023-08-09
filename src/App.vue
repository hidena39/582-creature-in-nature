<template>
  <!-- <img alt="Vue logo" src="./assets/logo.png" />
  <HelloWorld msg="Welcome to Your Vue.js App" /> -->
  <h1>Creature in Nature</h1>
  <CourseList />
</template>
<h1>animals vertebrates</h1>

<script>
// import HelloWorld from "./components/HelloWorld.vue";
import CreatureList from "./CreatureList.vue";
import CreatureInput from "./CreatureInput.vue";

export default {
  name: "App",
  components: {
    // HelloWorld,
    CreatureList,
    CreatureInput,
  },
};
</script>
