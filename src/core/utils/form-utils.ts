import { FieldValues } from 'react-hook-form';
import { Field, FieldTypeEnum, SurveyFormItem } from '../interfaces';
import { formatDateToString } from './dates';

export const flattenFields = (fields: any): Record<string, any> => {
  return fields.reduce((result: any, field: any) => {
    if (field.table) {
      return { ...result, ...flattenFields(field.table) };
    } else if (field.row) {
      return { ...result, ...flattenFields(field.row) };
    } else if (field.fields) {
      if (field.expand && !field.fields) {
        const transformedArray = [
          field.fields.reduce((acc: Record<string, any>, item: Field) => {
            acc[item.slug] = '';
            return acc;
          }, {}),
        ];
        return { ...result, [field.title]: transformedArray };
      }
      if (field.expand && field.fields) {
        const transformedArray = [
          field.fields.reduce((acc: Record<string, any>, item: Field) => {
            acc[item.slug] = '';
            return acc;
          }, {}),
        ];
        return { ...result, [field.title]: transformedArray };
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
    return [' '];
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

export const convertDynamicFormValues = (arr: SurveyFormItem[]): SurveyFormItem[] => {
  interface IntermediateSurveyFormItem {
    slug: string;
    value: string[];
  }

  // Промежуточный результат с массивами значений
  const intermediateResult = arr.reduce((acc: IntermediateSurveyFormItem[], item) => {
    const existing = acc.find((i) => i.slug === item.slug);
    if (existing) {
      existing.value.push(item.value);
    } else {
      acc.push({ slug: item.slug, value: [item.value] });
    }
    return acc;
  }, []);

  // Преобразование обратно в требуемый формат
  const result: SurveyFormItem[] = intermediateResult
    .map((item) => {
      return { slug: item.slug, value: `['${item.value.join("', '")}']` };
    })
    .reverse();

  return result;
};

export const convertFormValuesToArray = (arr: FieldValues) => {
  const fields = Object.entries(arr).map(([key, value]) => {
    if (Array.isArray(value)) {
      return value.flatMap((obj) => {
        return Object.entries(obj).map(([innerKey, innerValue]) => ({
          slug: innerKey,
          value: innerValue,
        }));
      });
    }
    return {
      slug: key,
      value:
        value instanceof Date
          ? formatDateToString(value)
          : !isNaN(value)
          ? value.toString()
          : value,
    };
  });
  const result = fields
    .map((item) => {
      if (!Array.isArray(item)) {
        return item;
      }
      return convertDynamicFormValues(item as SurveyFormItem[]);
    })
    .flat();
  return result;
};
