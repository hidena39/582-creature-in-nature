import { shallowMount } from "@vue/test-utils";
import CreatureList from "@/components/CreatureList.vue";
import CreatureCategories from "@/components/CreatureCategories.vue";

describe("CourseList.vue", () => {
  it("trigger receiveCategories event when inputs are submitted in CreatureCategories.vue", async () => {
    const wrapper = shallowMount(CreatureList);
    await wrapper
      .findComponent(CreatureCategories)
      .vm.$emit("chosenCategories", "mammals");
    expect(wrapper.vm.currentCategory).toBe("mammals");
  });
  it("shows correct 'currentCategory' on the page", async () => {
    const wrapper = shallowMount(CreatureList);
    await wrapper
      .findComponent(CreatureCategories)
      .vm.$emit("chosenCategories", "mammals");
    expect(wrapper.find("[data-test-id='16']").text()).toBe(
      "Category showing: mammals"
    );
  });
  it("shows only selected cards using filteredCards function", async () => {
    const cards = [
      {
        id: 1,
        categories: "mammals",
      },
      {
        id: 2,
        categories: "birds",
      },
    ];
    const wrapper = shallowMount(CreatureList, {
      props: { cards },
    });
    await wrapper
      .findComponent(CreatureCategories)
      .vm.$emit("chosenCategories", "mammals");
    console.log(wrapper.vm.filteredCards);
    expect(wrapper.vm.filteredCards).toStrictEqual([
      { categories: "mammals", id: 1 },
    ]);
  });
  it("shows 'No cards to show you' message when there are no cards in hte chosen category", async () => {
    const cards = [
      {
        id: 1,
        categories: "mammals",
      },
      {
        id: 2,
        categories: "birds",
      },
    ];
    const wrapper = shallowMount(CreatureList, {
      props: { cards },
    });
    await wrapper
      .findComponent(CreatureCategories)
      .vm.$emit("chosenCategories", "fishes");
    expect(wrapper.find("[data-test-id='17']").exists()).toBe(true);
  });
  it("emits delete card event", async () => {
    const card = { id: 3 };
    const wrapper = shallowMount(CreatureList, {
      props: { card },
    });
    await wrapper.vm.$emit("deleteCard", 3);
    expect(wrapper.emitted().deleteCard[0][0]).toBe(3);
  });
});
