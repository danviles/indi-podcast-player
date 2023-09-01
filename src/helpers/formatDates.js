import { format } from 'date-fns';

export const formatDate = (dateString) => {
  const date = new Date(dateString);
  return format(date, 'dd/MM/yyyy');
};

export const formatTime = (input) => {
  if (/^\d{1,2}:\d{1,2}(:\d{1,2})?$/.test(input)) {
    return input;
  }

  if (!isNaN(input)) {
    const totalSeconds = parseInt(input, 10);
    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds - (hours * 3600)) / 60);
    const seconds = totalSeconds - (hours * 3600) - (minutes * 60);

    return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  }
  
  return input;
};