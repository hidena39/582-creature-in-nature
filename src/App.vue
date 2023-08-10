<template>
  <!-- <img alt="Vue logo" src="./assets/logo.png" />
  <HelloWorld msg="Welcome to Your Vue.js App" /> -->
  <h1>Creature in Nature</h1>
  <h2>Animals/Vertebrates</h2>
  <!-- <CreatureForm></CreatureForm> -->
  <CreatureList :cards="cards"></CreatureList>
</template>

<script>
// import HelloWorld from "./components/HelloWorld.vue";
import CreatureList from "./components/CreatureList.vue";
// import CreatureForm from "./CreatureForm.vue";

export default {
  name: "App",
  data() {
    return {
      cards: [
        {
          id: "2",
          date: "2023-08-01",
          location: "Vanier Colledge",
          image: "https://placehold.co/400x400/orange/white",
          name: "Old World sparrows",
          description:
            "Old World sparrows are a group of small passerine birds forming the family Passeridae. They are also known as true sparrows, a name also used for a particular genus of the family, Passer.[1] They are distinct from both the New World sparrows, in the family Passerellidae, and from a few other birds sharing their name, such as the Java sparrow of the family Estrildidae. ",
          categories: "mammals",
        },
        {
          id: "3",
          date: "2023-08-01",
          location: "Vanier Colledge",
          image: "https://placehold.co/400x400/green/white",
          name: "Old World sparrows",
          description:
            "Old World sparrows are a group of small passerine birds forming the family Passeridae. They are also known as true sparrows, a name also used for a particular genus of the family, Passer.[1] They are distinct from both the New World sparrows, in the family Passerellidae, and from a few other birds sharing their name, such as the Java sparrow of the family Estrildidae. ",
          categories: "birds",
        },
        {
          id: "4",
          date: "2023-08-01",
          location: "Vanier Colledge",
          image: "https://placehold.co/400x400/blue/white",
          name: "Old World sparrows",
          description:
            "Old World sparrows are a group of small passerine birds forming the family Passeridae. They are also known as true sparrows, a name also used for a particular genus of the family, Passer.[1] They are distinct from both the New World sparrows, in the family Passerellidae, and from a few other birds sharing their name, such as the Java sparrow of the family Estrildidae. ",
          categories: "fishes",
        },
        {
          id: "5",
          date: "2023-08-01",
          location: "Vanier Colledge",
          image: "https://placehold.co/400x400/red/white",
          name: "Old World sparrows",
          description:
            "Old World sparrows are a group of small passerine birds forming the family Passeridae. They are also known as true sparrows, a name also used for a particular genus of the family, Passer.[1] They are distinct from both the New World sparrows, in the family Passerellidae, and from a few other birds sharing their name, such as the Java sparrow of the family Estrildidae. ",
          categories: "amphibians",
        },
      ],
    };
  },
  components: {
    // HelloWorld,
    CreatureList,
    // CreatureForm,
  },
};
</script>
