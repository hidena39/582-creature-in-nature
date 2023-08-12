<template>
  <!-- <img alt="Vue logo" src="./assets/logo.png" />
  <HelloWorld msg="Welcome to Your Vue.js App" /> -->
  <div class="largeContainer">
    <h1>Creature in Nature</h1>
    <h2>Animals/Vertebrates</h2>
    <CreatureForm @ArrayOfInput="PushArray" />
    <CreatureList :cards="cards"></CreatureList>
  </div>
</template>

<script>
// import HelloWorld from "./components/HelloWorld.vue";
import CreatureList from "./components/CreatureList.vue";
import CreatureForm from "./components/CreatureForm.vue";

export default {
  name: "App",
  data() {
    return {
      cards: [
        {
          id: 2,
          date: "2023-08-01",
          location: "Vanier Colledge",
          image: "https://placehold.co/400x500/orange/white",
          name: "Old World sparrows",
          description:
            "Old World sparrows are a group of small passerine birds forming the family Passeridae. They are also known as true sparrows, a name also used for a particular genus of the family, Passer.[1] They are distinct from both the New World sparrows, in the family Passerellidae, and from a few other birds sharing their name, such as the Java sparrow of the family Estrildidae. ",
          categories: "mammals",
        },
        {
          id: 3,
          date: "2023-08-01",
          location: "Vanier Colledge",
          image: "https://placehold.co/400x500/green/white",
          name: "Old World sparrows",
          description:
            "Old World sparrows are a group of small passerine birds forming the family Passeridae. They are also known as true sparrows, a name also used for a particular genus of the family, Passer.[1] They are distinct from both the New World sparrows, in the family Passerellidae, and from a few other birds sharing their name, such as the Java sparrow of the family Estrildidae. ",
          categories: "birds",
        },
        {
          id: 4,
          date: "2023-08-01",
          location: "Vanier Colledge",
          image: "https://placehold.co/400x500/blue/white",
          name: "Old World sparrows",
          description:
            "Old World sparrows are a group of small passerine birds forming the family Passeridae. They are also known as true sparrows, a name also used for a particular genus of the family, Passer.[1] They are distinct from both the New World sparrows, in the family Passerellidae, and from a few other birds sharing their name, such as the Java sparrow of the family Estrildidae. ",
          categories: "fishes",
        },
        {
          id: 5,
          date: "2023-08-01",
          location: "Vanier Colledge",
          image: "https://placehold.co/400x500/red/white",
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
    CreatureForm,
  },
  methods: {
    PushArray(obj) {
      this.cards.push(obj);
      console.log("push:", this.cards);
    },
  },
};
</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
  border: 0;
  box-sizing: border-box;
}
.largeContainer {
  width: 100vw;
  height: 100vh;
  padding: 2rem;
  overflow: scroll;
  border: 2px solid black;
}
</style>
