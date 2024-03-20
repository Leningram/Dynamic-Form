import { SurveyStep } from "@/core/interfaces";

export enum CountryEnum {
  Ru = 'ru',
}
export enum ContractTypeEnum {
  Value223 = '223',
  Value44 = '44',
  Value275 = '275',
  Value615185 = '615/185',
  ValueКоммерческаяЗакупка = 'Коммерческая закупка',
  ValueДругиеФЗ = 'Другие ФЗ',
}

export enum LegalTypeEnum {
  LLC = 'LLC',
  PE = 'PE',
}
export interface SurveyFormResponse {
  steps: SurveyStep[];
}

export interface SurveyFormRequest {
  country: CountryEnum;
  legalType: LegalTypeEnum;
  inn: string;
  contractType: ContractTypeEnum;
  sum: number;
}

export interface ApiResponse<T> {
  data: T;
  error: any;
  success: boolean;
}