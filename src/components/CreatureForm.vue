<template>
  <div class="formpageContainner">
    <h3>New Creature Found</h3>
    <form @submit.prevent="sendAllInput">
      <div class="inputWrap">
        <label data-test-id="9" for="date">Date</label>
        <input
          data-test-id="8"
          type="date"
          id="date"
          v-model="inputDate"
          required
        />
      </div>
      <div class="inputWrap">
        <label for="location">Location</label>
        <input
          data-test-id="10"
          type="text"
          id="location"
          v-model="inputLocation"
          required
        />
      </div>
      <div class="inputWrap">
        <label for="image">Image URL </label>
        <button data-test-id="15" @click="copyText">Copy example URL</button>
        <input
          data-test-id="11"
          type="text"
          id="image"
          v-model="inputImage"
          required
        />
      </div>
      <div class="inputWrap">
        <label for="name">Name</label>
        <input
          data-test-id="12"
          type="text"
          id="name"
          v-model="inputName"
          required
        />
      </div>
      <div class="inputWrap">
        <label for="categories">categories</label>
        <select
          data-test-id="13"
          id="categories"
          v-model="inputCategories"
          required
        >
          <option value="mammals">mammals</option>
          <option value="birds">birds</option>
          <option value="amphibians">amphibians</option>
          <option value="reptiles">reptiles</option>
          <option value="fishes">fishes</option>
        </select>
      </div>
      <div class="inputWrap">
        <label for="description">Description</label>
        <textarea
          data-test-id="14"
          id="description"
          cols="30"
          rows="10"
          v-model="inputDescription"
        ></textarea>
      </div>

      <input id="submit" type="submit" value="Add Creature!" />
    </form>
    <!-- {{ inputDate }}
    {{ inputLocation }}
    {{ inputImage }}
    {{ inputName }}
    {{ inputCategories }}
    {{ inputDescription }} -->
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
        "https://placehold.co/300x375/c9b8a9/white"
      );
    },
  },
};
</script>

<style scoped lang="scss">
.formpageContainner {
  margin: 1rem auto;
  max-width: 900px;
}
form {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  padding: 0.5rem;
  gap: 0.5rem;
}
input,
textarea,
select {
  line-height: 1rem;
  display: block;
  border: solid 2px green;
  font-family: "Montserrat", sans-serif;
  margin-bottom: 0.3rem;
  width: 300px;
  height: 2.5rem;
  font-size: 1rem;
  border-radius: 0.5rem;
  padding: 0.1rem 1rem 0.1rem 1rem;
}
textarea {
  height: 5rem;
}

#submit {
  padding: 0.1rem 1rem 0.1rem 1rem;
  font-weight: 600;
  background-color: green;
  border: white 2px solid;
  color: white;
  height: 1.8rem;
  &:hover {
    background-color: rgb(97, 73, 47);
  }
}
button {
  margin: 0 0 0.3rem 0;
  background: white;
  font-size: 0.8rem;
  border-radius: 0;
  border: 1px solid black;
  background: rgb(218, 218, 206);
  &:hover {
    background: rgb(126, 121, 116);
  }
}
</style>
