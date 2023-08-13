<template>
  <CreatureCategories @chosenCategories="receiveCategories" />
  <div>
    <p data-test-id="16">current category: {{ currentCategory }}</p>
    <div v-if="filteredCards != ''" class="cardContainer list">
      <CreatureItem
        v-for="card in filteredCards"
        :card="card"
        :key="card.id"
        @deleteCard="deleteCard"
      ></CreatureItem>
    </div>

    <div v-else class="cardContainer">
      <p data-test-id="17">No cards to show you</p>
    </div>
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
    deleteCard(id) {
      console.log("send no.2:", id);
      this.$emit("deleteCard", id);
    },
  },
  computed: {
    filteredCards() {
      const filtered = [];
      for (const card of this.cards) {
        if (
          this.currentCategory === "all" ||
          card.categories === this.currentCategory
        ) {
          filtered.push(card);
        }
      }
      return filtered;
    },
  },
};
</script>

<style lang="scss">
.cardContainer {
  width: 100%;
  overflow: scroll;
  border: 2px solid black;
}
.list {
  display: flex;
  flex-direction: column-reverse;
  justify-content: center;
}
</style>
