import { ApiResponse, SurveyFormRequest, SurveyFormResponse } from '@/core/interfaces';
import { FormServiceContract } from '@/core/services/contracts/form-service.contract';
import { FormApiServiceContract } from '@/infrastructure/http-layer/ApiServices/contracts/FormApiService.contract';
import { surveyMock } from '../constants/mock';

export class FormService implements FormServiceContract {
  constructor(private readonly formApiService: FormApiServiceContract) {}

  public async getSurveyForm(data: SurveyFormRequest): Promise<ApiResponse<SurveyFormResponse>> {
    // const response = await this.formApiService.getSurveyForm(data).catch((error) => error);
    const mockResponse: ApiResponse<SurveyFormResponse> = {
      data: { steps: surveyMock },
      success: true,
      error: null,
    };
    return mockResponse;
  }
}
