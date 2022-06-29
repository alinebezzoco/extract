import { mount } from "@vue/test-utils";
import { render, cleanup } from "@testing-library/vue";
import "@testing-library/jest-dom";
import Search from "../Search.vue";

const mockProps = {
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
        ...mockProps, 
        value: "Luis Inácio"
      },

    });
    expect(container).toMatchSnapshot();
  });

  it("should have focus input", () => {
    const { getByTestId } = render(Search, {
      propsData: mockProps,
    });
    getByTestId("search-filter").focus();
    expect(getByTestId("search-filter")).toHaveFocus();
  });

  it("should render empty value", () => {
    const container = mount(Search, {
      propsData: {
        ...mockProps,
        value: "",
      },
    });

    expect(container.value).toBeUndefined();
  });
});
