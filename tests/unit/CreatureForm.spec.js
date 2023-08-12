import { shallowMount } from "@vue/test-utils";
import CreatureForm from "@/components/CreatureForm.vue";

describe("CreatureForm.vue", () => {
  it("If the Inputs are there", () => {
    const wrapper = shallowMount(CreatureForm);
    expect(wrapper.find("[data-test-id='8']").exists()).toBe(true);
  });
  it("If the labels are there", () => {
    const wrapper = shallowMount(CreatureForm);
    expect(wrapper.find("[data-test-id='9']").text()).toBe("Date");
    expect(wrapper.find("[data-test-id='9']").exists()).toBe(true);
  });
  it("If the submitting emits ArrayOfInput event", async () => {
    const wrapper = shallowMount(CreatureForm);
    await wrapper.find("[data-test-id='8']").setValue("2023-08-01");
    await wrapper.find("[data-test-id='10']").setValue("Vanier Colledge");
    await wrapper
      .find("[data-test-id='11']")
      .setValue("https://placehold.co/400x500/yellow/white");
    await wrapper.find("[data-test-id='12']").setValue("Rosie");
    await wrapper.find("[data-test-id='13']").setValue("mammals");
    await wrapper.find("[data-test-id='14']").setValue("Description");
    await wrapper.find("form").trigger("submit");
    console.log(wrapper.emitted().ArrayOfInput);
    expect(wrapper.emitted().ArrayOfInput[0][0]).toStrictEqual({
      categories: "mammals",
      date: "2023-08-01",
      description: "Description",
      id: 6,
      image: "https://placehold.co/400x500/yellow/white",
      location: "Vanier Colledge",
      name: "Rosie",
    });
  });
  it("If the Copy example URL buttons are there", () => {
    const wrapper = shallowMount(CreatureForm);
    expect(wrapper.find("[data-test-id='15']").text()).toBe("Copy example URL");
    expect(wrapper.find("[data-test-id='15']").exists()).toBe(true);
  });
});
