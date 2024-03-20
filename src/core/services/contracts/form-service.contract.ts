import {
  SurveyFormRequest,
  SurveyFormResponse,
} from '@/core/interfaces';
import { ApiResponse } from '@/core/interfaces';

export interface FormServiceContract {
  getSurveyForm(data: SurveyFormRequest): Promise<ApiResponse<SurveyFormResponse>>;
}
