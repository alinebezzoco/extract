
import DateFormatter from "@/shared/utils/Date/DateFormatter.js";

describe('DateFormatter.js', () => {
  const date = '2022-06-27T20:34:00Z';

  it('should format date to day, month and year', () => {
    const formatDate = DateFormatter.formatDateDM(date);
    expect(formatDate).toContain('27 de junho');
  });

  it('should return null when value is empty in formatDateDM', () => {
    const formatDate = DateFormatter.formatDateDM();
    expect(formatDate).toBeNull();
  });

  it('should format date to day, month and hour', () => {
    const formatDate = DateFormatter.formatDateDMYH(date);
    expect(formatDate).toContain('27 jun 2022 - 17:34');
  });

  it('should return null when value is empty in formatDateDMYH', () => {
    const formatDate = DateFormatter.formatDateDMYH();
    expect(formatDate).toBeNull();
  });
});