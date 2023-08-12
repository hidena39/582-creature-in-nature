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
          <p>{{ card.date }}</p>
        </li>
        <li>
          <p data-test-id="3">{{ card.location }}</p>
        </li>
        <li>
          <p>{{ card.name }}</p>
        </li>
        <li>
          <p>{{ card.categories }}</p>
        </li>
      </ul>
    </div>
    <button data-test-id="4" @click="switchShowHide">Show Detail</button>
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
          image: "https://placehold.co/400x400/orange/white",
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
  },
};
</script>

<style lang="scss">
.anItem {
  position: relative;
  width: 320px;
  border: black solid 1px;
}
img {
  width: 100%;
  height: 400px;
}
.detailCard {
  position: absolute;
  top: 0;
  left: 0;
  margin: 1rem;
  width: calc(100% - 2rem);
  height: calc(100% - 2rem);
  background-color: pink;
  z-index: 2;
}
li {
  list-style: none;
}
</style>
