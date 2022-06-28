const CurrencyFormatter = {
  convertToBRL(value = null) {
    if (!value && value !== 0) return "-";

    return new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
      minimumFractionDigits: 2,
    }).format(value / 100);
  },
};
export default CurrencyFormatter;
