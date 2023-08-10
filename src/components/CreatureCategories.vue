<template>
  <label for="mammals"> mammals</label>
  <Input
    data-test-id="2"
    type="radio"
    id="mammals"
    value="mammals"
    name="pickCategory"
    v-model="chosen"
    >mammals</Input
  >
  <label for="birds"> birds</label>
  <Input
    type="radio"
    id="birds"
    value="birds"
    name="pickCategory"
    v-model="chosen"
    >birds</Input
  >
  <label for="amphibians"> amphibians</label>
  <Input
    type="radio"
    id="amphibians"
    value="amphibians"
    name="pickCategory"
    v-model="chosen"
    >amphibians</Input
  >
  <label for="reptiles"> reptiles</label>
  <Input
    type="radio"
    id="reptiles"
    value="reptiles"
    name="pickCategory"
    v-model="chosen"
    >reptiles</Input
  >
  <label for="fishes"> fishes</label>
  <Input
    type="radio"
    id="fishes"
    value="fishes"
    name="pickCategory"
    v-model="chosen"
    >fishes</Input
  >

  <p>You picked: {{ chosen }}</p>
</template>

<script>
export default {
  name: "CreatureCategories",
  data() {
    return {
      chosen: "mammals",
    };
  },
  methods: {},
};
</script>



