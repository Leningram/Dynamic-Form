export const getTableCellValue = (obj: Record<string, any>, path: string): string => {
  const keysArray = path.split('.');
  let newobj = JSON.parse(JSON.stringify(obj));
  for (let i = 0; i < keysArray.length; i++) {
    if (typeof newobj[keysArray[i]] === undefined) {
      return newobj[keysArray[i]];
    }
    newobj = newobj[keysArray[i]];
  }
  return newobj;
};
