import { shallowMount } from "@vue/test-utils";
import CreatureCategories from "@/components/CreatureCategories.vue";

describe("CreatureCategories.vue", () => {
  it("If the category radio buttons are there", () => {
    const wrapper = shallowMount(CreatureCategories);
    expect(wrapper.find("[data-test-id='6']").exists()).toBe(true);
  });
  it("If the labels are there", () => {
    const wrapper = shallowMount(CreatureCategories);
    expect(wrapper.find("[data-test-id='7']").text()).toBe("all");
    expect(wrapper.find("[data-test-id='7']").exists()).toBe(true);
  });
  it("If the button emits chosenCategories event", async () => {
    const wrapper = shallowMount(CreatureCategories);
    await wrapper.find("[data-test-id='6']").trigger("change");
    console.log(wrapper.emitted().chosenCategories);
    expect(wrapper.emitted().chosenCategories[0][0]).toBe("all");
  });
});
