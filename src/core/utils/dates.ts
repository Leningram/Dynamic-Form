export const dateStringFormat = (value: string) => {
  const digits = value.replaceAll(/[^0-9]/g, '');
  if (digits.length <= 2) {
    return digits;
  } else if (digits.length <= 4) {
    const day = digits.substring(0, 2);
    const validDay = parseInt(day) <= 31 ? day : '31';
    const month = digits.substring(2, 4);
    const validMonth = parseInt(month) <= 12 ? month : '12';
    const formattedString = `${validDay}.${validMonth}`;
    return formattedString;
  } else {
    const day = digits.substring(0, 2);
    const validDay = parseInt(day) <= 31 ? day : '31';
    const month = digits.substring(2, 4);
    const year = digits.substring(4, 8);
    const validMonth = parseInt(month) <= 12 ? month : '12';
    const formattedString = `${validDay}.${validMonth}.${year}`;
    return formattedString;
  }
};


export const formatDateToString = (date: Date): string => {
   const day = String(date.getDate()).padStart(2, '0');
   const month = String(date.getMonth() + 1).padStart(2, '0'); // Месяцы идут от 0 до 11
   const year = date.getFullYear();
   return `${day}.${month}.${year}`;
 };