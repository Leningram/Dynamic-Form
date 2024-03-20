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
