<template>
  <div class="anItem">
    <div data-test-id="5" v-if="show" class="detailCard">
      <ul>
        <li>
          <h2>detail</h2>
          <p>{{ card.description }}</p>
        </li>
        <button data-test-id="6" @click="switchShowHide">X close detail</button>
      </ul>
    </div>

    <div>
      <ul>
        <li><img :src="card.image" :alt="name" /></li>
        <li data-test-id="1">
          <p><span>Date: </span>{{ card.date }}</p>
        </li>
        <li>
          <p data-test-id="3"><span>At: </span>{{ card.location }}</p>
        </li>
        <li>
          <p><span>Name: </span>{{ card.name }}</p>
        </li>
        <li>
          <p><span>Category: </span>{{ card.categories }}</p>
        </li>
      </ul>
    </div>
    <div class="buttonContainer">
      <button data-test-id="4" @click="switchShowHide">Show Detail</button>
      <button id="deleteButton" @click="deleteCard" data-test-id="18">
        Delete Card
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "CreatureItem",
  props: {
    card: {
      type: Object,
      default() {
        return {
          id: "2",
          date: "2023-08-01",
          location: "Vanier Colledge",
          image: "https://placehold.co/300x375/88674c/white",
          name: "Old World sparrows",
          description:
            "Old World sparrows are a group of small passerine birds forming the family Passeridae. They are also known as true sparrows, a name also used for a particular genus of the family, Passer.[1] They are distinct from both the New World sparrows, in the family Passerellidae, and from a few other birds sharing their name, such as the Java sparrow of the family Estrildidae. ",
          categories: "mammals",
        };
      },
    },
  },
  data() {
    return {
      show: false,
    };
  },
  methods: {
    switchShowHide() {
      this.show = !this.show;
    },
    deleteCard() {
      console.log("send :", this.card.id);
      this.$emit("deleteCard", this.card.id);
    },
  },
};
</script>

<style lang="scss">
.anItem {
  position: relative;
  width: 300px;
  border: green dotted 3px;
  border-radius: 2rem;
  overflow: hidden;
  background-color: white;
  line-height: 1.5rem;
}
.buttonContainer {
  display: flex;
  justify-content: space-between;
}
img {
  width: 300px;
  height: 375px;
}
.detailCard {
  position: absolute;
  top: 0;
  left: 0;
  margin: 1rem;
  width: calc(100% - 2rem);
  height: calc(100% - 2rem);
  background-color: rgb(173, 187, 194);
  border-radius: 2rem;
  z-index: 2;
}
li {
  list-style: none;
}
h2 {
  margin: 2rem;
}
span {
  font-weight: 600;
}
p,
button {
  margin-left: 1rem;
  margin-right: 1rem;
}
button {
  margin-top: 1rem;
  margin-bottom: 1rem;
}
#deleteButton {
  font-size: 0.7rem;
  padding: 0;
  width: 5rem;
  height: 2rem;
  background-color: red;
  color: white;
  border: none;
  &:hover {
    background-color: black;
  }
}
</style>
