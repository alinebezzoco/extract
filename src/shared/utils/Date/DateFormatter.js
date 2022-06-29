import { format as _format } from "date-fns";
import { ptBR } from "date-fns/locale";

const DateFormatter = {
  formatDateDMYH(date = null) {
    if (!date) return null;

    const currentDate = new Date(date);
    const day = _format(currentDate, "dd");
    const month = _format(currentDate, "MMM", {
      awareOfUnicodeTokens: true,
      locale: ptBR,
    });
    const year = _format(currentDate, "yyyy");
    const hour = _format(currentDate, "HH:mm");

    return `${day} ${month} ${year} - ${hour}`;
  },

  formatDateDM(date = null) {
    if (!date) return null;

    const currentDate = new Date(date);
    const day = _format(currentDate, "dd");
    const month = _format(currentDate, "MMMM", {
      awareOfUnicodeTokens: true,
      locale: ptBR,
    });
    return `${day} de ${month}`;
  },
};
export default DateFormatter;
