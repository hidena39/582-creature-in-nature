<template>
  <CreatureCategories @chosenCategories="receiveCategories" />
  <div class="parent" v-if="chosen === 'all'">
    <CreatureItem
      v-for="card in cards"
      :card="card"
      :key="card.id"
    ></CreatureItem>
  </div>
  <div class="parent" v-else-if="chosen === 'mammals'">
    <CreatureItem
      v-for="card in cards"
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
    };
  },
  methods: {
    receiveCategories(chosen) {
      console.log(chosen);
    },
  },
};
</script>
