import { shallowMount } from "@vue/test-utils";
import Header from "@/shared/components/Header/Header.vue";

describe("Header.vue", () => {
  it("renders title props when passed", () => {
    const title = "Extrato";
    const wrapper = shallowMount(Header, {
      props: { title },
    });
    expect(wrapper.text()).toMatch(title);
  });
  
  it("should doesn't find any title", () => {
    const title = "";
    const wrapper = shallowMount(Header, {
      props: { title },
    });
    expect(wrapper.text()).toBe("");
  });
});
