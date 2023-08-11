import { shallowMount } from "@vue/test-utils";
import CreatureCategories from "@/components/CreatureCategories.vue";

describe("CreatureCategories.vue", () => {
  it("If the category checkbox are there", async () => {
    const wrapper = shallowMount(CreatureCategories);
    const checkboxText = "mammals";
    expect(wrapper.find("[data-test-id='2']").text()).toBe(checkboxText);
  });
  it("If the categorie radio buttons trigger select event", async () => {});

  //   it("If the select event (changing false -> true) emits", async () => {});
  //   it("If the deselect event (changing true -> false) emits", async () => {});
  //   it("If buttons get colored if selected", async () => {});
  //   it("If buttons get dis-colored if deselected", async () => {});
});
