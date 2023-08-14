<template>
  <div class="categoryContainer">
    <div class="eachInput">
      <input
        data-test-id="6"
        type="radio"
        id="all"
        value="all"
        name="pickCategory"
        v-model="chosen"
        @change="sendChosen"
      />
      <label for="all" data-test-id="7"> all</label>
    </div>
    <div class="eachInput">
      <input
        type="radio"
        id="mammals"
        value="mammals"
        name="pickCategory"
        v-model="chosen"
        @change="sendChosen"
      />
      <label for="mammals"> mammals</label>
    </div>
    <div class="eachInput">
      <input
        type="radio"
        id="birds"
        value="birds"
        name="pickCategory"
        v-model="chosen"
        @change="sendChosen"
      />
      <label for="birds"> birds</label>
    </div>
    <div class="eachInput">
      <input
        type="radio"
        id="amphibians"
        value="amphibians"
        name="pickCategory"
        v-model="chosen"
        @change="sendChosen"
      />
      <label for="amphibians"> amphibians</label>
    </div>
    <div class="eachInput">
      <input
        type="radio"
        id="reptiles"
        value="reptiles"
        name="pickCategory"
        v-model="chosen"
        @change="sendChosen"
      />
      <label for="reptiles"> reptiles</label>
    </div>
    <div class="eachInput">
      <input
        type="radio"
        id="fishes"
        value="fishes"
        name="pickCategory"
        v-model="chosen"
        @change="sendChosen"
      />
      <label for="fishes"> fishes</label>
    </div>
  </div>

  <!-- <p>You picked: {{ chosen }}</p> -->
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
.categoryContainer {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  max-width: 400px;
  margin: 0 auto;
  gap: 0.5rem;
}
.eachInput {
  width: 130px;
  border: black dolid 1px;
}
</style>
