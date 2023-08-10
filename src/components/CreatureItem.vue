<template>
  <div class="children" :class="{ showing }">
    <ul>
      <li><img :src="card.image" :alt="name" /></li>
      <li data-test-id="1">
        <p>{{ card.date }}</p>
      </li>
      <li>
        <p>{{ card.location }}</p>
      </li>
      <li>
        <p>{{ card.name }}</p>
      </li>
      <li>
        <p>{{ card.description }}</p>
      </li>
      <li>
        <p>{{ card.categories }}</p>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "CreatureItem",
  props: {
    card: {
      type: Object,
      default() {
        return {
          id: "2",
          date: "2023-08-01",
          location: "Vanier Colledge",
          image: "https://placehold.co/400x400/orange/white",
          name: "Old World sparrows",
          description:
            "Old World sparrows are a group of small passerine birds forming the family Passeridae. They are also known as true sparrows, a name also used for a particular genus of the family, Passer.[1] They are distinct from both the New World sparrows, in the family Passerellidae, and from a few other birds sharing their name, such as the Java sparrow of the family Estrildidae. ",
          categories: "mammals",
        };
      },
    },
  },
  data() {
    return {
      showing: false,
    };
  },
};
</script>

<style lang="scss">
li {
  list-style: none;
}
</style>
