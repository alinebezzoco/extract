import { render } from "@testing-library/vue";
import Table from "../Table.vue";

describe("Table.vue", () => {
  it("Should render app with success", () => {
    render(<Table />);
  });
});

