import { apiVersionPath } from '@/core/constants/api-constants';
import {
  ApiResponse,
  SurveyFormRequest,
  SurveyFormResponse,
} from '@/core/interfaces';
import { ApiRepositoryContract } from '@/infrastructure/http-layer/ApiRepository/contracts';
import { FormApiServiceContract } from '@/infrastructure/http-layer/ApiServices/contracts/FormApiService.contract';

export class FormApiService implements FormApiServiceContract {
  constructor(private readonly apiRepository: ApiRepositoryContract) {}

  public async getSurveyForm(
    data: SurveyFormRequest,
  ): Promise<ApiResponse<SurveyFormResponse>> {
    return await this.apiRepository.get(`${apiVersionPath}/outer/form`, { params: data });
  }
  public async createSurveyForm(data: any): Promise<ApiResponse<any>> {
    return await this.apiRepository.post(`${apiVersionPath}/outer/create`, data);
  }
}
