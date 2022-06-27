import { render, screen } from "@testing-library/vue";
import App from "../../src/App.vue";

describe("App.vue", () => {
  it("Should render app with success", () => {
    render(<App />);
  });
});

