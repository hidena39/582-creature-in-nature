<template>
  <CreatureCategories @chosenCategories="receiveCategories" />
  <div class="parent">
    <p>current category: {{ currentCategory }}</p>
    <CreatureItem
      v-for="card in filteredCards"
      :card="card"
      :key="card.id"
    ></CreatureItem>
  </div>
</template>

<script>
import CreatureCategories from "./CreatureCategories.vue";
import CreatureItem from "./CreatureItem.vue";

export default {
  name: "CreatureList",
  props: {
    cards: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  components: {
    CreatureCategories,
    CreatureItem,
  },
  data() {
    return {
      chosen: "all",
      currentCategory: "all",
    };
  },
  methods: {
    receiveCategories(chosen) {
      console.log("received:", chosen);
      this.currentCategory = chosen;
      console.log("Filtered Cards:", this.filteredCards);
    },
  },
  computed: {
    filteredCards() {
      if (this.currentCategory === "all") {
        return this.cards;
      } else {
        return this.cards.filter(
          (card) => card.categories === this.currentCategory
        );
      }
    },
  },
};
</script>
