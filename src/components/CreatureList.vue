<template>
  <CreatureItem />
</template>

<script>
import CreatureItem from "./CreatureItem.vue";

export default {
  name: "CreatureList",
  components: {
    CreatureItem,
    },
  data() {
        return {
            showDetail: false,
        };
    },
   methods: {
        sendAShowDetail() {
            this.showDetail = true;
        },
        sendHideDetail() {
            this.showDetail = false;
        },
    },
};
</script>
