import { Field, FieldTypeEnum } from "../interfaces";

export const flattenFields = (fields: any): Record<string, any> => {
  return fields.reduce((result: any, field: any) => {
    if (field.table) {
      return { ...result, ...flattenFields(field.table) };
    } else if (field.row) {
      return { ...result, ...flattenFields(field.row) };
    } else if (field.fields) {
      if (field.expand) {
        const transformedArray = [field.fields.reduce((acc: Record<string,any>, item: Field) => {
          acc[item.slug] = '';
          return acc;
        }, {})];
        return {...result, [field.title]: transformedArray}
      }
      return { ...result, ...flattenFields(field.fields) };
    } else if (field.sections) {
      return { ...result, ...flattenFields(field.sections) };
    } else {
      return { ...result, [field.slug]: getFieldDefaultValue(field) };
    }
  }, {});
};


export const getFieldDefaultValue = (field: Field): string | Date | number | string[] => {
  if (field.value) {
    return field.value;
  }
  if (field.expand) {
    return [' ']
  }
  if (field.type === FieldTypeEnum.Checkbox) {
    return 'false';
  }
  if (field.type === FieldTypeEnum.Date) {
    return new Date();
  }
  if (field.type === FieldTypeEnum.Select) {
    return field.acceptableFieldValues[0].value;
  }
  if (field.type === FieldTypeEnum.File) {
    return '';
  }
  return '';
};