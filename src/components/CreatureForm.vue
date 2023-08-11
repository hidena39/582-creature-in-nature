<template>
  <div>
    <form @submit.prevent="sendAllInput">
      <!-- @submit.prevent=functionName -->
      <label for="date">Date</label>
      <input type="date" id="date" v-model="inputDate" required />
      <label for="location">Location</label>
      <input type="text" id="location" v-model="inputLocation" required />
      <label for="name">Name</label>
      <input type="text" id="name" v-model="inputName" required />
      <label for="categories">categories</label>
      <select id="categories" v-model="inputCategories" required>
        <option value="all">all</option>
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
      AllInput: [],
      inputDate: "",
      inputLocation: "",
      inputName: "",
      inputCategories: "",
      inputDescription: "",
    };
  },
  methods: {
    // sendAllInput() {
    //   this.$emit("inputData", this.inputDate);
    //   console.log("send:", this.inputDate);
    //   this.$emit("inputLocation", this.inputLocation);
    //   console.log("send:", this.inputLocation);
    //   this.$emit("inputName", this.inputName);
    //   console.log("send:", this.inputName);
    //   this.$emit("inputCategories", this.inputCategories);
    //   console.log("send:", this.inputCategories);
    //   this.$emit("inputDescription", this.inputDescription);
    //   console.log("send:", this.inputDescription);
    // },
    sendAllInput() {
      this.AllInput.push(this.inputDate);
      this.AllInput.push(this.inputLocation);
      this.AllInput.push(this.inputName);
      this.AllInput.push(this.inputCategories);
      this.AllInput.push(this.inputDescription);
      console.log("send:", this.AllInput);
    },
  },
};
</script>
