import { shallowMount } from "@vue/test-utils";
import CreatureItem from "@/components/CreatureItem.vue";

describe("CourseItem.vue", () => {
  it("renders the props", () => {
    const card = {
      date: "2023-08-01",
      location: "Vanier Colledge",
    };
    const wrapper = shallowMount(CreatureItem, {
      props: { card },
    });
    expect(wrapper.find("[data-test-id='1']").text()).toBe("Date: 2023-08-01");
    expect(wrapper.find("[data-test-id='3']").text()).toBe(
      "At: Vanier Colledge"
    );
  });
  //show detail button
  it("Show detail button is there", () => {
    const wrapper = shallowMount(CreatureItem);
    expect(wrapper.find("[data-test-id='4']").text()).toBe("Show Detail");
    expect(wrapper.find("[data-test-id='4']").exists()).toBe(true);
  });
  it("Show detail button shows detail card", async () => {
    const wrapper = shallowMount(CreatureItem);
    await wrapper.find("[data-test-id='4']").trigger("click");
    expect(wrapper.find("[data-test-id='5']").exists()).toBe(true);
  });
  //close detail button
  it("Close detail button is there when detail card is showing", async () => {
    const wrapper = shallowMount(CreatureItem);
    await wrapper.find("[data-test-id='4']").trigger("click");
    expect(wrapper.find("[data-test-id='6']").text()).toBe("X close detail");
    expect(wrapper.find("[data-test-id='6']").exists()).toBe(true);
  });
  it("Close detail button hides detail card", async () => {
    const wrapper = shallowMount(CreatureItem);
    await wrapper.setData({ show: true });
    expect(wrapper.find("[data-test-id='5']").exists()).toBe(true);
    await wrapper.find("[data-test-id='4']").trigger("click");
    expect(wrapper.find("[data-test-id='5']").exists()).toBe(false);
  });
  //delete button
  it("delete button is there when detail card is not showing", () => {
    const wrapper = shallowMount(CreatureItem);
    expect(wrapper.find("[data-test-id='18']").text()).toBe("Delete Card");
    expect(wrapper.find("[data-test-id='18']").exists()).toBe(true);
  });
  it("delete detail button delete card (this.card.id stops existing)", async () => {
    const wrapper = shallowMount(CreatureItem);
    await wrapper.setData({ show: true });
    expect(wrapper.find("[data-test-id='5']").exists()).toBe(true);
    await wrapper.find("[data-test-id='4']").trigger("click");
    expect(wrapper.find("[data-test-id='5']").exists()).toBe(false);
  });
});
