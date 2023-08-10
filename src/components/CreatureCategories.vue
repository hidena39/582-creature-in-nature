<template>
  <label for="mammals"> mammals</label>
  <Input
    data-test-id="2"
    type="checkbox"
    v-model="chosen"
    id="mammals"
    value="mammals"
    >mammals</Input
  >
  <label for="birds"> birds</label>
  <Input type="checkbox" v-model="chosen" id="birds" value="birds">birds</Input>
  <label for="amphibians"> amphibians</label>
  <Input type="checkbox" v-model="chosen" id="amphibians" value="amphibians"
    >amphibians</Input
  >
  <label for="reptiles"> reptiles</label>
  <Input type="checkbox" v-model="chosen" id="reptiles" value="reptiles"
    >reptiles</Input
  >
  <label for="fishes"> fishes</label>
  <Input type="checkbox" v-model="chosen" id="fishes" value="fishes"
    >fishes</Input
  >
  <p>{{ chosen }}</p>
</template>

<script>
export default {
  name: "CreatureCategories",
  data() {
    return {
      chosen: [],
    };
  },
};
</script>
