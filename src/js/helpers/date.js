import { format } from 'date-fns';

export function formateDate (str, type) {
  const date = new Date(str);
  return format(date, type);
}

