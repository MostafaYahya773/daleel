import dayjs from 'dayjs';
import isToday from 'dayjs/plugin/isToday';
import isYesterday from 'dayjs/plugin/isYesterday';
dayjs.extend(isToday);
dayjs.extend(isYesterday);

export const formatMessageDate = (dateString?: string) => {
  if (!dateString) return '';
  const msgDate = dayjs(dateString);
  if (!msgDate.isValid()) return dateString;
  if (msgDate.isToday()) return 'اليوم';
  if (msgDate.isYesterday()) return 'امس';
  const diffDays = dayjs().startOf('day').diff(msgDate.startOf('day'), 'day');
  if (diffDays === 2) return 'منذ يومين';
  return `منذ ${diffDays} أيام`;
};
