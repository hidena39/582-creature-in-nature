<template>
  <!-- <img alt="Vue logo" src="./assets/logo.png" />
  <HelloWorld msg="Welcome to Your Vue.js App" /> -->
  <div class="largeContainer">
    <div class="titleContainer">
      <img
        id="bird"
        src="./assets/img/bird-865x1280.png"
        alt="Illustration of a bird"
      />
      <h1>Creature in Nature</h1>
      <h2>Animals/Vertebrates</h2>
    </div>

    <CreatureForm @ArrayOfInput="PushArray" />
    <CreatureList :cards="cards" @deleteCard="deleteCard"></CreatureList>
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
          id: 1,
          date: "2023-08-01",
          location: "Vanier Colledge",
          image: "https://placehold.co/300x375/884c65/white",
          name: "Old World sparrows",
          description:
            "Old World sparrows are a group of small passerine birds forming the family Passeridae. They are also known as true sparrows, a name also used for a particular genus of the family, Passer.[1] They are distinct from both the New World sparrows, in the family Passerellidae, and from a few other birds sharing their name, such as the Java sparrow of the family Estrildidae. ",
          categories: "mammals",
        },
        {
          id: 2,
          date: "2023-08-01",
          location: "Vanier Colledge",
          image: "https://placehold.co/300x375/594c88/white",
          name: "Old World sparrows",
          description:
            "Old World sparrows are a group of small passerine birds forming the family Passeridae. They are also known as true sparrows, a name also used for a particular genus of the family, Passer.[1] They are distinct from both the New World sparrows, in the family Passerellidae, and from a few other birds sharing their name, such as the Java sparrow of the family Estrildidae. ",
          categories: "mammals",
        },
        {
          id: 3,
          date: "2023-08-01",
          location: "Vanier Colledge",
          image: "https://placehold.co/300x375/4c7288/white",
          name: "Old World sparrows",
          description:
            "Old World sparrows are a group of small passerine birds forming the family Passeridae. They are also known as true sparrows, a name also used for a particular genus of the family, Passer.[1] They are distinct from both the New World sparrows, in the family Passerellidae, and from a few other birds sharing their name, such as the Java sparrow of the family Estrildidae. ",
          categories: "birds",
        },
        {
          id: 4,
          date: "2023-08-01",
          location: "Vanier Colledge",
          image: "https://placehold.co/300x375/4c8856/white",
          name: "Old World sparrows",
          description:
            "Old World sparrows are a group of small passerine birds forming the family Passeridae. They are also known as true sparrows, a name also used for a particular genus of the family, Passer.[1] They are distinct from both the New World sparrows, in the family Passerellidae, and from a few other birds sharing their name, such as the Java sparrow of the family Estrildidae. ",
          categories: "fishes",
        },
        {
          id: 5,
          date: "2023-08-01",
          location: "Vanier Colledge",
          image: "https://placehold.co/300x375/7b884c/white",
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
    deleteCard(cardId) {
      for (let i = 0; i < this.cards.length; i++) {
        if (this.cards[i].id === cardId) {
          this.cards.splice(i, 1);
          break;
        }
      }
    },
  },
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@100;400;500;600;900&family=Montserrat:wght@100;200;400;600;700;900&family=Preahvihear&display=swap");
* {
  margin: 0;
  padding: 0;
  border: 0;
  box-sizing: border-box;
}
/*----------fonts----------*/
html {
  font-size: 16px;
}
h1,
h2,
h3 {
  font-family: "Preahvihear", sans-serif;
  color: rgb(63, 57, 51);
  text-align: center;
}
h1 {
  font-size: 1.6rem;
  line-height: 1.8rem;
}
h2 {
  font-size: 1rem;
  color: rgb(136, 108, 76);
}
h3 {
  font-size: 1.2rem;
  color: rgb(83, 78, 72);
  text-decoration: underline;
}
body,
button {
  font-family: "Montserrat", sans-serif;
  font-size: 1rem;
  line-height: 1.2rem;
  color: black;
}
label {
  font-weight: 700;
}
@media screen and (min-width: 600px) {
  html {
    font-size: 17px;
  }
}
@media screen and (min-width: 900px) {
  html {
    font-size: 18px;
  }
}

/*----------button----------*/
button {
  padding: 0 1rem 0 1rem;
  border-radius: 1rem;
  border: rgb(136, 108, 76) 3px solid;
  background-color: rgb(241, 230, 216);
  font-weight: 600;
  &:hover {
    background-color: rgb(241, 209, 64);
  }
}
/*----------background----------*/
body {
  background-image: url(assets/img/green-grass-1260x640.jpg);
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}
</style>

<style scoped lang="scss">
h1 {
  margin-top: 1rem;
}
.titleContainer {
  background-color: rgb(233, 235, 211);
  padding: 1rem;
  position: relative;
}
img#bird {
  position: absolute;
  width: 8rem;
  height: auto;
  top: 0rem;
  right: -1.5rem;
}
.largeContainer {
  width: 100vw;
  height: 100vh;
  padding: 1rem 2rem 1rem 2rem;
  overflow: scroll;
}
</style>
