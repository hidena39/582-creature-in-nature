<template>
  <div>
    <form @submit.prevent="sendAllInput">
      <!-- @submit.prevent=functionName -->
      <label for="date">Date</label>
      <input type="date" id="date" v-model="inputDate" required />
      <label for="location">Location</label>
      <input type="text" id="location" v-model="inputLocation" required />
      <label for="location"
        >Image URL ex.https://placehold.co/400x400/red/white</label
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
      // image and id
      this.obj["id"] = this.idNumber;
      this.obj["date"] = this.inputDate;
      this.obj["location"] = this.inputLocation;
      this.obj["image"] = this.inputImage;
      this.obj["name"] = this.inputName;
      this.obj["categories"] = this.inputCategories;
      this.obj["description"] = this.inputDescription;
      this.idNumber++;
      console.log("send:", this.obj);
      this.$emit("ArrayOfInput", this.obj);
      delete this.obj[0];
      console.log("deleted:", this.obj);
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
}
</style>
