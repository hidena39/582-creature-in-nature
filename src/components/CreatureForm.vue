<template>
  <div>
    <form>
      @submit.prevent=functionName
      <label for="date">Date</label>
      <input type="date" id="date" required />
      <label for="location">Location</label>
      <input type="text" id="location" required />
      <label for="name">Name</label>
      <input type="text" id="name" required />
      <label for="categories">categories</label>
      <select id="categories" required>
        <option value="mammals">mammals</option>
        <option value="birds">birds</option>
        <option value="amphibians">amphibians</option>
        <option value="reptiles">reptiles</option>
        <option value="fishes">fishes</option>
      </select>
      <label for="description">Description</label>
      <textarea id="description" cols="30" rows="10"></textarea>
    </form>
  </div>
</template>

<script>
export default {
  name: "CreatureForm",
  data() {
    return {};
  },
};
</script>
