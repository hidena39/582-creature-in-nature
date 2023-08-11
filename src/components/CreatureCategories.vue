<template>
  <label for="mammals"> mammals</label>
  <input
    data-test-id="2"
    type="radio"
    id="mammals"
    value="mammals"
    name="pickCategory"
    v-model="chosen"
  />
  <label for="birds"> birds</label>
  <input
    type="radio"
    id="birds"
    value="birds"
    name="pickCategory"
    v-model="chosen"
  />
  <label for="amphibians"> amphibians</label>
  <input
    type="radio"
    id="amphibians"
    value="amphibians"
    name="pickCategory"
    v-model="chosen"
  />
  <label for="reptiles"> reptiles</label>
  <input
    type="radio"
    id="reptiles"
    value="reptiles"
    name="pickCategory"
    v-model="chosen"
  />
  <label for="fishes"> fishes</label>
  <input
    type="radio"
    id="fishes"
    value="fishes"
    name="pickCategory"
    v-model="chosen"
  />

  <p>You picked: {{ chosen }}</p>
</template>

<script>
export default {
  name: "CreatureCategories",
  data() {
    return {
      chosen: "",
    };
  },
  methods: {
    // sendChosen() {
    //   this.$emit("chosenCategories", this.chosen);
    // },
  },
};
</script>
