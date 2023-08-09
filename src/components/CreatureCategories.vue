<template>
  <button :class="isChosen" value="mammals" @click="toggleChosen">
    mammals
  </button>
  <button :class="isChosen" value="birds" @click="toggleChosen">birds</button>
  <button :class="isChosen" value="amphibians" @click="toggleChosen">
    amphibians
  </button>
  <button :class="isChosen" value="reptiles" @click="toggleChosen">
    reptiles
  </button>
  <button :class="isChosen" value="fishes" @click="toggleChosen">fishes</button>
</template>

<script>
// 1.make categorie Array
// 2.make all cards false
// 3.toggle true and false when clicked
// 4.emits
// 5.if cards[true] then show cards in CreatureList
// @click=""

export default {
  name: "CreatureCategories",
  data() {
    return {
      isChosen: false,
      chosenCategories: [],
      showing: false,
    };
  },
  methods: {
    toggleChosen() {
      this.isChosen = !this.isChosen;
      },
      pushRemoveChosen() {
          if (isChosen === true) {
            chosenCategories.push(this.value)
          } else { 
            chosenCategories.remove(this.value)
          }
      },
    sendShow() {
      this.showing = true;
      this.$emit("showCards", this.showing);
    },
  },
};
</script>

<style lang="scss">
.button {
  background-color: #f7faf7; /* Green */
  border: none;
  color: white;
  padding: 10px 20px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
}
.isChosen {
  background-color: #4caf50; /* Green */
}
</style>
