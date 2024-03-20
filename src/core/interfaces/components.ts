export interface FormItem {
  title: string;
  slug?: string;
  dependent?: string | null;
  fields: (Field | FormItem | TableField)[];
  expand?: boolean;
}

export interface FormSection {
  title: string;
  sections: FormItem[];
}
export interface TableField {
  title?: string;
  table: any[];
}

export interface SurveyStep extends FormSection {
  order: number;
}

export interface Field {
  acceptableFieldValues: any[];
  code: any;
  expand?: boolean;
  dependent: string | null;
  description: string | null;
  label: string;
  required: boolean;
  slug: string;
  type: FieldTypeEnum;
  value: null;
  fields?: Field[];
  table?: any;
  condition: TableFieldCondition | null;
  row?: TableFieldData[];
}

export enum FieldTypeEnum {
  Text = 'text',
  Number = 'number',
  Select = 'select',
  Checkbox = 'checkbox',
  Date = 'date',
  File = 'file',
  Phone = 'phone',
  Email = 'email',
  Point = 'point',
}

export interface TableFieldCondition {
  isSum?: boolean;
  sumFields?: Record<string, any>;
  valueType: 'negative' | 'positive';
}

export interface TableFieldData {
  slug: string;
  value?: string;
}

export interface SurveyStep extends FormSection {
  order: number;
}

export type FormComponentWithoutValue = Omit<
  React.HTMLProps<HTMLInputElement>,
  'value' | 'onChange'
>;

export interface FormComponent extends FormComponentWithoutValue {
  placeholder?: string;
  id: string;
  className?: string;
  label?: string;
  onClick?: () => void;
  disabled?: boolean;
  error?: string | undefined;
}

export interface TableFieldData {
  slug: string;
  value?: string;
}

export interface TableFieldCondition {
  isSum?: boolean;
  sumFields?: Record<string, any>;
  valueType: 'negative' | 'positive';
}

export interface TableCellData {
  label: string;
  type: FieldTypeEnum;
  code: string;
  acceptableFieldValues: [];
  description: null;
  required: true;
  validation: null;
  value: null;
  row: TableFieldData[];
  //TODO типизировать
  condition?: TableFieldCondition;
}

export interface Section {
  title: string;
  fields: TableCellData[];
}

export interface FormTableData {
  title: string;
  sections: Section[];
  fields?: TableCellData[];
}

export interface SelectItem {
  label: string;
  value: string;
}

export interface InputTableColumnInterface<T extends Record<string, any>> {
  key: keyof T;
  title: string;
  width?: number | string;
  render?: (column: InputTableColumnInterface<T>, item: TableCellData) => React.ReactNode;
  sorting?: boolean;
}