<template>
  <h3>Creatures Found</h3>
  <CreatureCategories @chosenCategories="receiveCategories" />
  <div class="listContainer">
    <p id="currentCategory" data-test-id="16">
      You picked: {{ currentCategory }}
    </p>
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
h3 {
  margin-bottom: 1rem;
}
#currentCategory {
  text-align: center;
  margin: 1rem 0 2rem 0;
  font-size: 1.5rem;
  font-weight: bold;
}
.cardContainer {
  width: 100%;
  border: 2px solid red;
}
.list {
  display: flex;
  flex-direction: column-reverse;
  justify-content: center;
  align-items: center;
  gap: 2rem;
}
</style>
