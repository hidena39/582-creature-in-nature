<template>
  <!-- <CreatureCategories /> -->
  <div class="parent">
    <CreatureItem
      v-for="card in cards"
      :card="card"
      :key="card.id"
    ></CreatureItem>
  </div>
</template>

<script>
import CreatureItem from "./CreatureItem.vue";
// import CreatureCategories from "./CreatureCategories.vue";

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
    CreatureItem,
    // CreatureCategories,
  },
  // data() {
  //   return {
  //     showDetail: false,
  //   };
  // },
  // methods: {
  //   sendAShowDetail() {
  //     this.showDetail = true;
  //   },
  //   sendHideDetail() {
  //     this.showDetail = false;
  //   },
  // },
};
</script>

<!-- https://bobbyhadz.com/blog/get-all-selected-values-of-multiple-select-using-javascript -->
