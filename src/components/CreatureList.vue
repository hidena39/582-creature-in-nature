<template>
  <CreatureCategories />
  <CreatureItem />
</template>

<script>
import CreatureItem from "./CreatureItem.vue";
import CreatureCategories from "./CreatureCategories.vue";

export default {
  name: "CreatureList",
  components: {
    CreatureItem,
    CreatureCategories,
  },
  data() {
    return {
      showDetail: false,
    };
  },
  methods: {
    sendAShowDetail() {
      this.showDetail = true;
    },
    sendHideDetail() {
      this.showDetail = false;
    },
  },
};
</script>

<!-- https://bobbyhadz.com/blog/get-all-selected-values-of-multiple-select-using-javascript -->
