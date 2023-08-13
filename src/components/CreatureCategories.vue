<template>
  <h3>What do you want to see?</h3>
  <label for="all" data-test-id="7"> all</label>
  <input
    data-test-id="6"
    type="radio"
    id="all"
    value="all"
    name="pickCategory"
    v-model="chosen"
    @change="sendChosen"
  />
  <label for="mammals"> mammals</label>
  <input
    type="radio"
    id="mammals"
    value="mammals"
    name="pickCategory"
    v-model="chosen"
    @change="sendChosen"
  />
  <label for="birds"> birds</label>
  <input
    type="radio"
    id="birds"
    value="birds"
    name="pickCategory"
    v-model="chosen"
    @change="sendChosen"
  />
  <label for="amphibians"> amphibians</label>
  <input
    type="radio"
    id="amphibians"
    value="amphibians"
    name="pickCategory"
    v-model="chosen"
    @change="sendChosen"
  />
  <label for="reptiles"> reptiles</label>
  <input
    type="radio"
    id="reptiles"
    value="reptiles"
    name="pickCategory"
    v-model="chosen"
    @change="sendChosen"
  />
  <label for="fishes"> fishes</label>
  <input
    type="radio"
    id="fishes"
    value="fishes"
    name="pickCategory"
    v-model="chosen"
    @change="sendChosen"
  />

  <p>You picked: {{ chosen }}</p>
</template>

<script>
export default {
  name: "CreatureCategories",
  data() {
    return {
      chosen: "all",
    };
  },
  methods: {
    sendChosen() {
      this.$emit("chosenCategories", this.chosen);
      console.log("send:", this.chosen);
    },
  },
};
</script>

<style scoped lang="scss">
h3 {
  margin-bottom: 1rem;
}
</style>
