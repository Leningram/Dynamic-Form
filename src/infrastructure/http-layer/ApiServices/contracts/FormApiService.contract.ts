import {
  ApiResponse,
  SurveyFormRequest,
  SurveyFormResponse,
} from '@/core/interfaces';

export interface FormApiServiceContract {
  getSurveyForm(data: SurveyFormRequest): Promise<ApiResponse<SurveyFormResponse>>;
  createSurveyForm(data: any): Promise<ApiResponse<any>>;
}