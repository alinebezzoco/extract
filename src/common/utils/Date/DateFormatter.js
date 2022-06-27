import { format as _format } from 'date-fns';
import { ptBR } from 'date-fns/locale';

const DateFormatter = {
  formatDateDMH(date) {
    const currentDate = new Date(date);
    const day = _format(currentDate, "dd");
    const month = _format(currentDate, "MMM", {
      awareOfUnicodeTokens: true,
      locale: ptBR,
    });
    const hour = _format(currentDate, "HH:mm");

    return `${day} ${month} - ${hour}`;
  },

  formatDateDMY(date) {  
    const currentDate = new Date(date);
    const day = _format(currentDate, 'dd');
    const month = _format(currentDate, 'MMMM', { awareOfUnicodeTokens: true, locale: ptBR });
    const year = _format(currentDate, 'yyyy');
  
    return `${day} de ${month} de ${year}`;
  }
};
export default DateFormatter;
