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
      obj: {},
      inputDate: "",
      inputLocation: "",
      inputName: "",
      inputCategories: "",
      inputDescription: "",
    };
  },
  methods: {
    
    sendAllInput() {
      // image and id
      this.obj["date"] = this.inputDate;
      this.obj["location"] = this.inputLocation;
      this.obj["name"] = this.inputName;
      this.obj["description"] = this.inputCategories;
      this.obj["description"] = this.inputDescription;
      this.AllInput.push(this.obj);
      console.log("send:", this.AllInput);
    },
  },
};
</script>
