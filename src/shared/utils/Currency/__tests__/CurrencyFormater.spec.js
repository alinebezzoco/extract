import CurrencyFormatter from "@/shared/utils/Currency/CurrencyFormatter.js";

describe("CurrencyFormatter.js", () => {
  it("should currency format with success", () => {
    const convertToBRL = CurrencyFormatter.convertToBRL(1313);
    const value = "R$ 13,13";
    expect(convertToBRL).toContain(value.substring(13.13));
  });

  it('should return "-" if currency is empty', () => {
    const convertToBRL = CurrencyFormatter.convertToBRL();
    expect(convertToBRL).toContain("-");
  });
});
