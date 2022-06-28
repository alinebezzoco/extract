export const TRANSACTION_TYPE = {
  PAYMENT_DEBIT: "Pagamento realizado",
  TRANSFER_DEBIT: "Transferência realizada",
  PAYMENT_CREDIT: "Pagamento recebido",
  TRANSFER_CREDIT: "Transferência recebida",
  PAYMENT_REFUNDED: "Pagamento estornado",
  TRANSFER_REFUNDED: "Transferência estornada",
  PAYMENT_PENDING: "Pagamento agendado",
  TRANSFER_PENDING: "Transferência agendada",
};

export const SOURCE_TYPE = {
  PAYMENT: "PAYMENT",
  TRANSFER: "TRANSFER",
};

export const ENTRY_TYPE = {
  CREDIT: "CREDIT",
  DEBIT: "DEBIT",
};

export const STATUS_TYPE = {
  COMPLETED: "COMPLETED",
  REFUNDED: "REFUNDED",
  PENDING: "PENDING",
  SCHEDULED: "SCHEDULED",
};
