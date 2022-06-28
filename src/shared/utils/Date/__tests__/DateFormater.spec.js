
import DateFormatter from "@/shared/utils/Date/DateFormatter.js";

describe('DateFormatter.js', () => {
  const date = '2022-06-27T20:34:00Z';

  it('should format date to day, month and year', () => {
    const formatDate = DateFormatter.formatDateDMY(date);
    expect(formatDate).toContain('27 de junho');
  });

  it('should return null when value is empty in formatDateDMY', () => {
    const formatDate = DateFormatter.formatDateDMY();
    expect(formatDate).toBeNull();
  });

  it('should format date to day, month and hour', () => {
    const formatDate = DateFormatter.formatDateDMH(date);
    expect(formatDate).toContain('27 jun 2022 - 17:34');
  });

  it('should return null when value is empty in formatDateDMH', () => {
    const formatDate = DateFormatter.formatDateDMH();
    expect(formatDate).toBeNull();
  });
});