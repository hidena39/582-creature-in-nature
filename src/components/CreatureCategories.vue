<template>
  <label for="all"> all</label>
  <input
    data-test-id="2"
    type="radio"
    id="all"
    value="all"
    name="pickCategory"
    v-model="chosen"
    @change="sendChosen"
  />
  <label for="mammals"> mammals</label>
  <input
    data-test-id="2"
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
    },
  },
};
</script>
