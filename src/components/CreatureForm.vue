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
        <input
          data-test-id="11"
          type="text"
          id="image"
          v-model="inputImage"
          required
        />
        <button data-test-id="15" @click="copyText">Copy example URL</button>
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
        "https://placehold.co/300x375/88674c/white"
      );
    },
  },
};
</script>

<style scoped lang="scss">
.formpageContainner {
  margin: 1rem 0 1rem 0;
}
form {
  display: flex;
  flex-wrap: wrap;
  padding: 0.5rem;
  gap: 0.5rem;
}
input,
textarea,
select {
  line-height: 1rem;
  display: block;
  border: dotted 2px green;
  font-family: "Montserrat", sans-serif;
  margin-bottom: 0.5rem;
  width: 11rem;
  font-size: 1rem;
  border-radius: 0.5rem;
  padding: 0.1rem 1rem 0.1rem 1rem;
}
#image {
  width: 15rem;
}
#submit {
  padding: 0.1rem 1rem 0.1rem 1rem;
  font-weight: 600;
  border-radius: 1rem;
  background-color: rgb(136, 108, 76);
  border: white 2px solid;
  color: white;
  height: 1.8rem;
  &:hover {
    background-color: rgb(236, 132, 13);
  }
}
</style>
