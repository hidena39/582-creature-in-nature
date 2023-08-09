import { shallowMount } from "@vue/test-utils";
import CreatureItem from "@/components/CreatureItem.vue";

describe("CourseItem.vue", () => {
  it("renders the props", () => {
    const card = {
      date: "2023-08-01",
      location: "Vanier Colledge",
      image: "https://placehold.co/400x400/orange/white",
      name: "Old World sparrows",
      categories: "mammals",
    };
    const wrapper = shallowMount(CreatureItem, {
      props: { card },
    });
    expect(wrapper.find("[data-test-id='1']").text()).toBe("2023-08-01");
  });
});
