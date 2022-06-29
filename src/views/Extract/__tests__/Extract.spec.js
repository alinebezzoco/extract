import { render, screen, waitFor } from "@testing-library/vue";
import { getData } from "@/api/ExtractService";
import Extract from "../Extract.vue";

jest.mock("@/api/ExtractService");

describe("Extract.vue", () => {
  it("should render app successfully", () => {
    render(<Extract />);
  });

  it("should fetch data successfully", async () => {
    const results = [
      {
        amountTotal: 128000,
        date: "2021-01-06",
        items: [
          {
            actor: "José Marques",
            amount: 13920,
            dateEvent: "2021-01-06T21:00:00Z",
            entry: "CREDIT",
            scheduled: false,
            source: "PAYMENT",
            status: "COMPLETED",
            type: "BANKSLIP",
          },
        ],
      },
      {
        amountTotal: 114080,
        date: "2021-01-15",
        items: [
          {
            actor: "Alexandre da Silva",
            amount: 20000,
            dateEvent: "2021-01-15T00:00:00Z",
            entry: "DEBIT",
            scheduled: false,
            source: "TRANSFER",
            status: "COMPLETED",
            type: "EXTERNAL",
          },
        ],
      },
    ];

    getData.mockResolvedValueOnce(results);
    render(<Extract />);
    expect(getData).toHaveBeenCalledTimes(2);
    expect(getData).toHaveBeenCalledWith();
  });
});
