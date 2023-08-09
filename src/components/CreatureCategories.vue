<template></template>

<script>
// 1.make categorie Array
// 2.make all cards false
// 3.toggle true and false when clicked
// 4.emits
// 5.if cards[true] then show cards in CreatureList
@click="" 

export default {
    name: "CreatureCategories",
    data() { 
        return {
            showing: false,
        };
    },
    methods: {
        sendShow() { 
            this.showing = true;
            this.$emit("showCards", this.showing);
        },
    },

};
</script>