import { mount } from "@vue/test-utils";
import { render, cleanup } from "@testing-library/vue";
import "@testing-library/jest-dom";
import Search from "../Search.vue";

const PROPS = {
  label: "Busca:",
  name: "input-search",
  id: "input-search",
  placeholder: "Digite...",
};

afterEach(cleanup);

describe("Search.vue", () => {
  it("should have render with default classes", () => {
    const container = mount(Search, {
      propsData: { 
        ...PROPS, 
        value: "Luis Inácio"
      },

    });
    expect(container).toMatchSnapshot();
  });

  it("should have focus input", () => {
    const { getByTestId } = render(Search, {
      propsData: PROPS,
    });
    getByTestId("search-filter").focus();
    expect(getByTestId("search-filter")).toHaveFocus();
  });

  it("should render empty value", () => {
    const container = mount(Search, {
      propsData: {
        ...PROPS,
        value: "",
      },
    });

    expect(container.value).toBeUndefined();
  });
});
