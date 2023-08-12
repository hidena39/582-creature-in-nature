<template>
  <div>
    <form @submit.prevent="sendAllInput">
      <label for="date">Date</label>
      <input type="date" id="date" v-model="inputDate" required />
      <label for="location">Location</label>
      <input type="text" id="location" v-model="inputLocation" required />
      <label for="location"
        >Image URL <button @click="copyText">Copy example URL</button></label
      >
      <input type="text" id="location" v-model="inputImage" required />
      <label for="name">Name</label>
      <input type="text" id="name" v-model="inputName" required />
      <label for="categories">categories</label>
      <select id="categories" v-model="inputCategories" required>
        <option value="mammals">mammals</option>
        <option value="birds">birds</option>
        <option value="amphibians">amphibians</option>
        <option value="reptiles">reptiles</option>
        <option value="fishes">fishes</option>
      </select>
      <label for="description">Description</label>
      <textarea
        id="description"
        cols="30"
        rows="10"
        v-model="inputDescription"
      ></textarea>
      <input type="submit" value="Send Request" />
    </form>
    {{ inputDate }}
    {{ inputLocation }}
    {{ inputImage }}
    {{ inputName }}
    {{ inputCategories }}
    {{ inputDescription }}
  </div>
</template>

<script>
export default {
  name: "CreatureForm",

  data() {
    return {
      obj: {},
      idNumber: 6,
      inputDate: "",
      inputLocation: "",
      inputImage: "",
      inputName: "",
      inputCategories: "",
      inputDescription: "",
    };
  },

  methods: {
    sendAllInput() {
      const obj = {
        id: this.idNumber,
        date: this.inputDate,
        location: this.inputLocation,
        image: this.inputImage,
        name: this.inputName,
        categories: this.inputCategories,
        description: this.inputDescription,
      };
      this.$emit("ArrayOfInput", obj);
      console.log("send:", obj);
      this.idNumber++;
      this.inputDate = "";
      this.inputLocation = "";
      this.inputImage = "";
      this.inputName = "";
      this.inputCategories = "";
      this.inputDescription = "";
    },
    copyText() {
      navigator.clipboard.writeText(
        "https://placehold.co/400x500/yellow/white"
      );
      alert("Copied!!");
    },
  },
};
</script>

<style lang="scss">
input,
textarea,
select {
  display: block;
  margin: 10px;
  border: dotted 2px green;
}
</style>
