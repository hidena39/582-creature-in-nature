<template>
  <label for="mammals"> mammals</label>
  <Input
    data-test-id="2"
    type="radio"
    id="mammals"
    value="mammals"
    name="pickCategory"
    >mammals</Input
  >
  <label for="birds"> birds</label>
  <Input type="radio" id="birds" value="birds" name="pickCategory">birds</Input>
  <label for="amphibians"> amphibians</label>
  <Input type="radio" id="amphibians" value="amphibians" name="pickCategory"
    >amphibians</Input
  >
  <label for="reptiles"> reptiles</label>
  <Input type="radio" id="reptiles" value="reptiles" name="pickCategory"
    >reptiles</Input
  >
  <label for="fishes"> fishes</label>
  <Input type="radio" id="fishes" value="fishes" name="pickCategory"
    >fishes</Input
  >
</template>

<script>
export default {
  name: "CreatureCategories",
  data() {
    return {};
  },
};
</script>
